import ThemeButton from "./ThemeChanger";
import { FaAngleUp, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SECTIONS = ["about", "experience", "projects", "contact"] as const;
type SectionId = (typeof SECTIONS)[number];

function useActiveSection(ids: readonly string[], enabled: boolean) {
    const [active, setActive] = useState<string>(ids[0]);

    useEffect(() => {
        if (!enabled) return;

        const onScroll = () => {
            const nearBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 4;
            if (nearBottom) {
                setActive(ids[ids.length - 1]);
                return;
            }
            const y = window.scrollY + window.innerHeight * 0.35;
            let cur = ids[0];
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= y) cur = id;
            }
            setActive(cur);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [ids, enabled]);

    return active;
}

export function Header() {
    const router = useRouter();
    const isHome = router.pathname === "/";
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const active = useActiveSection(SECTIONS, isHome);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        id: SectionId,
    ) => {
        e.preventDefault();
        setMenuOpen(false);
        if (isHome) {
            const el = document.getElementById(id);
            if (el) {
                const y =
                    el.getBoundingClientRect().top + window.scrollY - 72;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        } else {
            router.push(`/#${id}`);
        }
    };

    const label = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

    const headerStyle: React.CSSProperties = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled
            ? "color-mix(in oklab, var(--background) 82%, transparent)"
            : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(1.1)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(1.1)" : "none",
        borderBottom: scrolled
            ? "1px solid var(--fg-4)"
            : "1px solid transparent",
        transition:
            "background-color 350ms ease, backdrop-filter 350ms ease, border-color 350ms ease",
    };

    return (
        <header
            style={headerStyle}
            className="px-8 md:px-24 lg:px-56 py-5 flex justify-between items-center"
        >
            <Link
                href="/"
                className="cinzel text-2xl tracking-[0.14em] font-semibold"
            >
                AVLTG
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:block">
                <ul className="flex gap-7 items-center">
                    {SECTIONS.map((section) => (
                        <li key={section}>
                            <a
                                href={`/#${section}`}
                                onClick={(e) => handleNavClick(e, section)}
                                className="workSans text-sm tracking-wider uppercase font-medium transition-colors duration-300"
                                style={{
                                    color:
                                        isHome && active === section
                                            ? "var(--purple)"
                                            : "var(--fg)",
                                }}
                            >
                                {label(section)}
                            </a>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="/resume"
                            className="workSans text-sm tracking-wider uppercase font-medium"
                            style={{
                                color:
                                    router.pathname === "/resume"
                                        ? "var(--purple)"
                                        : "var(--fg)",
                            }}
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-4">
                <ThemeButton />
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <nav
                    className="absolute top-full right-4 mt-2 p-4 z-50 md:hidden"
                    style={{
                        background: "var(--bg)",
                        border: "1px solid var(--fg)",
                        borderRadius: 16,
                    }}
                >
                    <ul className="flex flex-col gap-3">
                        {SECTIONS.map((section) => (
                            <li key={section}>
                                <a
                                    href={`/#${section}`}
                                    onClick={(e) =>
                                        handleNavClick(e, section)
                                    }
                                    className="workSans text-sm tracking-wider uppercase font-medium"
                                    style={{
                                        color:
                                            isHome && active === section
                                                ? "var(--purple)"
                                                : "var(--fg)",
                                    }}
                                >
                                    {label(section)}
                                </a>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/resume"
                                className="workSans text-sm tracking-wider uppercase font-medium"
                                onClick={() => setMenuOpen(false)}
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export function Footer() {
    return (
        <footer className="py-6 text-center">
            <p className="libreCaslon text-sm">&copy; 2026 Amirali Tolooei</p>
            <p className="workSans text-xs mt-1" style={{ color: "var(--fg-2)" }}>
                Created using React and with the help of{" "}
                <a
                    href="https://madelahn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--purple)", textDecoration: "none" }}
                >
                    madelahn
                </a>
                .
            </p>
        </footer>
    );
}

export function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={handleClick}
            aria-label="Back to top"
            className="fixed bottom-10 right-10 lg:bottom-16 lg:right-16 rounded-full p-2 transition-all duration-300 ease-out hover:border-purple"
            style={{
                border: "1px solid var(--fg)",
                background: "var(--bg)",
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? "auto" : "none",
            }}
        >
            <FaAngleUp className="text-2xl md:text-3xl" />
        </button>
    );
}
