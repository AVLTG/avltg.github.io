interface ProjectProps {
    name: string;
    description: string;
    image: string;
    link: string;
}

export default function Project({ name, description, image, link }: ProjectProps) {
    return (
        <div 
            onClick={() => window.open(link, "_blank")}
            className="relative border border-foreground p-2 max-h-64 md:max-h-full text-center rounded-3xl group cursor-pointer hover:scale-95 transition-all"
        >
            <img className="rounded-3xl contrast-50 brightness-100 group-hover:blur-sm transition-all ease-out" src={image} alt={`${name} Image`} />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4">
                <h3 className="w-full md:h-full flex p-0 md:p-4 items-center justify-center lg:absolute lg:opacity-100 lg:group-hover:opacity-0 duration-200 ease-out">{name}</h3>
                <p className="w-full md:h-full p-0 md:p-4 text-lg flex items-center justify-center lg:absolute lg:opacity-0 lg:group-hover:opacity-100 duration-200 ease-in">{description}</p>
            </div>
        </div>
    )
}