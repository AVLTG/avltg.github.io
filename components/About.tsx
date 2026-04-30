interface Fact {
    k: string;
    v: string;
}

interface AboutProps {
    lede: string;
    body: string;
    quote?: string;
    facts?: Fact[];
}

const DEFAULT_QUOTE =
    "Every corner of computer science feels worth the detour.";

const DEFAULT_FACTS: Fact[] = [
    { k: "Based in", v: "Toronto, ON" },
    { k: "Expertise", v: "Full-Stack · ML · DevOps" },
    { k: "Currently", v: "Tinkering: SqueeBot · MagicScraper" },
    { k: "Latest", v: "Full-Stack @ Cypress" },
    { k: "Learning", v: "How to navigate my Linux desktop" },
    { k: "Off-screen", v: "MTG · Gym · FF Marathon" },
];

export default function About({
    lede,
    body,
    quote = DEFAULT_QUOTE,
    facts = DEFAULT_FACTS,
}: AboutProps) {
    return (
        <div className="avltg-about">
            <div className="avltg-about-body">
                <p
                    className="libreCaslon"
                    style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(20px, 1.7vw, 26px)",
                        lineHeight: 1.55,
                        letterSpacing: "-0.005em",
                        color: "var(--fg)",
                    }}
                >
                    {lede.trim()}
                </p>

                <div
                    aria-hidden
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        margin: "40px 0",
                    }}
                >
                    <span
                        style={{
                            flex: 1,
                            height: 1,
                            background: "var(--fg-4)",
                        }}
                    />
                    <span
                        className="cinzel"
                        style={{
                            fontSize: 11,
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            color: "var(--fg-2)",
                        }}
                    >
                        &#167;
                    </span>
                    <span
                        style={{
                            flex: 1,
                            height: 1,
                            background: "var(--fg-4)",
                        }}
                    />
                </div>

                <blockquote
                    className="libreCaslonIt"
                    style={{
                        fontFamily: "var(--font-serif)",
                        fontStyle: "italic",
                        fontWeight: 400,
                        fontSize: "clamp(22px, 2.2vw, 34px)",
                        lineHeight: 1.3,
                        letterSpacing: "-0.005em",
                        color: "var(--fg)",
                        margin: "0 0 40px",
                        paddingLeft: 24,
                        borderLeft: "1px solid var(--purple)",
                    }}
                >
                    {quote}
                </blockquote>

                <p
                    className="workSans"
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 18,
                        lineHeight: 1.75,
                        color: "var(--fg-2)",
                    }}
                >
                    {body}
                </p>
            </div>

            <aside className="avltg-about-aside">
                <div
                    className="cinzel"
                    style={{
                        fontSize: 11,
                        letterSpacing: "0.32em",
                        textTransform: "uppercase",
                        color: "var(--purple)",
                        marginBottom: 20,
                    }}
                >
                    At a glance
                </div>

                <dl style={{ margin: 0 }}>
                    {facts.map((f, i) => (
                        <div
                            key={f.k}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "96px 1fr",
                                gap: 16,
                                padding: "14px 0",
                                borderTop:
                                    i === 0
                                        ? "1px solid var(--fg)"
                                        : "1px solid var(--fg-4)",
                                alignItems: "baseline",
                            }}
                        >
                            <dt
                                className="workSans"
                                style={{
                                    fontSize: 11,
                                    letterSpacing: "0.16em",
                                    textTransform: "uppercase",
                                    color: "var(--fg-2)",
                                    fontWeight: 500,
                                }}
                            >
                                {f.k}
                            </dt>
                            <dd
                                className="libreCaslon"
                                style={{
                                    margin: 0,
                                    fontFamily: "var(--font-serif)",
                                    fontSize: 16,
                                    lineHeight: 1.4,
                                    color: "var(--fg)",
                                }}
                            >
                                {f.v}
                            </dd>
                        </div>
                    ))}
                    <div style={{ borderTop: "1px solid var(--fg-4)" }} />
                </dl>
            </aside>

            <style jsx>{`
                .avltg-about {
                    display: grid;
                    grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
                    gap: clamp(32px, 6vw, 96px);
                    align-items: start;
                }
                .avltg-about-body {
                    max-width: 62ch;
                }
                .avltg-about-aside {
                    position: sticky;
                    top: 100px;
                    padding-top: 6px;
                }
                @media (max-width: 900px) {
                    .avltg-about {
                        grid-template-columns: 1fr;
                    }
                    .avltg-about-aside {
                        position: static;
                    }
                }
            `}</style>
        </div>
    );
}
