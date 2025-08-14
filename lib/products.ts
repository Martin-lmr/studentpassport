export type Product = {
  id: string;
  name: string;
  description: string;
  price_cents: number;
  image: string;
};

export const products: Product[] = [
  { id: "pen-pack", name: "Pack stylos StudentPassport", description: "5 stylos gel, prise de notes fluide.", price_cents: 700, image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1200" },
  { id: "desk-set", name: "Desk set minimal", description: "Sous-main + pot à crayons + trieur", price_cents: 2400, image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200" },
  { id: "notebook", name: "Carnet pointillé A5", description: "80 pages, papier 100g.", price_cents: 1200, image: "https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1200" }
];
