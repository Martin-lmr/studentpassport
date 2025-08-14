'use client';
import { Product } from '@/lib/products';
import { useState } from 'react';

export default function ProductCard({ p, lang }: { p: Product; lang: 'fr'|'en' }) {
  const [loading, setLoading] = useState(false);
  const buy = async () => {
    setLoading(true);
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: p.id, lang })
    });
    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <div className="card overflow-hidden flex flex-col">
      <img src={p.image} alt={p.name} className="h-40 w-full object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold">{p.name}</h3>
        <p className="text-neutral-400 text-sm mt-2 flex-1">{p.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold">{(p.price_cents/100).toFixed(2)} €</span>
          <button onClick={buy} disabled={loading} className="btn">{loading ? (lang === 'fr' ? 'Redirection...' : 'Redirecting...') : (lang === 'fr' ? 'Acheter' : 'Buy')}</button>
        </div>
      </div>
    </div>
  );
}
