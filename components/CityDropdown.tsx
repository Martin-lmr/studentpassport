'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { cities } from '@/lib/cities';
import { Lang } from '@/lib/dictionaries';

function groupCities() {
  const byCont: Record<string, Record<string, {name:string, slug:string}[]>> = {};
  for (const c of cities) {
    if (!byCont[c.continent]) byCont[c.continent] = {};
    if (!byCont[c.continent][c.country]) byCont[c.continent][c.country] = [];
    byCont[c.continent][c.country].push({ name: c.content.fr.name, slug: c.slug });
  }
  // sort countries and cities
  for (const cont of Object.keys(byCont)) {
    const countries = byCont[cont];
    for (const country of Object.keys(countries)) {
      countries[country].sort((a,b)=>a.name.localeCompare(b.name, 'fr'));
    }
  }
  return byCont;
}

export default function CityDropdown({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const data = useMemo(groupCities, []);

  return (
    <div className="relative">
      <button className="px-3 py-2 rounded-lg hover:bg-neutral-800" onClick={()=>setOpen(v=>!v)}>
        {lang==='fr' ? 'Villes' : 'Cities'} ▾
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-[22rem] max-h-[26rem] overflow-y-auto card p-3 z-50">
          {Object.entries(data).map(([continent, countries]) => (
            <div key={continent} className="mb-3">
              <div className="text-sm uppercase tracking-wide text-neutral-400 mb-1">{continent}</div>
              {Object.entries(countries).sort((a,b)=>a[0].localeCompare(b[0],'fr')).map(([country, cityList]) => (
                <div key={country} className="mb-2">
                  <div className="font-semibold">{country}</div>
                  <ul className="ml-4 list-disc">
                    {cityList.map((c) => (
                      <li key={c.slug}>
                        <Link className="hover:underline" href={`/${lang}/cities/${c.slug}`}>{c.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
          <div className="pt-2 border-t border-neutral-800 text-right">
            <Link className="underline text-sm" href={`/${lang}/cities`}>{lang==='fr'?'Toutes les villes':'All cities'} →</Link>
          </div>
        </div>
      )}
    </div>
  );
}