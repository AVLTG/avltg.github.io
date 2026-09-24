interface ExperienceProps {
    company: string;
    role: string;
    period: string;
    location?: string;
    summary: string;
    highlights: string[];
    technologies: string[];
}

export default function Experience({
    company,
    role,
    period,
    location,
    summary,
    highlights,
    technologies,
}: ExperienceProps) {
    return (
        <div
            style={{
                border: "1px solid var(--fg)",
                borderRadius: 24,
                padding: "clamp(24px, 3vw, 40px)",
                color: "var(--fg)",
            }}
        >
            <div
                className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4"
                style={{ flexWrap: "wrap" }}
            >
                <div>
                    <h3
                        className="libreCaslonBold"
                        style={{
                            fontSize: "clamp(22px, 2.5vw, 36px)",
                            fontWeight: 700,
                            lineHeight: 1.15,
                            color: "var(--fg)",
                        }}
                    >
                        {company}
                    </h3>
                    <p
                        className="workSans"
                        style={{
                            fontSize: 18,
                            color: "var(--purple)",
                            marginTop: 4,
                        }}
                    >
                        {role}
                    </p>
                </div>
                <p
                    className="workSans md:text-right"
                    style={{
                        fontSize: 14,
                        opacity: 0.6,
                        lineHeight: 1.5,
                    }}
                >
                    {period}
                    {location && (
                        <>
                            <br className="hidden md:block" />
                            <span className="md:hidden"> · </span>
                            {location}
                        </>
                    )}
                </p>
            </div>

            <p
                className="workSans"
                style={{
                    fontSize: 16,
                    lineHeight: 1.65,
                    textAlign: "justify",
                }}
            >
                {summary}
            </p>

            <ul
                className="workSans"
                style={{
                    marginTop: 16,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                }}
            >
                {highlights.map((highlight, i) => (
                    <li
                        key={i}
                        style={{
                            display: "flex",
                            gap: 12,
                            fontSize: 15,
                            lineHeight: 1.6,
                        }}
                    >
                        <span style={{ flexShrink: 0, opacity: 0.4 }}>
                            &#8226;
                        </span>
                        <span>{highlight}</span>
                    </li>
                ))}
            </ul>

            <ul
                aria-label="Technologies"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    marginTop: 24,
                }}
            >
                {technologies.map((tech) => (
                    <li
                        key={tech}
                        className="workSans tech-tag"
                        style={{
                            fontSize: 12,
                            border: "1px solid var(--fg)",
                            borderRadius: 9999,
                            padding: "4px 12px",
                            cursor: "default",
                        }}
                    >
                        {tech}
                    </li>
                ))}
            </ul>
        </div>
    );
}
