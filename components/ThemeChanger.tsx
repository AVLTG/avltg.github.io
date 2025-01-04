import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa";

const ThemeButton = () => {
    const { theme, setTheme } = useTheme();
    return (
        <button
            className="text-3xl"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <FaSun />
        </button>
    )
}

export default ThemeButton;