import Link from 'next/link';
import { dict, Lang } from '@/lib/dictionaries';
import { destinations } from '@/lib/destinations';

const testimonials = [
  {
    name: 'Sophie, 21 ans — Université de Montréal',
    text_fr: 'Je pensais que mon départ serait un casse-tête, mais les checklists de StudentPassport ont tout rendu si simple. J\'ai pu me concentrer sur mon projet de recherche plutôt que sur l\'administratif. Un vrai guide de survie !',
    text_en: 'I thought my departure would be a nightmare, but the StudentPassport checklists made everything so simple. I was able to focus on my research project instead of the admin work. A true survival guide!',
  },
  {
    name: 'Mohammed, 23 ans — KEDGE Business School',
    text_fr: 'Les informations sur les transports et les banques à Lisbonne étaient hyper précises. J\'ai pu ouvrir un compte et obtenir ma carte de transport en une journée. Ça m\'a sauvé un temps fou !',
    text_en: 'The info on transport and banking in Lisbon was super accurate. I managed to open an account and get my transport pass in one day. It saved me a ton of time!',
  },
  {
    name: 'Léa, 20 ans — Sciences Po Paris',
    text_fr: 'J\'appréhendais de me loger à Tokyo, mais les conseils de la communauté sur les quartiers et les démarches étaient inestimables. Je n\'aurais jamais trouvé mon appartement sans eux. Merci à l\'équipe !',
    text_en: 'I was worried about finding housing in Tokyo, but the community\'s advice on neighborhoods and procedures was invaluable. I never would have found my apartment without them. Thanks to the team!',
  },
  {
    name: 'Carlos, 22 ans — Polytechnique Montréal',
    text_fr: 'Le guide sur les visas pour l\'Australie était tellement clair, ça a débloqué ma situation en un clin d\'œil. Le fait que les infos soient constamment mises à jour, c\'est ce qui fait la différence.',
    text_en: 'The visa guide for Australia was so clear; it sorted out my situation in a flash. The fact that the information is constantly updated is what really makes the difference.',
  },
];

export default function Home({ params }: { params: { lang: Lang } }) {
  const t = dict[params.lang];
  
  const totalCities = destinations.reduce((acc, continent) => {
    const continentCities = continent.countries?.reduce((countryAcc, country) => {
      return countryAcc + (country.cities?.length || 0);
    }, 0) || 0;
    return acc + continentCities;
  }, 0);
  
  const users = 1200;

  const features = [
    {
      icon: "🏠",
      title_fr: "Logement",
      title_en: "Housing",
      description_fr: "Trouvez le logement étudiant idéal avec nos astuces, quartiers recommandés et plateformes fiables.",
      description_en: "Find the ideal student housing with our tips, recommended neighborhoods, and trusted platforms."
    },
    {
      icon: "🚌",
      title_fr: "Transports",
      title_en: "Transport",
      description_fr: "Naviguez facilement dans votre nouvelle ville grâce aux infos sur les transports en commun, abonnements et vélos.",
      description_en: "Navigate your new city with ease thanks to info on public transport, passes, and bike sharing."
    },
    {
      icon: "❤️‍🩹",
      title_fr: "Santé & Sécurité",
      title_en: "Health & Safety",
      description_fr: "Numéros d'urgence, hôpitaux, sécurité sociale... tout pour votre tranquillité d'esprit à l'étranger.",
      description_en: "Emergency numbers, hospitals, social security... everything for your peace of mind abroad."
    },
    {
      icon: "💼",
      title_fr: "Administratif",
      title_en: "Admin",
      description_fr: "Un guide pas à pas pour les démarches administratives : visas, banques, téléphonie et plus encore.",
      description_en: "A step-by-step guide for administrative tasks: visas, banks, phone carriers, and more."
    },
  ];

  const statCards = [
    {
      icon: "✨",
      value: `${totalCities}+`,
      label_fr: "Villes couvertes",
      label_en: "Cities covered"
    },
    {
      icon: "👥",
      value: `${users}+`,
      label_fr: "Utilisateurs",
      label_en: "Users"
    },
    {
      icon: "🏅",
      value: "100%",
      label_fr: "Validé par des étudiants",
      label_en: "Student-approved"
    },
  ];

  return (
    <div className="space-y-20 w-full mb-20">
      {/* HERO SECTION */}
      <section className="relative w-full h-[80vh] rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549419168-e4b75a6c0c20?q=80&w=1800')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">{t.hero.title}</h1>
          <p className="text-xl text-neutral-200 max-w-3xl mt-6 font-light">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {/* Lien vers la page des destinations */}
            <Link 
              href={`/${params.lang}/destinations`} 
              className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-xl text-black font-bold text-lg transition-colors shadow-lg"
            >
              {t.cta.explore}
            </Link>
            <Link 
              href={`/${params.lang}/pricing`} 
              className="px-8 py-4 border border-white/30 text-white hover:border-green-500 rounded-xl font-medium text-lg transition-colors"
            >
              {t.cta.subscribe}
            </Link>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* FEATURES SECTION */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{params.lang === 'fr' ? 'Tout pour ton arrivée' : 'Everything you need to arrive'}</h2>
          <p className="text-neutral-400 mt-2 max-w-2xl mx-auto">{params.lang === 'fr' ? 'De l\'administratif aux bons plans locaux, on s\'occupe de tout.' : 'From administrative tasks to local tips, we\'ve got you covered.'}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl text-center shadow-lg transition-transform hover:scale-105">
              <div className="flex justify-center text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold">{params.lang === 'fr' ? feature.title_fr : feature.title_en}</h3>
              <p className="text-neutral-400 text-sm mt-2">{params.lang === 'fr' ? feature.description_fr : feature.description_en}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- */}

      {/* WHY US SECTION (KPIs) */}
      <section className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {statCards.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-neutral-900 rounded-2xl border border-neutral-800 shadow-lg">
              <span className="text-4xl mb-4">{stat.icon}</span>
              <div className="text-5xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-neutral-400 font-medium">{params.lang === 'fr' ? stat.label_fr : stat.label_en}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- */}

      {/* TESTIMONIALS SECTION */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{params.lang === 'fr' ? 'Ce que les étudiants disent' : 'What students say'}</h2>
          <p className="text-neutral-400 mt-2">{params.lang === 'fr' ? 'Rejoins la communauté StudentPassport' : 'Join the StudentPassport community'}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((tst, i) => (
            <div key={i} className="p-6 bg-neutral-900 border-l-4 border-green-500 rounded-lg shadow-md">
              <p className="italic text-neutral-200">“{params.lang === 'fr' ? tst.text_fr : tst.text_en}”</p>
              <p className="mt-4 text-sm font-semibold text-neutral-400">{tst.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- */}

      {/* FINAL CTA SECTION */}
      <section className="container">
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-10 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">{params.lang === 'fr' ? 'Prêt à t\'envoler ?' : 'Ready to take off?'}</h2>
          <p className="text-black/80 max-w-2xl mx-auto mb-6">{params.lang === 'fr' ? 'Découvre toutes les informations nécessaires et prépare ton départ en toute sérénité.' : 'Discover all the necessary information and prepare for your departure with peace of mind.'}</p>
          <Link 
            href={`/${params.lang}/destinations`} 
            className="inline-flex items-center gap-2 px-8 py-4 bg-black/20 hover:bg-black/40 rounded-full text-white font-bold text-lg transition-colors backdrop-blur-sm"
          >
            {params.lang === 'fr' ? 'Commencer' : 'Get started'}
            <span className="text-2xl">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}