import ThemeButton from "./ThemeChanger";
import { FaAngleUp } from "react-icons/fa";
import { useEffect, useState } from "react";


export function Header() {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="px-56 pt-10 pb-1 flex justify-between items-center">
            <a className="pirataOne text-2xl" href="#">AVLTG</a>
            <nav>
                <ul className="flex space-x-4">
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
        <footer className="px-24 flex">
        <div className="mx-auto">
            <p>&copy; 2025</p>
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
        <div className={`fixed bottom-16 right-16 border border-foreground rounded-full p-1 transition-opacity duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <a href="#" className="text-4xl" onClick={handleClick}><FaAngleUp /></a>
        </div>
    );
}
