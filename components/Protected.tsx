'use client';
import { ReactNode, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Protected({ children, fallback, requireSubscription }: { children: ReactNode; fallback?: ReactNode; requireSubscription?: boolean }) {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [subscriber, setSubscriber] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;
      setAuthed(Boolean(session));
      // @ts-ignore
      const sub = Boolean(session?.user?.user_metadata?.is_subscriber);
      setSubscriber(sub);
      setReady(true);
    })();
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthed(Boolean(session));
      // @ts-ignore
      setSubscriber(Boolean(session?.user?.user_metadata?.is_subscriber));
      setReady(true);
    });
    return () => { sub.subscription.unsubscribe(); };
  }, []);

  if (!ready) return <div className="opacity-70">...</div>;
  if (!authed) return fallback ?? <div className="text-neutral-300">Connecte-toi pour accéder à cette page.</div>;
  if (requireSubscription && !subscriber) return <div className="text-neutral-300">Cette page est réservée aux abonnés. Va sur la page Prix pour t'abonner.</div>;
  return <>{children}</>;
}