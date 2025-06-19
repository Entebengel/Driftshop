import Link from "next/link";
import { liverys } from "../../data/liverys";

export default function LiveryList() {
  return (
    <div>
      <h1>Liverys</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 24 }}>
        {liverys.map(livery => (
          <div key={livery.id} style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16 }}>
            <Link href={`/liverys/${livery.id}`}>
              <img src={livery.images[0]} alt={livery.name} style={{ width: "100%", borderRadius: 4, cursor: "pointer" }} />
            </Link>
            <h2>
              <Link href={`/liverys/${livery.id}`}>{livery.name}</Link>
            </h2>
            <p>{livery.shortDesc}</p>
            <p><b>{livery.price} €</b></p>
            <button>In den Warenkorb</button>
          </div>
        ))}
      </div>
    </div>
  );
}
