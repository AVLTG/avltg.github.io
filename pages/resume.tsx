import { FaDownload } from "react-icons/fa";

export default function Resume() {
    return (
        <section className="!mx-4 md:!mx-24 lg:!mx-56 flex-1">
            <div className="flex justify-between items-center mb-4">
                <h2 className="!mb-0 !text-left">Resume</h2>
                <a
                    href="/resume.pdf"
                    download
                    className="flex items-center gap-2 text-base notoSans border border-foreground rounded-full px-4 py-2 hover:border-purple transition-colors"
                >
                    <FaDownload className="text-sm" />
                    <span className="hidden md:inline">Download</span>
                </a>
            </div>
            <div className="border border-foreground rounded-3xl overflow-hidden w-full" style={{ height: "80vh" }}>
                <iframe
                    src="/resume.pdf"
                    className="w-full h-full"
                    title="Resume"
                />
            </div>
        </section>
    );
}
