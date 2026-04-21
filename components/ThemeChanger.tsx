import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa";

const ThemeButton = () => {
    const { theme, setTheme } = useTheme();
    return (
        <button
            aria-label="Toggle theme"
            className="text-xl md:text-2xl"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--fg)",
                padding: 0,
                transition: "color 300ms",
            }}
        >
            <FaSun />
        </button>
    );
};

export default ThemeButton;
