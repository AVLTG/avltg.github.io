import { FaDownload } from "react-icons/fa";
import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("../components/PdfViewer"), {
    ssr: false,
});

export default function Resume() {
    return (
        <section
            style={{
                margin: "0 var(--gutter) 96px",
                paddingTop: 140,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 24,
                    gap: 16,
                    flexWrap: "wrap",
                }}
            >
                <h2
                    className="libreCaslonBold"
                    style={{
                        fontSize: "clamp(36px, 5vw, 60px)",
                        fontWeight: 700,
                        textAlign: "left",
                        margin: 0,
                        color: "var(--fg)",
                    }}
                >
                    Resume
                </h2>
                <a
                    href="/resume.pdf"
                    download
                    className="workSans"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 12,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        fontWeight: 500,
                        border: "1px solid var(--fg)",
                        borderRadius: 9999,
                        padding: "10px 22px",
                        color: "var(--fg)",
                        textDecoration: "none",
                        transition: "color 200ms, border-color 200ms",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--purple)";
                        e.currentTarget.style.borderColor = "var(--purple)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--fg)";
                        e.currentTarget.style.borderColor = "var(--fg)";
                    }}
                >
                    <FaDownload style={{ fontSize: 12 }} />
                    <span className="hidden md:inline">Download</span>
                </a>
            </div>
            <PdfViewer file="/resume.pdf" />
        </section>
    );
}
