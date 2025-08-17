import Link from 'next/link';
import { Lang } from '@/lib/dictionaries';
import { destinations } from '@/lib/destinations';

export default function DestinationsPage({ params }: { params: { lang: Lang } }) {
  return (
    <main className="container py-12">
      {/* Hero section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {params.lang === 'fr' ? 'Explore les continents' : 'Explore the continents'}
        </h1>
        <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
          {params.lang === 'fr' 
            ? 'Choisis ta prochaine aventure et découvre des guides complets pour tes études à l’étranger.' 
            : 'Choose your next adventure and discover complete guides for your studies abroad.'}
        </p>
      </section>

      {/* Continents grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((continent) => (
            <Link
              key={continent.slug}
              href={`/${params.lang}/destinations/${continent.slug}`}
              className="relative flex items-center justify-center p-8 w-full aspect-[4/3] bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden group transition-all duration-300 hover:bg-neutral-800 hover:border-green-500 shadow-xl"
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white text-center">
                  {params.lang === 'fr' ? continent.nameFr : continent.nameEn}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}