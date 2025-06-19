import { useRouter } from "next/router";
import { liverys } from "../../data/liverys";

export default function LiveryDetail() {
  const router = useRouter();
  const { id } = router.query;
  const livery = liverys.find(l => l.id === id);

  if (!livery) return <div>Lade...</div>;

  return (
    <div>
      <h1>{livery.name}</h1>
      <div style={{ display: "flex", gap: 16 }}>
        <div>
          {livery.images.map((img, idx) => (
            <img key={idx} src={img} alt={livery.name} style={{ width: 300, marginBottom: 8, borderRadius: 4 }} />
          ))}
        </div>
        <div>
          <p>{livery.longDesc}</p>
          <p><b>{livery.price} €</b></p>
          <button>In den Warenkorb</button>
        </div>
      </div>
      <button onClick={() => router.back()} style={{ marginTop: 24 }}>Zurück</button>
    </div>
  );
}
