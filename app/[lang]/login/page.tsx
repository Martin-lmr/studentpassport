'use client';
import { dict, Lang } from '@/lib/dictionaries';
import { supabase } from '@/lib/supabase';
import { useState } from 'react';

export default function Login({ params }: { params: { lang: Lang } }) {
  const t = dict[params.lang];
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'sent'|'error'>('idle');

  const sendLink = async () => {
    setStatus('idle');
    const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/${params.lang}/account` } });
    if (error) setStatus('error'); else setStatus('sent');
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">{t.auth.magicTitle}</h1>
      <input className="input" placeholder={t.auth.email} value={email} onChange={(e)=>setEmail(e.target.value)} />
      <button className="btn" onClick={sendLink}>{t.auth.send}</button>
      {status === 'sent' && <div className="text-green-400">Lien envoyé ✔</div>}
      {status === 'error' && <div className="text-red-400">Erreur, vérifie l'email.</div>}
    </div>
  );
}
