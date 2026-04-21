import { useState } from "react";
import { FaArrowUpRightFromSquare, FaAngleDown, FaAngleUp } from "react-icons/fa6";

export interface ProjectData {
    name: string;
    description: string;
    image: string;
    link: string;
    year: number;
    tech: string[];
}

function ProjectIndex({
    index,
    data,
}: {
    index: number;
    data: ProjectData;
}) {
    const [hover, setHover] = useState(false);
    const { name, description, image, link, year, tech } = data;

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="avltg-project-row"
            style={{
                display: "grid",
                gap: 32,
                alignItems: "start",
                padding: "28px 0",
                borderTop: "1px solid var(--fg-4)",
                textDecoration: "none",
                color: "var(--fg)",
                position: "relative",
            }}
        >
            {/* Hover image preview — desktop only */}
            <div
                aria-hidden
                className="hidden lg:block"
                style={{
                    position: "absolute",
                    left: "38%",
                    top: "50%",
                    width: 220,
                    height: 140,
                    transform: `translateY(-50%) scale(${hover ? 1 : 0.94})`,
                    opacity: hover ? 1 : 0,
                    transition: "opacity 200ms, transform 200ms",
                    pointerEvents: "none",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid var(--fg)",
                    boxShadow: "0 20px 40px -20px rgba(26,21,20,0.35)",
                    zIndex: 2,
                }}
            >
                <img
                    src={image}
                    alt=""
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "contrast(0.85) saturate(0.9)",
                    }}
                />
            </div>

            <div
                className="cinzel avltg-project-num"
                style={{
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    color: "var(--fg-2)",
                    paddingTop: 6,
                }}
            >
                {String(index).padStart(2, "0")}
            </div>

            <div className="avltg-project-title-col">
                <h3
                    className="libreCaslonBold"
                    style={{
                        fontSize: "clamp(22px, 2.4vw, 34px)",
                        fontWeight: 700,
                        lineHeight: 1.1,
                        color: hover ? "var(--purple)" : "var(--fg)",
                        transition: "color 200ms",
                    }}
                >
                    {name}
                </h3>
                {tech.length > 0 && (
                    <div
                        className="workSans"
                        style={{
                            marginTop: 8,
                            fontSize: 12,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "var(--fg-2)",
                        }}
                    >
                        {tech.join(" · ")}
                    </div>
                )}
            </div>

            <p
                className="workSans avltg-project-desc"
                style={{
                    fontSize: 16,
                    lineHeight: 1.65,
                    color: "var(--fg-2)",
                    paddingTop: 4,
                }}
            >
                {description}
            </p>

            <div
                className="avltg-project-meta"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    paddingTop: 6,
                    color: "var(--fg-2)",
                }}
            >
                <span
                    className="workSans"
                    style={{ fontSize: 13, letterSpacing: "0.08em" }}
                >
                    {year}
                </span>
                <FaArrowUpRightFromSquare
                    style={{
                        fontSize: 14,
                        transform: hover
                            ? "translate(2px, -2px)"
                            : "translate(0,0)",
                        transition: "transform 200ms, color 200ms",
                        color: hover ? "var(--purple)" : "var(--fg-2)",
                    }}
                />
            </div>

            <style jsx>{`
                .avltg-project-row {
                    grid-template-columns: 64px 1.1fr 2fr auto;
                }
                @media (max-width: 900px) {
                    .avltg-project-row {
                        grid-template-columns: 40px 1fr auto;
                        gap: 20px;
                    }
                    .avltg-project-desc {
                        grid-column: 1 / -1;
                        padding-top: 0;
                        margin-top: -8px;
                        padding-left: 60px;
                    }
                }
            `}</style>
        </a>
    );
}

export default function Projects({ projects }: { projects: ProjectData[] }) {
    const INITIAL = 5;
    const [expanded, setExpanded] = useState(false);

    const showAll = expanded || projects.length <= INITIAL;
    const visible = showAll ? projects : projects.slice(0, INITIAL);
    const hiddenCount = projects.length - INITIAL;

    return (
        <div>
            <div style={{ borderBottom: "1px solid var(--fg-4)" }}>
                {visible.map((p, i) => (
                    <ProjectIndex key={p.name} index={i + 1} data={p} />
                ))}
            </div>

            {projects.length > INITIAL && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 40,
                    }}
                >
                    <button
                        type="button"
                        onClick={() => setExpanded((e) => !e)}
                        className="workSans"
                        style={{
                            background: "none",
                            cursor: "pointer",
                            border: "1px solid var(--fg)",
                            borderRadius: 9999,
                            padding: "10px 22px",
                            fontSize: 12,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            fontWeight: 500,
                            color: "var(--fg)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 12,
                            transition: "color 200ms, border-color 200ms",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = "var(--purple)";
                            e.currentTarget.style.borderColor = "var(--purple)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = "var(--fg)";
                            e.currentTarget.style.borderColor = "var(--fg)";
                        }}
                    >
                        {expanded
                            ? "Show fewer projects"
                            : `Show ${hiddenCount} more project${
                                  hiddenCount === 1 ? "" : "s"
                              }`}
                        {expanded ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                </div>
            )}
        </div>
    );
}
