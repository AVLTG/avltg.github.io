import "@/styles/globals.css";
import "@fontsource/libre-caslon-text/400.css";
import "@fontsource/libre-caslon-text/400-italic.css";
import "@fontsource/libre-caslon-text/700.css";
import "@fontsource-variable/work-sans/index.css";
import "@fontsource-variable/work-sans/wght-italic.css";
import "@fontsource-variable/cinzel/index.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import ThemeProvider from "@/components/ThemeProvider";
import { Header, Footer, BackToTop } from "@/components/Navigation";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title key="title">Amirali Tolooei — Portfolio</title>
                <meta
                    key="description"
                    name="description"
                    content="Amirali Tolooei — Full-Stack & AI Developer in Toronto. Computer Science, University of Toronto."
                />
                <meta
                    key="viewport"
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    key="theme-color-light"
                    name="theme-color"
                    content="#ebe7dc"
                    media="(prefers-color-scheme: light)"
                />
                <meta
                    key="theme-color-dark"
                    name="theme-color"
                    content="#111111"
                    media="(prefers-color-scheme: dark)"
                />
                <meta key="og:type" property="og:type" content="website" />
                <meta
                    key="og:site_name"
                    property="og:site_name"
                    content="Amirali Tolooei"
                />
                <meta
                    key="og:title"
                    property="og:title"
                    content="Amirali Tolooei — Portfolio"
                />
                <meta
                    key="og:description"
                    property="og:description"
                    content="Amirali Tolooei — Full-Stack & AI Developer in Toronto. Computer Science, University of Toronto."
                />
                <meta
                    key="og:url"
                    property="og:url"
                    content="https://www.avltg.dev/"
                />
                <meta
                    key="twitter:card"
                    name="twitter:card"
                    content="summary"
                />
                <meta
                    key="twitter:title"
                    name="twitter:title"
                    content="Amirali Tolooei — Portfolio"
                />
                <meta
                    key="twitter:description"
                    name="twitter:description"
                    content="Amirali Tolooei — Full-Stack & AI Developer in Toronto. Computer Science, University of Toronto."
                />
                <link
                    key="favicon"
                    rel="icon"
                    href="/favicon.svg"
                    type="image/svg+xml"
                />
            </Head>
            <ThemeProvider>
                <a href="#main" className="skip-link">
                    Skip to main content
                </a>
                <Header />
                <main id="main" tabIndex={-1}>
                    <Component {...pageProps} />
                </main>
                <Footer />
                <BackToTop />
            </ThemeProvider>
        </>
    );
}
