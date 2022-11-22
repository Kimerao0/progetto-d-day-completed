import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fido Blog</title>
        <meta name="description" content="Fido blog test with next.js" />
        <link rel="icon" href="/fido.jpg" />
      </Head>
      <header>
        <div>
          <h1>Next Blog</h1>
        </div>
      </header>
      <main>
        <h2>Benvenuti al Developer Day di Next.js</h2>
      </main>
    </div>
  );
}
