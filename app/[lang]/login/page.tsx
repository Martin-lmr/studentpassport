'use client';
import { dict, Lang } from '@/lib/dictionaries';
import { supabase } from '@/lib/supabase';
import { useState } from 'react';
import Link from 'next/link';

export default function Login({ params }: { params: { lang: Lang } }) {
  const t = dict[params.lang];

  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [fullName, setFullName] = useState(''); // 👈 nouveau champ
  const [showPw, setShowPw] = useState(false);

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const accountUrl = `/${params.lang}/account`;

  const validate = () => {
    setErr(null);
    if (!email.includes('@')) return setErr('Email invalide.'), false;
    if (mode === 'signup') {
      if (!fullName.trim()) return setErr(params.lang === 'fr' ? 'Nom requis' : 'Name required'), false;
      if (pw.length < 8) return setErr(params.lang === 'fr' ? 'Mot de passe trop court (8+)' : 'Password too short (8+)'), false;
      if (pw !== pw2) return setErr(params.lang === 'fr' ? 'Les mots de passe diffèrent' : 'Passwords do not match'), false;
    }
    return true;
  };

  const handleAuth = async () => {
    if (!validate()) return;
    setLoading(true); setMsg(null); setErr(null);
    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password: pw });
        if (error) throw error;
        setMsg(t.auth.welcome);
        window.location.href = accountUrl;
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password: pw,
          options: { 
            emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/${params.lang}/account`,
            data: { full_name: fullName } // 👈 stocké en metadata
          }
        });
        if (error) throw error;
        setMsg(t.auth.checkInbox);
      }
    } catch (e: any) {
      setErr(e.message || 'Error');
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async () => {
    setMsg(null); setErr(null);
    if (!email) { setErr(t.auth.enterEmailFirst); return; }
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/${params.lang}/reset-password`
    });
    if (error) setErr(error.message);
    else setMsg(t.auth.resetEmailSent);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="card p-6 space-y-5">
        <h1 className="text-2xl font-bold text-center">
          {mode === 'login' ? t.auth.loginTitle : t.auth.signupTitle}
        </h1>

        <div className="space-y-3">
          <input
            className="input"
            type="email"
            placeholder={t.auth.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {mode === 'signup' && (
            <input
              className="input"
              type="text"
              placeholder={params.lang === 'fr' ? "Ton nom complet" : "Your full name"}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          )}

          <div className="relative">
            <input
              className="input pr-24"
              type={showPw ? 'text' : 'password'}
              placeholder={t.auth.password}
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm underline"
              onClick={() => setShowPw((s) => !s)}
            >
              {showPw ? t.auth.hide : t.auth.show}
            </button>
          </div>

          {mode === 'signup' && (
            <input
              className="input"
              type={showPw ? 'text' : 'password'}
              placeholder={t.auth.newPasswordAgain}
              value={pw2}
              onChange={(e) => setPw2(e.target.value)}
            />
          )}

          <p className="text-xs text-neutral-400">{t.auth.rules}</p>
        </div>

        <button className="btn w-full" disabled={loading} onClick={handleAuth}>
          {loading ? '...' : (mode === 'login' ? t.auth.login : t.auth.signup)}
        </button>

        {mode === 'login' ? (
          <div className="flex items-center justify-between text-sm">
            <button className="text-blue-600 hover:text-blue-800 underline" onClick={resetPassword}>
              {t.auth.forgot}
            </button>
            <button className="underline" onClick={() => setMode('signup')}>{t.auth.noAccount}</button>
          </div>
        ) : (
          <div className="text-sm text-center">
            <button className="underline" onClick={() => setMode('login')}>{t.auth.haveAccount}</button>
          </div>
        )}

        {(msg || err) && (
          <div className={err ? 'text-red-400 text-sm' : 'text-green-400 text-sm'}>
            {err || msg}
          </div>
        )}

        <div className="text-center text-xs text-neutral-500">
          <Link href={`/${params.lang}`}>← {params.lang === 'fr' ? 'Retour à l’accueil' : 'Back to home'}</Link>
        </div>
      </div>
    </div>
  );
}
