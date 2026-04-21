import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import ThemeProvider from "@/components/ThemeProvider";
import { Header, Footer, BackToTop } from "@/components/Navigation";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Amirali Tolooei — Portfolio</title>
                <meta
                    name="description"
                    content="Amirali Tolooei — Software Developer. Computer Science, University of Toronto."
                />
            </Head>
            <ThemeProvider>
                <Header />
                <main>
                    <Component {...pageProps} />
                </main>
                <Footer />
                <BackToTop />
            </ThemeProvider>
        </>
    );
}
