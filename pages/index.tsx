import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Project";
import Contact from "../components/Contact";
import {
    ABOUT_BODY,
    ABOUT_FACTS,
    ABOUT_LEDE,
    EXPERIENCES,
    PROJECTS,
} from "../content/site";

function Section({
    id,
    title,
    children,
}: {
    id: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section
            id={id}
            style={{
                display: "flex",
                flexDirection: "column",
                margin: "0 var(--gutter) 96px",
            }}
        >
            <h2
                className="libreCaslonBold"
                style={{
                    fontSize: "clamp(36px, 5vw, 60px)",
                    textAlign: "center",
                    fontWeight: 700,
                    marginBottom: 32,
                    color: "var(--fg)",
                }}
            >
                {title}
            </h2>
            {children}
        </section>
    );
}

export default function Website() {
    return (
        <>
            <Hero />

            <Section id="about" title="About Me">
                <About
                    lede={ABOUT_LEDE}
                    body={ABOUT_BODY}
                    facts={ABOUT_FACTS}
                />
            </Section>

            <Section id="projects" title="Projects">
                <Projects projects={PROJECTS} />
            </Section>

            <Section id="experience" title="Experience">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 24,
                    }}
                >
                    {EXPERIENCES.map((e) => (
                        <Experience key={e.company} {...e} />
                    ))}
                </div>
            </Section>

            <Section id="contact" title="Contact">
                <Contact />
            </Section>
        </>
    );
}
