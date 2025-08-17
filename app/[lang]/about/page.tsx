import { Lang } from '@/lib/dictionaries';

export default function About({ params }: { params: { lang: Lang } }) {
  const isFr = params.lang === 'fr';
  return (
    <div className="space-y-8 w-full">
      {/* Banner */}
      <div className="relative w-full h-64 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600)` }} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center px-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold">{isFr ? 'À propos' : 'About us'}</h1>
        </div>
      </div>

      {/* Intro */}
      <div className="card p-6 space-y-4">
        <p className="text-neutral-300 text-lg leading-relaxed">
          {isFr
            ? "StudentPassport est né à l’ESSEC avec une idée simple : rendre l’installation des étudiants dans une nouvelle ville aussi fluide que possible. Que tu partes à la Bocconi, à Madrid, à Montréal ou à Buenos Aires, nous savons à quel point les premiers jours peuvent être stressants. Notre ambition : simplifier chaque étape, réduire l’angoisse et transformer cette période en une aventure excitante."
            : "StudentPassport was born at ESSEC with a simple idea: making student relocation to a new city as smooth as possible. Whether you move to Bocconi, Madrid, Montreal, or Buenos Aires, we know how stressful the first days can be. Our ambition: simplify every step, reduce stress, and turn it into an exciting adventure."}
        </p>
        <p className="text-neutral-300">
          {isFr
            ? "Au-delà de l’accompagnement, nous voulons créer des opportunités d’emplois étudiants grâce à notre programme d’ambassadeurs. Parce que qui mieux qu’un étudiant sur place peut aider un autre étudiant à se sentir chez soi ?"
            : "Beyond guidance, we want to create student job opportunities through our ambassador program. Because who better than a local student to help another feel at home?"}
        </p>
      </div>

      {/* Mission - Vision - Values */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="card p-6">
          <h2 className="font-semibold text-xl mb-2">{isFr ? "Mission" : "Mission"}</h2>
          <p className="text-neutral-300">
            {isFr
              ? "Permettre aux étudiants de se relocaliser en quelques clics avec un vrai support humain. Moins d’angoisse, plus d’autonomie."
              : "Enable students to relocate in just a few clicks with real human support. Less stress, more independence."}
          </p>
        </div>
        <div className="card p-6">
          <h2 className="font-semibold text-xl mb-2">{isFr ? "Vision" : "Vision"}</h2>
          <p className="text-neutral-300">
            {isFr
              ? "Devenir la plateforme #1 en Europe pour les mobilités étudiantes, connectée aux écoles, banques, opérateurs, résidences et administrations."
              : "Become the #1 platform in Europe for student mobility, connected to schools, banks, operators, housing providers, and public services."}
          </p>
        </div>
        <div className="card p-6">
          <h2 className="font-semibold text-xl mb-2">{isFr ? "Valeurs" : "Values"}</h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-1">
            <li>{isFr ? "Clarté : zéro jargon" : "Clarity: zero jargon"}</li>
            <li>{isFr ? "Empathie : on rassure" : "Empathy: we reassure"}</li>
            <li>{isFr ? "Efficacité : résultats mesurables" : "Efficiency: measurable results"}</li>
            <li>{isFr ? "Inclusion : prix équitables & bourses" : "Inclusion: fair pricing & scholarships"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
