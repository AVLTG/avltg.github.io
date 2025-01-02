import { useTheme } from "next-themes";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

const ThemeButton = () => {
    const { theme, setTheme } = useTheme();
    return (
        <button
            className="text-2xl"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            { theme === 'dark' ? (
                <FaLightbulb />
            ) : (
                <FaRegLightbulb />
            )}
        </button>
    )
}

export default ThemeButton;