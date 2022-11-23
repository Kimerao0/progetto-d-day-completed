import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <h2>Benvenuti al Developer Day di Next.js</h2>
        <Link href="/posts/create-post">Add new Article</Link>
      </main>
    </div>
  );
}
