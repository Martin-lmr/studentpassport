import Link from 'next/link';
import { dict, Lang } from '@/lib/dictionaries';

export default function Footer({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 mt-12">
      <div className="container py-10 grid md:grid-cols-4 gap-8 text-sm text-neutral-400">
        
        {/* Colonne 1 - Branding */}
        <div>
          <h3 className="font-bold text-white mb-3">StudentPassport</h3>
          <p className="opacity-70 mb-4">
            {lang === 'fr'
              ? "Ton compagnon pour t’installer facilement dans une nouvelle ville."
              : "Your buddy to settle easily in a new city."}
          </p>
          <span className="opacity-70">© {year} StudentPassport</span>
        </div>

        {/* Colonne 2 - Pages principales */}
        <div>
          <h4 className="font-semibold text-white mb-3">
            {lang === 'fr' ? 'Navigation' : 'Navigation'}
          </h4>
          <ul className="space-y-2">
            <li><Link className="hover:underline" href={`/${lang}/pricing`}>{t.nav.pricing}</Link></li>
            <li><Link className="hover:underline" href={`/${lang}/shop`}>{t.nav.shop}</Link></li>
            <li><Link className="hover:underline" href={`/${lang}/checklist`}>Checklist</Link></li>
            <li><Link className="hover:underline" href={`/${lang}/account`}>{t.nav.account}</Link></li>
          </ul>
        </div>

        {/* Colonne 3 - À propos */}
        <div>
          <h4 className="font-semibold text-white mb-3">
            {lang === 'fr' ? 'À propos' : 'About'}
          </h4>
          <ul className="space-y-2">
            <li><Link className="hover:underline" href={`/${lang}/about`}>{lang==='fr'?'Notre mission':'About us'}</Link></li>
            <li><Link className="hover:underline" href={`/${lang}/about/contact`}>{lang==='fr'?'Contact':'Contact'}</Link></li>
            <li><Link className="hover:underline" href={`/${lang}/about/ambassador`}>{lang==='fr'?'Ambassadeur':'Ambassador'}</Link></li>
          </ul>
        </div>

        {/* Colonne 4 - Crédits */}
        <div>
          <h4 className="font-semibold text-white mb-3">
            {lang === 'fr' ? 'Crédits' : 'Credits'}
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="https://essec.edu" target="_blank" className="hover:underline">
                {lang === 'fr' ? 'Fait par un étudiant ESSEC' : 'Built by an ESSEC student'}
              </Link>
            </li>
            <li className="opacity-70">{lang==='fr'?'Ceci est une démo MVP':'This is an MVP demo'}</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
