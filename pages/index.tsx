import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects, { ProjectData } from "../components/Project";
import Contact from "../components/Contact";

const PROJECTS: ProjectData[] = [
    {
        name: "Friend Library",
        year: 2026,
        tech: ["React", "Node", "Postgres"],
        description:
            "A book-sharing platform for friend groups to browse shared bookshelves, track ownership, leave ratings and reviews, and discover what each other are reading.",
        image: "/images/friendLibrary.png",
        link: "https://github.com/avltg/friend-library",
    },
    {
        name: "Magic Scraper",
        year: 2026,
        tech: ["Python", "FastAPI", "BeautifulSoup"],
        description:
            "A deck-building companion for Magic: The Gathering players that searches friends' Moxfield collections and local game store inventories.",
        image: "/images/magicScraper.png",
        link: "https://github.com/avltg/magic-scraper",
    },
    {
        name: "FinTrack",
        year: 2026,
        tech: ["Python", "pdfplumber", "React"],
        description:
            "A personal finance dashboard that ingests bank statement PDFs, tracks balances across accounts, and calculates net worth over time.",
        image: "/images/fintrack.png",
        link: "https://www.github.com/avltg",
    },
    {
        name: "Size Matters",
        year: 2025,
        tech: ["Unity", "C#"],
        description:
            "A single-player puzzle experience, where players are challenged to cross a series of rooms by completing puzzles that can only be solved using the Swap Mechanic.",
        image: "/images/sizeMatters.png",
        link: "https://gump0.itch.io/size-matters",
    },
    {
        name: "Connuki",
        year: 2024,
        tech: ["TypeScript", "Chrome Ext"],
        description:
            "A Chrome extension that helps users change their YouTube recommendation algorithm, seeing more of what they want and suppressing the rest.",
        image: "/images/connuki.jpg",
        link: "https://devpost.com/software/contentnuke",
    },
    {
        name: "U-Net Segmentation",
        year: 2023,
        tech: ["PyTorch", "NumPy"],
        description:
            "An implementation of the U-Net architecture for segmenting overlapping MNIST digits into 11 distinct classes.",
        image: "/images/Unet.png",
        link: "https://colab.research.google.com/drive/1lOd01zhpsz5L795FKP-ZL03TexQDWAhD?usp=sharing",
    },
    {
        name: "MathBERT Fine-Tuning",
        year: 2023,
        tech: ["PyTorch", "Pandas"],
        description:
            "A fine-tuning experiment using MathBERT and BERTweet on a verbal arithmetic classification task.",
        image: "/images/Bert.png",
        link: "https://colab.research.google.com/drive/1fFks3sL0sasPM6VV7fbjOK9ABdlKjFyt?usp=sharing",
    },
    {
        name: "PatchMatch",
        year: 2023,
        tech: ["NumPy", "Python"],
        description:
            "An object-oriented implementation of the PatchMatch algorithm using only NumPy, with optimized nearest-neighbor field generation, vectorized patch comparisons, and image reconstruction (not public for academic integrity reasons).",
        image: "/images/PatchMatch.png",
        link: "https://www.github.com/avltg",
    },
];

const EXPERIENCES = [
    {
        company: "Cypress",
        role: "Full-Stack Developer & DevOps Engineer",
        period: "Jan 2026 — Apr 2026",
        summary:
            "Led full-stack development of an MVP fleet finance platform from the ground up for a startup in the automotive remarketing space, working alongside a senior developer and designer. Responsible for backend architecture, frontend implementation, cloud infrastructure, and CI/CD.",
        highlights: [
            "Designed and built a Django REST Framework API with JWT authentication, 3-tier role-based access control, invitation-based onboarding, and a configurable pricing policy engine integrating Cox Automotive's MMR API",
            "Built a React 18 + TypeScript SPA with shadcn/ui, implementing a Figma-to-code design system with role-conditional dashboards, data tables, and a multi-step signup wizard",
            "Provisioned staging infrastructure on GCP — Cloud Run, Cloud SQL (PostgreSQL 16), and Artifact Registry — with multi-stage Docker images and cross-platform support",
            "Enforced strict code quality with mypy strict mode, ruff linting, AST-based schema validation, and 400+ automated tests",
            "Helped grow the company from first revenue to over $12M in annualized GMV in its first quarter of trading",
        ],
        technologies: [
            "Python",
            "Django",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "shadcn/ui",
            "PostgreSQL",
            "GCP",
            "Cloud Run",
            "Docker",
        ],
    },
    {
        company: "Montagy AI",
        role: "AI Developer",
        period: "May 2025 — Oct 2025",
        location: "Vancouver, BC",
        summary:
            "Contributed to a voice cloning and text-to-speech platform focused on generating personalized speech synthesis from user voice recordings, with multilingual capabilities and emotion blending.",
        highlights: [
            "Deployed a zero-shot TTS system using a diffusion transformer model in a Python Flask application that records user voices and generates personalized speech synthesis",
            "Optimized production model pipelines with FastAPI, implementing server-level caching strategies to achieve 98% uptime and reduce latency by 40%",
            "Containerized applications with Docker and established CI/CD pipelines with GitHub Actions, automating testing, linting, and deployment workflows",
        ],
        technologies: [
            "Python",
            "Flask",
            "FastAPI",
            "SQLite",
            "ChromaDB",
            "AWS",
            "Docker",
            "GitHub Actions",
        ],
    },
];

const ABOUT_LEDE =
    "My name is Amirali Tolooei, a computer science major and statistics minor graduate from the University of Toronto. In school I spent a lot of time learning Machine Learning and Human-Computer Interaction. Since graduating, I've worked two startup contracts back to back, and used the gaps between them to chase whatever caught my attention.";

const ABOUT_BODY =
    "I've been a huge video game nerd since I was a kid, and that's really what ignited my passion for computer science to begin with. During my studies AI hit its huge boom and I ended up making it my focus, doing a concentration in AI and Human-Computer Interaction. Lately that curiosity has spilled in every direction: built this site, am working on helping set up a new storefront for HobbyKnight (a local game store), trained SqueeBot (a Discord chatbot styled as a Magic: The Gathering character, via QLoRA fine-tuning), and replaced my OS with Linux to dig into how operating systems actually work.";

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
                <About lede={ABOUT_LEDE} body={ABOUT_BODY} />
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
