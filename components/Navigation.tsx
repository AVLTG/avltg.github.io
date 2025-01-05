import ThemeButton from "./ThemeChanger";
import { FaAngleUp } from "react-icons/fa";
import { useEffect, useState } from "react";


export function Header() {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="px-8 lg:px-56 pt-10 pb-1 flex justify-between items-center">
            <a className="pirataOne text-2xl" href="#">AVLTG</a>
            <nav>
                <ul className="flex md:space-x-4 text-sm lg:text-lg">
                    {['about', 'projects', 'contact'].map((section) => (
                        <li key={section}>
                            <a href={`#${section}`} onClick={(e) => handleNavClick(e, section)}>
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <ThemeButton />
        </header>
    );
}

export function Footer() {
    return (
        <footer className="md:px-24 pt-4 pb-20 md:pb-8 flex">
        <div className="mx-auto text-center">
            <p className="libreCaslon text-sm">&copy; 2025 Amirali Tolooei</p>
            <p className="text-xs">Created using React and with the help of <a href="https://madelahn.com" target="_blank" className="text-purple">madelahn</a>.</p>
        </div>
        </footer>
    );
}


export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed bottom-8 right-10 lg:bottom-16 lg:right-16 border border-foreground rounded-full p-1 transition-opacity duration-300 ease-out hover:border-purple ${
                isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
            <a className="text-2xl md:text-4xl hover:cursor-pointer" onClick={handleClick}><FaAngleUp /></a>
        </div>
    );
}
