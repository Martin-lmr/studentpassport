'use client';
import { Lang, dict } from '@/lib/dictionaries';
import { useState } from 'react';

export default function Pricing({ params }: { params: { lang: Lang } }) {
  const t = dict[params.lang];
  const [period, setPeriod] = useState<'monthly'|'yearly'>('monthly');

  const buy = async () => {
    const res = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ period, lang: params.lang }) });
    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t.pricing.title}</h1>
      <div className="card p-6 space-y-4 max-w-xl">
        <div>
          <div className="text-4xl font-extrabold">2,99€<span className="text-base font-medium text-neutral-400">/mois</span></div>
          <div className="text-neutral-400">{params.lang==='fr'?'Premium étudiant, résiliable à tout moment':'Student premium, cancel anytime'}</div>
        </div>
        <ul className="text-neutral-300 list-disc list-inside">
          {t.pricing.features.map((f,i) => <li key={i}>{f}</li>)}
          <li>{params.lang==='fr'?'Checklists privées':'Private checklists'}</li>
        </ul>
        <button onClick={buy} className="btn">{t.cta.subscribe}</button>
      </div>
    </div>
  );
}