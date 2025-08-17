'use client';
import { useState } from 'react';
import { Lang } from '@/lib/dictionaries';
import { supabase } from '@/lib/supabase';

export default function Contact({ params }: { params: { lang: Lang } }) {
  const isFr = params.lang === 'fr';
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('contact_messages').insert([{ email, message }]);
    if (error) setStatus(isFr ? "Erreur, réessaie plus tard." : "Error, please try again.");
    else {
      setStatus(isFr ? "Message envoyé ! Merci 🙌" : "Message sent! Thanks 🙌");
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="space-y-8 w-full">
      <div className="relative w-full h-64 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1521790361543-f645cf042ec4?w=1600)` }} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center px-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold">{isFr ? 'Contact' : 'Contact'}</h1>
        </div>
      </div>

      <div className="card p-6 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder={isFr ? "Ton email" : "Your email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 rounded bg-neutral-800 border border-neutral-700"
          />
          <textarea
            placeholder={isFr ? "Ton message..." : "Your message..."}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full p-2 rounded bg-neutral-800 border border-neutral-700"
          />
          <button type="submit" className="btn w-full">{isFr ? "Envoyer" : "Send"}</button>
        </form>
        {status && <p className="text-sm text-green-400">{status}</p>}
      </div>
    </div>
  );
}
