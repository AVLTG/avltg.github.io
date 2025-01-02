import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import ThemeProvider from "@/components/ThemeProvider";
import { Header, Footer } from "@/components/nav";


export default function App({ Component, pageProps }: AppProps & { Component: React.ComponentType }) {
    return (
        <>
            <Head>
                <title>AVLTG</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Pirata+One&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <ThemeProvider>
                <main>
                    <Header />
                        <Component {...pageProps} />
                    <Footer />
                </main>
            </ThemeProvider>
        </>
    );
}