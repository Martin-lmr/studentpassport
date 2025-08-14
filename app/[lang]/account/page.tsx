'use client';
import { dict, Lang } from '@/lib/dictionaries';
import Protected from '@/components/Protected';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';

export default function Account({ params }: { params: { lang: Lang } }) {
  const t = dict[params.lang];
  const [email, setEmail] = useState<string>('');
  const [subscriber, setSubscriber] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { data: session } = await supabase.auth.getSession();
      const u = session.session?.user;
      setEmail(u?.email ?? '');
      // We store subscription flag in user metadata (updated by Stripe webhook)
      // @ts-ignore
      setSubscriber(Boolean(u?.user_metadata?.is_subscriber));
    })();
  }, []);

  return (
    <Protected fallback={<div className="text-neutral-300">{t.account.needLogin}</div>}>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Account</h1>
        <div className="card p-4">
          <div>Email: {email || '—'}</div>
          <div className="mt-2">{subscriber ? t.account.subscriber : t.account.notSubscriber}</div>
        </div>
      </div>
    </Protected>
  );
}
