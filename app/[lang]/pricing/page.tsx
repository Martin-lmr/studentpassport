'use client';
import { Lang, dict } from '@/lib/dictionaries';
import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function Pricing({ params }: { params: { lang: Lang } }) {
  const t = dict[params.lang];
  const [period, setPeriod] = useState<'monthly'|'yearly'>('monthly');

  const buy = async () => {
    const res = await fetch('/api/subscribe', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ period, lang: params.lang }) 
    });
    const { url } = await res.json();
    window.location.href = url;
  };

  const features = [
    params.lang==='fr' ? "Guides d’installation pour chaque ville" : "City installation guides",
    params.lang==='fr' ? "Checklists privées" : "Private checklists",
    params.lang==='fr' ? "Accès aux bons plans étudiants" : "Access to student deals",
    params.lang==='fr' ? "Réductions partenaires (banques, telco, etc.)" : "Partner discounts (banks, telcos, etc.)"
  ];

  return (
    <div className="py-16 px-6 text-center space-y-12">
      <h1 className="text-4xl font-extrabold">
        {params.lang==='fr'
          ? "Choisis ton abonnement"
          : "Choose your plan"}
      </h1>
      <p className="text-neutral-400 max-w-2xl mx-auto">
        {params.lang==='fr'
          ? "Rejoins StudentPassport et simplifie ton installation à l’étranger. Nos abonnements sont flexibles et 100% pensés pour les étudiants."
          : "Join StudentPassport and make moving abroad simple. Flexible plans made for students."}
      </p>

      {/* Cartes abonnements */}
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
        
        {/* Mensuel */}
        <div className="bg-neutral-900 rounded-xl shadow-lg p-8 w-full md:w-1/2 hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2">{params.lang==='fr' ? "Mensuel" : "Monthly"}</h2>
          <div className="text-5xl font-extrabold mb-2">2,99€<span className="text-lg font-medium text-neutral-400">/mois</span></div>
          <p className="text-neutral-400 mb-6">
            {params.lang==='fr' ? "Résiliable à tout moment" : "Cancel anytime"}
          </p>
          <ul className="text-left space-y-2 mb-6">
            {features.map((f,i)=>(
              <li key={i} className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400" /> {f}
              </li>
            ))}
          </ul>
          <button onClick={() => { setPeriod('monthly'); buy(); }} className="btn w-full">
            {t.cta.subscribe}
          </button>
        </div>

        {/* Annuel */}
        <div className="relative bg-primary text-white rounded-xl shadow-lg p-8 w-full md:w-1/2 hover:scale-105 transition-transform">
          {/* Badge "Best value" */}
          <div className="absolute -top-4 right-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold">
            {params.lang==='fr' ? "Le plus populaire" : "Best value"}
          </div>
          <h2 className="text-xl font-bold mb-2">{params.lang==='fr' ? "Annuel" : "Yearly"}</h2>
          <div className="text-5xl font-extrabold mb-2">29,99€<span className="text-lg font-medium">/an</span></div>
          <p className="mb-6">
            {params.lang==='fr'
              ? "2 mois offerts (29,99€ au lieu de 35,88€)"
              : "2 months free (30€ instead of 35,88€)"}
          </p>
          <ul className="text-left space-y-2 mb-6">
            {features.map((f,i)=>(
              <li key={i} className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-white" /> {f}
              </li>
            ))}
            <li className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-white" /> 
              {params.lang==='fr' ? "Accès prioritaire aux nouvelles villes" : "Priority access to new cities"}
            </li>
          </ul>
          <button onClick={() => { setPeriod('yearly'); buy(); }} className="btn w-full bg-white text-black hover:bg-neutral-100">
            {t.cta.subscribe}
          </button>
        </div>

      </div>

      {/* Encadré valeur générée */}
      <div className="max-w-2xl mx-auto p-6 bg-neutral-800 rounded-lg">
        <p className="text-neutral-200 font-semibold">
          {params.lang==='fr'
            ? "💡 En moyenne, StudentPassport permet d’économiser jusqu’à 75€/an grâce aux partenariats (télécoms, banques, assurances, etc.)."
            : "💡 On average, StudentPassport helps students save up to €75/year thanks to partners (telcos, banks, insurance, etc.)."}
        </p>
      </div>

      {/* FAQ rapide */}
      <div className="max-w-3xl mx-auto text-left space-y-6">
        <h2 className="text-2xl font-bold">{params.lang==='fr' ? "FAQ" : "FAQ"}</h2>
        <div>
          <h3 className="font-semibold">{params.lang==='fr' ? "Puis-je annuler à tout moment ?" : "Can I cancel anytime?"}</h3>
          <p className="text-neutral-400">{params.lang==='fr'
            ? "Oui ! Ton abonnement est sans engagement et tu peux l’arrêter en 2 clics."
            : "Yes! Your subscription is commitment-free and can be stopped anytime in 2 clicks."}</p>
        </div>
        <div>
          <h3 className="font-semibold">{params.lang==='fr' ? "Comment sont gérés les paiements ?" : "How are payments handled?"}</h3>
          <p className="text-neutral-400">{params.lang==='fr'
            ? "Les paiements sont sécurisés via Stripe, la plateforme leader utilisée par des millions d’entreprises."
            : "Payments are secured through Stripe, the global leader trusted by millions of businesses."}</p>
        </div>
      </div>
    </div>
  );
}
