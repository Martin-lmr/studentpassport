'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { dict, Lang } from '@/lib/dictionaries';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Menu, X, ChevronDown, ChevronRight, Home } from 'lucide-react';

export default function Navbar({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const pathname = usePathname();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) =>
      setUserEmail(data.session?.user.email ?? null)
    );
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) =>
      setUserEmail(session?.user.email ?? null)
    );
    return () => sub.subscription.unsubscribe();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  const navLink = (href: string, label: string) => (
    <Link
      className={`relative px-4 py-3 text-lg font-medium rounded-lg transition-colors duration-200 
      ${pathname.startsWith(href) ? 'text-green-500' : 'text-neutral-300 hover:text-green-400'}`}
      href={href}
    >
      {label}
    </Link>
  );

  const dropdownItems = {
    destinations: [
      { href: `/${lang}/destinations/europe`, label: lang === 'fr' ? 'Europe' : 'Europe' },
      { href: `/${lang}/destinations/americas`, label: lang === 'fr' ? 'Amériques' : 'Americas' },
      { href: `/${lang}/destinations/asia`, label: lang === 'fr' ? 'Asie' : 'Asia' },
      { href: `/${lang}/destinations/africa`, label: lang === 'fr' ? 'Afrique' : 'Africa' },
      { href: `/${lang}/destinations/oceania`, label: lang === 'fr' ? 'Océanie' : 'Oceania' },
    ],
    about: [
      { href: `/${lang}/about`, label: lang === 'fr' ? 'Notre mission' : 'Our mission' },
      { href: `/${lang}/about/contact`, label: lang === 'fr' ? 'Contact' : 'Contact' },
      { href: `/${lang}/about/ambassador`, label: lang === 'fr' ? 'Ambassadeur' : 'Ambassador' },
    ],
  };
  
  // Nouveau composant qui est à la fois un lien et un menu déroulant
  const TwoInOneLink = ({ id, label, href, items }: { id: string; label: string; href: string; items: { href: string; label: string; }[] }) => (
    <div
      className="relative group hidden md:block"
      onMouseEnter={() => setOpenDropdown(id)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <Link
        className={`flex items-center gap-2 px-4 py-3 text-lg font-medium transition-colors duration-200 
        ${pathname.startsWith(href) ? 'text-green-500' : 'text-neutral-300 group-hover:text-green-400'}`}
        href={href}
      >
        {label} <ChevronDown className="w-5 h-5 transition-transform group-hover:rotate-180" />
      </Link>
      {openDropdown === id && (
        <div className="absolute left-0 mt-2 p-2 bg-neutral-900/95 border border-neutral-700 shadow-xl rounded-xl z-30 min-w-[14rem] animate-fade-in-up">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 hover:text-green-400 transition-colors"
              onClick={() => {
                setOpenDropdown(null);
                setMobileOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  const dropdown = (id: 'destinations' | 'about', label: string) => (
    <div
      className="relative group hidden md:block"
      onMouseEnter={() => setOpenDropdown(id)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        className="flex items-center gap-2 px-4 py-3 text-lg font-medium transition-colors duration-200 text-neutral-300 group-hover:text-green-400"
        onClick={() => setOpenDropdown(openDropdown === id ? null : id)}
      >
        {label} <ChevronDown className="w-5 h-5 transition-transform group-hover:rotate-180" />
      </button>
      {openDropdown === id && (
        <div className="absolute left-0 mt-2 p-2 bg-neutral-900/95 border border-neutral-700 shadow-xl rounded-xl z-30 min-w-[14rem] animate-fade-in-up">
          {dropdownItems[id].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 hover:text-green-400 transition-colors"
              onClick={() => {
                setOpenDropdown(null);
                setMobileOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  // Mobile Dropdown Component
  const mobileDropdown = (id: 'destinations' | 'about', label: string) => (
    <div className="w-full">
      <button
        onClick={() => setOpenMobileSubmenu(openMobileSubmenu === id ? null : id)}
        className="w-full flex items-center justify-between py-3 text-left border-b border-neutral-700 text-lg font-medium text-neutral-300"
      >
        {label}
        <ChevronRight className={`w-5 h-5 transition-transform ${openMobileSubmenu === id ? 'rotate-90' : ''}`} />
      </button>
      {openMobileSubmenu === id && (
        <div className="flex flex-col pl-4 mt-2">
          {dropdownItems[id].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-neutral-400 text-sm hover:text-green-500"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-neutral-800">
      <div className="container flex items-center justify-between h-24">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-2 font-extrabold text-2xl text-green-400">
          <Home className="w-8 h-8"/> <span>StudentPassport</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {/* Nouveau composant "2-en-1" pour Destinations */}
          <TwoInOneLink
            id="destinations"
            label={lang === 'fr' ? 'Destinations' : 'Destinations'}
            href={`/${lang}/destinations`}
            items={dropdownItems.destinations}
          />
          {navLink(`/${lang}/pricing`, t.nav.pricing)}
          {navLink(`/${lang}/shop`, t.nav.shop)}
          {navLink(`/${lang}/checklist`, 'Checklist')}
          {dropdown('about', lang === 'fr' ? 'À propos' : 'About')}
          {navLink(`/${lang}/account`, t.nav.account)}
        </nav>

        {/* Right section */}
        <div className="flex gap-4 items-center">
          {/* Lang switch */}
          <Link
            href={lang === 'fr' ? pathname.replace('/fr', '/en') : pathname.replace('/en', '/fr')}
            className="flex items-center gap-1 text-sm font-semibold text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            {lang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
          </Link>

          {userEmail ? (
            <button
              className="px-5 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-sm transition-colors"
              onClick={logout}
            >
              {t.nav.logout}
            </button>
          ) : (
            <Link
              className="px-5 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-black font-semibold text-sm transition-colors"
              href={`/${lang}/login`}
            >
              {t.nav.login}
            </Link>
          )}

          {/* Burger menu (mobile) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md hover:bg-neutral-800 transition-colors"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-neutral-900 border-t border-neutral-800 p-6 flex flex-col items-start space-y-4">
          {navLink(`/${lang}/destinations`, 'Destinations')} {/* Lien direct pour mobile */}
          {mobileDropdown('destinations', lang === 'fr' ? 'Continents' : 'Continents')} {/* Mobile dropdown pour les continents */}
          {navLink(`/${lang}/pricing`, t.nav.pricing)}
          {navLink(`/${lang}/shop`, t.nav.shop)}
          {navLink(`/${lang}/checklist`, 'Checklist')}
          {mobileDropdown('about', lang === 'fr' ? 'À propos' : 'About')}
          {navLink(`/${lang}/account`, t.nav.account)}
          {userEmail && (
            <button
              className="w-full text-left py-3 text-lg font-medium text-neutral-300 border-t border-neutral-700 mt-4 pt-4"
              onClick={logout}
            >
              {t.nav.logout}
            </button>
          )}
        </div>
      )}
    </header>
  );
}