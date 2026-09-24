import type { ProjectData } from "../components/Project";

export const PROJECTS: ProjectData[] = [
    {
        name: "TableTally",
        year: 2026,
        tech: ["Python", "FastAPI", "BeautifulSoup"],
        description:
            "A deck-building companion for Magic: The Gathering players that searches friends' Moxfield collections and local game store inventories.",
        image: "/images/tableTally.webp",
        link: "https://tabletally.avltg.dev",
    },
    {
        name: "SqueeBot",
        year: 2026,
        tech: ["TypeScript", "vLLM", "QLoRA"],
        description:
            "A Discord chatbot styled as a Magic: The Gathering character, with a three-tier LLM cascade, local RAG over 10K embeddings, per-user memory, and a self-hosted QLoRA fine-tune of Llama 3.1 8B.",
        image: "/images/squeeBot.webp",
        link: "https://github.com/avltg/squeebot",
    },
    {
        name: "BookShare",
        year: 2026,
        tech: ["Next.js", "TypeScript", "Drizzle"],
        description:
            "A book-sharing platform for friend groups to browse shared bookshelves, track ownership, leave ratings and reviews, and discover what each other are reading.",
        image: "/images/friendLibrary.webp",
        link: "https://github.com/avltg/friend-library",
    },
    {
        name: "FinTrack",
        year: 2026,
        tech: ["Python", "pdfplumber", "React"],
        description:
            "A personal finance dashboard that ingests bank statement PDFs, tracks balances across accounts, and calculates net worth over time.",
        image: "/images/fintrack.webp",
        link: "https://www.github.com/avltg",
    },
    {
        name: "Size Matters",
        year: 2025,
        tech: ["Unity", "C#"],
        description:
            "A single-player puzzle experience, where players are challenged to cross a series of rooms by completing puzzles that can only be solved using the Swap Mechanic.",
        image: "/images/sizeMatters.webp",
        link: "https://gump0.itch.io/size-matters",
    },
    {
        name: "Connuki",
        year: 2024,
        tech: ["TypeScript", "Chrome Ext"],
        description:
            "A Chrome extension that helps users change their YouTube recommendation algorithm, seeing more of what they want and suppressing the rest.",
        image: "/images/connuki.webp",
        link: "https://devpost.com/software/contentnuke",
    },
    {
        name: "U-Net Segmentation",
        year: 2023,
        tech: ["PyTorch", "NumPy"],
        description:
            "An implementation of the U-Net architecture for segmenting overlapping MNIST digits into 11 distinct classes.",
        image: "/images/Unet.webp",
        link: "https://colab.research.google.com/drive/1lOd01zhpsz5L795FKP-ZL03TexQDWAhD?usp=sharing",
    },
    {
        name: "MathBERT Fine-Tuning",
        year: 2023,
        tech: ["PyTorch", "Pandas"],
        description:
            "A fine-tuning experiment using MathBERT and BERTweet on a verbal arithmetic classification task.",
        image: "/images/Bert.webp",
        link: "https://colab.research.google.com/drive/1fFks3sL0sasPM6VV7fbjOK9ABdlKjFyt?usp=sharing",
    },
    {
        name: "PatchMatch",
        year: 2023,
        tech: ["NumPy", "Python"],
        description:
            "An object-oriented implementation of the PatchMatch algorithm using only NumPy, with optimized nearest-neighbor field generation, vectorized patch comparisons, and image reconstruction (not public for academic integrity reasons).",
        image: "/images/PatchMatch.webp",
        link: "https://www.github.com/avltg",
    },
];

export interface ExperienceData {
    company: string;
    role: string;
    period: string;
    location?: string;
    summary: string;
    highlights: string[];
    technologies: string[];
}

export const EXPERIENCES: ExperienceData[] = [
    {
        company: "HouseSigma",
        role: "Full-Stack Developer",
        period: "Jun 2026 — Present",
        location: "Remote — Toronto, ON",
        summary:
            "Building applied-AI systems for a Canadian real-estate platform: a real-time voice agent that runs candidate pre-screens, and an evaluation platform for vision-language models in the listing photo pipeline.",
        highlights: [
            "Built and deployed an AI voice agent that conducts real-time phone pre-screen interviews, using a Twilio + Deepgram speech pipeline with concurrent LLM classifiers for turn-taking and adaptive follow-ups",
            "Built an LLM-persona test harness that exercises the live agent with synthetic candidates graded on a multi-axis rubric, and designed the real-time audio media bridge the calling system runs on",
            "Designed and built an end-to-end LLM evaluation platform for a real-estate photo pipeline, benchmarking 15+ vision-language models against a human-verified golden set with a validated LLM-as-judge cascade",
            "Improved model output quality through iterative prompt and context engineering, and produced inference cost analysis to inform production-scale deployment",
        ],
        technologies: [
            "Python",
            "Twilio",
            "Deepgram",
            "AWS Bedrock",
            "S3",
            "LLMs/VLMs",
            "Kafka",
            "GitHub Actions",
        ],
    },
    {
        company: "Cypress",
        role: "Founding Engineer & Full-Stack Developer",
        period: "Jan 2026 — Apr 2026",
        location: "Remote — San Francisco, CA",
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
        location: "Toronto, ON",
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

export const ABOUT_LEDE =
    "My name is Amirali Tolooei, a computer science major and statistics minor graduate from the University of Toronto. In school I spent a lot of time learning Machine Learning and Human-Computer Interaction. Since graduating, I've shipped AI and full-stack work at three companies — voice cloning at Montagy, fleet finance at Cypress, and now applied AI at HouseSigma — and used the gaps between to chase whatever caught my attention.";

export const ABOUT_BODY =
    "I've been a huge video game nerd since I was a kid, and that's really what ignited my passion for computer science to begin with. During my studies AI hit its huge boom and I ended up making it my focus, doing a concentration in AI and Human-Computer Interaction. Lately that curiosity has spilled in every direction: built this site, set up a homelab server, trained SqueeBot (a Discord chatbot styled as a Magic: The Gathering character, via QLoRA fine-tuning), and replaced my OS with Arch Linux to dig into how operating systems actually work (I use Arch, btw).";

export const ABOUT_FACTS: { k: string; v: string }[] = [
    { k: "Based in", v: "Toronto, ON" },
    { k: "Expertise", v: "Full-Stack · Applied AI · DevOps" },
    { k: "Currently", v: "Tinkering: Homelab · TableTally" },
    { k: "Latest", v: "Full-Stack @ HouseSigma" },
    { k: "Learning", v: "Proxmox LXCs · Docker" },
    { k: "Off-screen", v: "MTG · Gym · Game backlog?" },
];
