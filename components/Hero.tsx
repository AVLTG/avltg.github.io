export default function Hero() {
    return (
        <section
            id="hero"
            className="relative"
            style={{
                padding: "180px var(--gutter) 140px",
                marginBottom: 48,
            }}
        >
            <div
                style={{
                    height: 1,
                    background: "var(--fg-4)",
                    marginBottom: 56,
                }}
            />

            <div
                className="cinzel"
                style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: "var(--purple)",
                    marginBottom: 32,
                }}
            >
                Portfolio · MMXXVI
            </div>

            <h1
                className="libreCaslonBold"
                style={{
                    fontSize: "clamp(48px, 10vw, 144px)",
                    lineHeight: 0.92,
                    letterSpacing: "-0.02em",
                    textWrap: "balance",
                    color: "var(--fg)",
                    maxWidth: "14ch",
                }}
            >
                Amirali Tolooei
                <span style={{ color: "var(--purple)" }}>.</span>
            </h1>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginTop: 40,
                    color: "var(--fg)",
                }}
            >
                <span
                    style={{
                        display: "inline-block",
                        width: 56,
                        height: 1,
                        background: "var(--fg)",
                    }}
                />
                <p
                    className="libreCaslonIt"
                    style={{
                        fontSize: "clamp(18px, 2vw, 26px)",
                        fontStyle: "italic",
                    }}
                >
                    Software Developer, Toronto
                </p>
            </div>

            <p
                className="workSans"
                style={{
                    marginTop: 48,
                    maxWidth: 620,
                    fontSize: 18,
                    lineHeight: 1.7,
                    color: "var(--fg-2)",
                }}
            >
                Computer Science, University of Toronto. Recently shipping a
                fleet-finance MVP at Cypress. Interested in full-stack, ML, and
                games — in roughly that order, on a given Tuesday.
            </p>

            <div
                className="hidden md:flex"
                style={{
                    position: "absolute",
                    right: "var(--gutter)",
                    bottom: 48,
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    color: "var(--fg-2)",
                }}
            >
                <span
                    className="workSans"
                    style={{
                        fontSize: 10,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                    }}
                >
                    Scroll
                </span>
                <span
                    style={{
                        display: "inline-block",
                        width: 1,
                        height: 36,
                        background:
                            "linear-gradient(180deg, var(--fg), transparent)",
                        animation:
                            "heroScrollPulse 2.2s ease-in-out infinite",
                    }}
                />
            </div>

            <style jsx>{`
                @keyframes heroScrollPulse {
                    0%,
                    100% {
                        transform: scaleY(0.6);
                        transform-origin: top;
                        opacity: 0.4;
                    }
                    50% {
                        transform: scaleY(1);
                        transform-origin: top;
                        opacity: 1;
                    }
                }
            `}</style>
        </section>
    );
}
