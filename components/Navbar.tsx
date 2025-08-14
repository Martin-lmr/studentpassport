'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { dict, Lang } from '@/lib/dictionaries';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import CityDropdown from './CityDropdown';

export default function Navbar({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const pathname = usePathname();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUserEmail(data.session?.user.email ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user.email ?? null);
    });
    return () => { sub.subscription.unsubscribe(); };
  }, []);

  const logout = async () => { await supabase.auth.signOut(); };

  const navLink = (href: string, label: string) => (
    <Link className={`px-3 py-2 rounded-lg hover:bg-neutral-800 ${pathname.startsWith(href) ? 'bg-neutral-900' : ''}`} href={href}>{label}</Link>
  );

  return (
    <header className="border-b border-neutral-800">
      <div className="container flex items-center justify-between h-16">
        <Link href={`/${lang}`} className="font-extrabold text-lg">{t.brand}</Link>
        <nav className="hidden md:flex gap-1 items-center">
          <CityDropdown lang={lang} />
          {navLink(`/${lang}/pricing`, t.nav.pricing)}
          {navLink(`/${lang}/shop`, t.nav.shop)}
          {navLink(`/${lang}/checklist`, 'Checklist')}
          {navLink(`/${lang}/about`, lang==='fr'?'À propos':'About')}
          {navLink(`/${lang}/account`, t.nav.account)}
        </nav>
        <div className="flex gap-2 items-center">
          <Link href={lang === 'fr' ? pathname.replace('/fr', '/en') : pathname.replace('/en', '/fr')} className="badge">{lang === 'fr' ? 'EN' : 'FR'}</Link>
          {userEmail ? (
            <button className="btn" onClick={logout}>{t.nav.logout}</button>
          ) : (
            <Link className="btn" href={`/${lang}/login`}>{t.nav.login}</Link>
          )}
        </div>
      </div>
      <div className="md:hidden border-t border-neutral-800">
        <div className="container py-2 flex gap-2 overflow-x-auto">
          <CityDropdown lang={lang} />
          <Link className="badge" href={`/${lang}/pricing`}>{t.nav.pricing}</Link>
          <Link className="badge" href={`/${lang}/shop`}>{t.nav.shop}</Link>
          <Link className="badge" href={`/${lang}/checklist`}>Checklist</Link>
          <Link className="badge" href={`/${lang}/about`}>{lang==='fr'?'À propos':'About'}</Link>
          <Link className="badge" href={`/${lang}/account`}>{t.nav.account}</Link>
        </div>
      </div>
    </header>
  );
}