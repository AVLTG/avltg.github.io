import ThemeButton from "./ThemeChanger";


export function Header() {
    return (
        <header className="px-56 pt-10 pb-1 flex justify-between items-center">
            <a className="pirataOne text-2xl" href="#">AVLTG</a>
            <nav>
                <ul className="">
                    <li className=""><a href="#about">About</a></li>
                    <li className=""><a href="#projects">Projects</a></li>
                    <li className=""><a href="#contact">Contact</a></li>
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