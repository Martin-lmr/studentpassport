import { cities } from '@/lib/cities';
import CityCard from '@/components/CityCard';
import { Lang } from '@/lib/dictionaries';

export default function CitiesPage({ params }: { params: { lang: Lang } }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{params.lang === 'fr' ? 'Toutes les villes' : 'All cities'}</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cities.map(c => <CityCard key={c.slug} city={c} lang={params.lang} />)}
      </div>
    </div>
  );
}
