import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useState, useRef, useEffect } from "react";

if (typeof window !== "undefined") {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
}

export default function PdfViewer({ file }: { file: string }) {
    const [numPages, setNumPages] = useState(0);
    const [width, setWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setWidth(containerRef.current.clientWidth);
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <div ref={containerRef} className="border border-foreground rounded-3xl overflow-hidden w-full">
            <Document
                file={file}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                className="flex flex-col items-center"
                loading={
                    <div className="workSans text-center" style={{ color: "var(--fg-2)", padding: "48px" }}>
                        Loading résumé…
                    </div>
                }
                error={
                    <div className="workSans text-center" style={{ color: "var(--fg-2)", padding: "48px" }}>
                        Couldn&apos;t display the résumé here.{" "}
                        <a href="/resume.pdf" className="underline">
                            Open the PDF directly
                        </a>
                    </div>
                }
            >
                {width > 0 && Array.from({ length: numPages }, (_, i) => (
                    <Page
                        key={i + 1}
                        pageNumber={i + 1}
                        width={width}
                        className="!bg-transparent"
                    />
                ))}
            </Document>
        </div>
    );
}
