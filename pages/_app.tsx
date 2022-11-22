import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>Fido Blog</title>
        <meta name="description" content="Fido blog test with next.js" />
        <link rel="icon" href="/fido.jpg" />
      </Head>
      <header>
        <div>
          <Link href="/">
            <h1>Next Blog</h1>
          </Link>
        </div>
      </header>
      <Component {...pageProps} />
    </div>
  );
}
