'use client';
import { products } from '@/lib/products';
import Image from 'next/image';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

export default function Shop() {
  const buy = async (id: string) => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: id })
    });
    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <div className="py-16 px-6 text-center space-y-12">
      <h1 className="text-4xl font-extrabold">🎒 Boutique Étudiante</h1>
      <p className="text-neutral-400 max-w-2xl mx-auto">
        Des accessoires pensés pour ta vie étudiante : stylos, carnets, et bureaux organisés.
      </p>

      {/* Grid produits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-neutral-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform flex flex-col"
          >
            {/* Image produit */}
            <div className="relative h-56 w-full">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Infos produit */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">{p.name}</h2>
                <p className="text-neutral-400 text-sm mb-4">{p.description}</p>
                <div className="text-2xl font-extrabold">
                  {(p.price_cents / 100).toFixed(2)}€
                </div>
              </div>

              {/* Bouton achat */}
              <button
                onClick={() => buy(p.id)}
                className="btn w-full mt-6 flex items-center justify-center gap-2"
              >
                <ShoppingCartIcon className="w-5 h-5" />
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Encadré promo */}
      <div className="max-w-2xl mx-auto p-6 bg-neutral-800 rounded-lg mt-12">
        <p className="text-neutral-200 font-semibold">
          💡 Livraison gratuite dès 40€ d’achats (UE uniquement)
        </p>
      </div>
    </div>
  );
}
