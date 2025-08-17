'use client';
import { dict, Lang } from '@/lib/dictionaries';
import Protected from '@/components/Protected';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';

export default function Account({ params }: { params: { lang: Lang } }) {
  const t = dict[params.lang];
  const [email, setEmail] = useState<string>('');
  const [createdAt, setCreatedAt] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [subscriber, setSubscriber] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { data: session } = await supabase.auth.getSession();
      const u = session.session?.user;

      if (u) {
        setEmail(u.email ?? '');
        setCreatedAt(new Date(u.created_at).toLocaleDateString(params.lang === 'fr' ? 'fr-FR' : 'en-US'));
        setName(u.user_metadata?.full_name ?? '');
        // abonnement stocké dans user_metadata via Stripe webhook
        setSubscriber(Boolean(u.user_metadata?.is_subscriber));
      }
    })();
  }, [params.lang]);

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = `/${params.lang}/login`;
  };

  const resetPassword = async () => {
    if (!email) return;
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/${params.lang}/reset`,
    });
    alert(params.lang === 'fr'
      ? 'Email de réinitialisation envoyé ✔'
      : 'Password reset email sent ✔'
    );
  };

  return (
    <Protected fallback={<div className="text-neutral-300">{t.account.needLogin}</div>}>
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">{t.nav.account}</h1>

        <div className="card p-6 space-y-4 shadow-md rounded-lg border border-neutral-200">
          <div>
            <span className="font-semibold">Email:</span> {email || '—'}
          </div>
          {name && (
            <div>
              <span className="font-semibold">{params.lang === 'fr' ? 'Nom:' : 'Name:'}</span> {name}
            </div>
          )}
          <div>
            <span className="font-semibold">{params.lang === 'fr' ? 'Créé le:' : 'Created at:'}</span> {createdAt}
          </div>
          <div>
            <span className="font-semibold">{params.lang === 'fr' ? 'Abonnement:' : 'Subscription:'}</span>{' '}
            {subscriber ? (
              <span className="text-green-600">{t.account.subscriber}</span>
            ) : (
              <span className="text-red-500">{t.account.notSubscriber}</span>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={resetPassword}
              className="btn border border-neutral-300 bg-neutral-50 hover:bg-neutral-100"
            >
              {params.lang === 'fr' ? 'Changer le mot de passe' : 'Change password'}
            </button>
            <button
              onClick={logout}
              className="btn bg-red-500 hover:bg-red-600 text-white"
            >
              {t.nav.logout}
            </button>
          </div>
        </div>
      </div>
    </Protected>
  );
}
