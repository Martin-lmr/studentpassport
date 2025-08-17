'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { dict, Lang } from '@/lib/dictionaries';

export default function ResetPassword({ params }: { params: { lang: Lang } }) {
  const t = dict[params.lang];
  const searchParams = useSearchParams();
  const access_token = searchParams.get('access_token');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const handleReset = async () => {
    setMsg(null); setErr(null);
    if (!access_token) return setErr(params.lang === 'fr' ? "Lien invalide." : "Invalid link.");
    if (pw.length < 8) return setErr(params.lang === 'fr' ? "Mot de passe trop court (8+)" : "Password too short (8+)");
    if (pw !== pw2) return setErr(params.lang === 'fr' ? "Les mots de passe diffèrent" : "Passwords do not match");

    const { error } = await supabase.auth.updateUser({ password: pw });
    if (error) setErr(error.message);
    else setMsg(params.lang === 'fr' ? "✔ Mot de passe changé avec succès. Tu peux maintenant te reconnecter." : "✔ Password updated successfully. You can now log in.");
  };

  return (
    <div className="max-w-md mx-auto p-6 card space-y-4">
      <h1 className="text-xl font-bold text-center">
        {params.lang === 'fr' ? "Réinitialiser ton mot de passe" : "Reset your password"}
      </h1>

      <div className="space-y-3">
        <input
          className="input"
          type="password"
          placeholder={t.auth.password}
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder={t.auth.newPasswordAgain}
          value={pw2}
          onChange={(e) => setPw2(e.target.value)}
        />
      </div>

      <button className="btn w-full" onClick={handleReset}>
        {params.lang === 'fr' ? "Confirmer" : "Confirm"}
      </button>

      {msg && <div className="text-green-500 text-sm">{msg}</div>}
      {err && <div className="text-red-500 text-sm">{err}</div>}
    </div>
  );
}
