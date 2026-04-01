interface ExperienceProps {
    company: string;
    role: string;
    period: string;
    location?: string;
    summary: string;
    highlights: string[];
    technologies: string[];
}

export default function Experience({ company, role, period, location, summary, highlights, technologies }: ExperienceProps) {
    return (
        <div className="border border-foreground rounded-3xl p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                    <h3 className="libreCaslonBold">{company}</h3>
                    <p className="text-lg text-purple">{role}</p>
                </div>
                <p className="text-sm md:text-base opacity-60 md:text-right">
                    {period}
                    {location && (
                        <>
                            <br className="hidden md:block" />
                            <span className="md:hidden"> · </span>
                            {location}
                        </>
                    )}
                </p>
            </div>

            <p className="text-base text-justify">{summary}</p>

            <div className="mt-4 space-y-2 notoSans">
                {highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-3 text-base">
                        <span className="shrink-0 opacity-40">&#8226;</span>
                        <span>{highlight}</span>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
                {technologies.map((tech) => (
                    <span key={tech} className="text-xs border border-foreground rounded-full px-3 py-1 notoSans opacity-70 hover:opacity-100 transition-opacity">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
