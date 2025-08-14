import Link from 'next/link';
import { City } from '@/lib/cities';
import { Lang } from '@/lib/dictionaries';

export default function CityCard({ city, lang }: { city: City; lang: Lang }) {
  const c = city.content[lang];
  return (
    <Link href={`/${lang}/cities/${city.slug}`} className="card overflow-hidden hover:opacity-95">
      <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${city.cover})` }} />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{c.name}</h3>
          <span className="badge">{city.country}</span>
        </div>
        <p className="text-neutral-400 mt-2 line-clamp-2">{c.intro}</p>
      </div>
    </Link>
  );
}
