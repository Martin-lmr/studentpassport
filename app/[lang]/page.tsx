import Link from 'next/link';
import { dict, Lang } from '@/lib/dictionaries';
import { cities } from '@/lib/cities';

const testimonials = [
  { name: 'Clara — ESSEC', text_fr: 'Arrivée à Milan sereine grâce aux checklists !', text_en: 'Smooth arrival in Milan thanks to the checklists!' },
  { name: 'Lucas — HEC', text_fr: 'Les bons plans logement à Madrid sont en or.', text_en: 'Madrid housing tips were gold.' },
  { name: 'Sofia — Bocconi', text_fr: 'J\'ai activé mon Abono Joven en 10 min.', text_en: 'Got my Abono Joven in 10 minutes.' },
  { name: 'Mateo — ITAM', text_fr: 'Conseils super utiles pour Mexico City.', text_en: 'Super useful tips for CDMX.' },
];

export default function Home({ params }: { params: { lang: Lang } }) {
  const t = dict[params.lang];
  const cityCount = cities.length;
  const users = 1200; // Placeholder KPI (peut venir de Supabase plus tard)

  return (
    <div className="space-y-10 w-full">
      {/* HERO */}
      <section className="relative w-full h-[65vh] rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1800)` }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">{t.hero.title}</h1>
          <p className="text-neutral-200 max-w-2xl mt-4">{t.hero.subtitle}</p>
          <div className="mt-6 flex gap-3 justify-center">
            <Link href={`/${params.lang}/cities`} className="btn">{t.cta.explore}</Link>
            <Link href={`/${params.lang}/pricing`} className="btn">{t.cta.subscribe}</Link>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="card p-6 text-center">
          <div className="text-4xl font-extrabold">{cityCount}+</div>
          <div className="text-neutral-400">{params.lang==='fr'?'Villes couvertes':'Cities covered'}</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-4xl font-extrabold">{users}+</div>
          <div className="text-neutral-400">{params.lang==='fr'?'Utilisateurs':'Users'}</div>
        </div>
        <div className="card p-6 text-center col-span-2 sm:col-span-1">
          <div className="text-4xl font-extrabold">100%</div>
          <div className="text-neutral-400">{params.lang==='fr'?'Par des étudiants, pour des étudiants':'By students, for students'}</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-6">
        <h2 className="font-semibold text-xl">{params.lang==='fr'?'Ils parlent de nous':'What students say'}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((tst, i) => (
            <div key={i} className="card p-4">
              <p className="italic text-neutral-200">“{params.lang==='fr'?tst.text_fr:tst.text_en}”</p>
              <p className="mt-3 text-sm text-neutral-400">{tst.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}