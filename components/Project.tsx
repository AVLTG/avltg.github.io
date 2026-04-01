import { useState } from "react";

interface ProjectProps {
    name: string;
    description: string;
    image: string;
    link: string;
}

export default function Project({ name, description, image, link }: ProjectProps) {
    const [tapped, setTapped] = useState(false);

    const handleClick = () => {
        if (typeof window !== "undefined" && window.innerWidth < 1024) {
            if (tapped) {
                window.open(link, "_blank");
                setTapped(false);
            } else {
                setTapped(true);
            }
        } else {
            window.open(link, "_blank");
        }
    };

    return (
        <div
            onClick={handleClick}
            onMouseLeave={() => setTapped(false)}
            className="relative border border-foreground p-2 h-64 md:h-80 text-center rounded-3xl group cursor-pointer lg:hover:scale-105 lg:hover:z-10 transition-all overflow-hidden"
        >
            <img
                className={`rounded-3xl w-full h-full object-cover contrast-50 brightness-100 lg:group-hover:blur-sm transition-all ease-out ${tapped ? "blur-sm" : ""}`}
                src={image}
                alt={`${name} Image`}
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4">
                <h3
                    className={`w-full h-full flex p-4 items-center justify-center absolute lg:group-hover:opacity-0 duration-200 ease-out transition-opacity ${tapped ? "opacity-0" : "opacity-100"}`}
                >
                    {name}
                </h3>
                <p
                    className={`w-full h-full p-4 text-sm md:text-base flex items-center justify-center absolute lg:group-hover:opacity-100 duration-200 ease-in transition-opacity ${tapped ? "opacity-100" : "opacity-0"}`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
