'use client';
import Protected from '@/components/Protected';
import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Lang } from '@/lib/dictionaries';

type Item = { id: string; label: string; done: boolean };

const defaultItems = (lang: Lang): Item[] => [
  { id: 'housing', label: lang==='fr'?'Trouver un logement':'Find housing', done: false },
  { id: 'bank', label: lang==='fr'?'Ouvrir un compte bancaire':'Open a bank account', done: false },
  { id: 'sim', label: lang==='fr'?'Prendre une eSIM/SIM':'Get an eSIM/SIM', done: false },
  { id: 'transport', label: lang==='fr'?'Souscrire un titre de transport':'Get a transport pass', done: false },
  { id: 'insurance', label: lang==='fr'?'Assurance habitation / santé':'Home/health insurance', done: false },
  { id: 'docs', label: lang==='fr'?'Documents administratifs':'Admin documents', done: false },
];

export default function Checklist({ params }: { params: { lang: Lang } }) {
  const lang = params.lang;
  const [email, setEmail] = useState<string>('');
  const storageKey = useMemo(()=>`sp_checklist_${email||'guest'}_${lang}`, [email, lang]);
  const [items, setItems] = useState<Item[]>(defaultItems(lang));

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setEmail(data.session?.user.email ?? ''));
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setItems(JSON.parse(raw));
      else setItems(defaultItems(lang));
    } catch {}
  }, [storageKey, lang]);

  useEffect(() => {
    try { localStorage.setItem(storageKey, JSON.stringify(items)); } catch {}
  }, [items, storageKey]);

  const toggle = (id: string) => setItems(prev => prev.map(it => it.id===id?{...it, done:!it.done}:it));
  const addItem = (label: string) => setItems(prev => [...prev, { id: String(Date.now()), label, done:false }]);

  const [newItem, setNewItem] = useState('');

  return (
    <Protected requireSubscription>
      <div className="space-y-4 w-full">
        <h1 className="text-2xl font-bold">{lang==='fr'?'Ma checklist':'My checklist'}</h1>
        <div className="card p-4 space-y-3">
          <div className="flex gap-2">
            <input className="input" value={newItem} onChange={e=>setNewItem(e.target.value)} placeholder={lang==='fr'?'Ajouter une tâche':'Add a task'} />
            <button className="btn" onClick={()=>{ if(newItem.trim()) { addItem(newItem.trim()); setNewItem(''); } }}>{lang==='fr'?'Ajouter':'Add'}</button>
          </div>
          <ul className="space-y-2">
            {items.map(it => (
              <li key={it.id} className="flex items-center gap-3">
                <input type="checkbox" checked={it.done} onChange={()=>toggle(it.id)} />
                <span className={it.done?'line-through text-neutral-400':''}>{it.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Protected>
  );
}