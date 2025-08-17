import { cities } from '@/lib/cities';
import { Lang } from '@/lib/dictionaries';

export async function generateStaticParams() {
  return ['fr','en'].flatMap(lang => cities.map(c => ({ lang, slug: c.slug })));
}

export default function CityDetail({ params }: { params: { lang: Lang, slug: string } }) {
  const city = cities.find(c => c.slug === params.slug);
  if (!city) return <div>Not found</div>;
  const c = city.content[params.lang];
  return (
    <article className="space-y-6">
      <div className="h-60 rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${city.cover})` }} />
      <h1 className="text-3xl font-extrabold">{c.name}</h1>
      <p className="text-neutral-300">{c.intro}</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <section className="card p-4">
          <h3 className="font-semibold mb-2">{params.lang === 'fr' ? 'En bref' : 'At a glance'}</h3>
          <ul className="list-disc list-inside space-y-1 text-neutral-300">
            {c.quick && c.quick.map((q, i) => <li key={i}>{q}</li>)}
          </ul>
        </section>
        <section className="card p-4">
          <h3 className="font-semibold mb-2">{params.lang === 'fr' ? 'Budget' : 'Budget'}</h3>
          <p className="text-neutral-300">{c.budget}</p>
        </section>
        <section className="card p-4">
          <h3 className="font-semibold mb-2">{params.lang === 'fr' ? 'Logement' : 'Housing'}</h3>
          <p className="text-neutral-300">{c.housing}</p>
        </section>
        <section className="card p-4">
          <h3 className="font-semibold mb-2">{params.lang === 'fr' ? 'Administratif' : 'Admin'}</h3>
          <p className="text-neutral-300">{c.admin}</p>
        </section>
      </div>
      <section className="card p-4">
        <h3 className="font-semibold mb-2">{params.lang === 'fr' ? 'Conseils' : 'Tips'}</h3>
        <ul className="list-disc list-inside space-y-1 text-neutral-300">{c.tips.map((q,i) => <li key={i}>{q}</li>)}</ul>
      </section>
    </article>
  );
}
