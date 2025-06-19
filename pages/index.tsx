import Link from "next/link";

// ...existing code...

export default function Home() {
  return (
    <div>
      {/* ...existing code... */}
      <nav>
        <ul>
          {/* ...existing code... */}
          <li>
            <Link href="/liverys">Liverys</Link>
          </li>
          {/* ...existing code... */}
        </ul>
      </nav>
      {/* ...existing code... */}
    </div>
  );
}

// ...existing code...