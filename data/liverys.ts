export interface Livery {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  price: number;
  images: string[];
}

export const liverys: Livery[] = [
  {
    id: "livery1",
    name: "Racing Stripe",
    shortDesc: "Klassische Rennstreifen für sportlichen Look.",
    longDesc: "Verleihe deinem Fahrzeug einen sportlichen Look mit klassischen Rennstreifen. Hochwertige Folie, UV-beständig und langlebig.",
    price: 199,
    images: ["/images/livery1-1.jpg", "/images/livery1-2.jpg"]
  },
  {
    id: "livery2",
    name: "Urban Camo",
    shortDesc: "Modernes Camouflage-Design für Individualisten.",
    longDesc: "Das Urban Camo Design hebt dein Auto von der Masse ab. Perfekt für alle, die auffallen wollen.",
    price: 249,
    images: ["/images/livery2-1.jpg", "/images/livery2-2.jpg"]
  },
  // ...weitere ca. 28 Artikel...
];
