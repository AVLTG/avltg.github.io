import ThemeButton from "./ThemeChanger";


export function Header() {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="pirataOne text-2xl">AVLTG</div>
            <nav>
                <ul>
                    <li className="">About</li>
                    <li className="">Projects</li>
                    <li className="">Contact</li>
                </ul>
            </nav>
            <ThemeButton />
        </header>
    );
}

export function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
        <div className="mx-auto">
            <p>&copy; 2025</p>
        </div>
        </footer>
    );
}