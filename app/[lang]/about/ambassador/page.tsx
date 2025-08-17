'use client';
import { useState } from 'react';
import { Lang } from '@/lib/dictionaries';
import { supabase } from '@/lib/supabase';

export default function Ambassador({ params }: { params: { lang: Lang } }) {
  const isFr = params.lang === 'fr';
  const [form, setForm] = useState({
    name: '',
    email: '',
    city: '',
    motivation: '',
    experience: '',
    languages: '',
    availability: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('ambassadors').insert([form]);
    if (error) setStatus(isFr ? "❌ Erreur, réessaie plus tard." : "❌ Error, please try again.");
    else {
      setStatus(isFr ? "✅ Candidature envoyée avec succès ! 🚀" : "✅ Application sent successfully! 🚀");
      setForm({ name: '', email: '', city: '', motivation: '', experience: '', languages: '', availability: '' });
    }
  };

  return (
    <div className="space-y-12 w-full">
      {/* Hero */}
      <div className="relative w-full h-64 rounded-xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1532619675605-1ede6f3c45cc?w=1600)` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center px-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            {isFr ? 'Deviens Ambassadeur StudentPassport' : 'Become a StudentPassport Ambassador'}
          </h1>
        </div>
      </div>

      {/* Why section */}
      <div className="card p-6 space-y-4">
        <h2 className="text-2xl font-semibold">{isFr ? "Pourquoi devenir ambassadeur ?" : "Why become an ambassador?"}</h2>
        <p className="text-neutral-300">
          {isFr
            ? "En tant qu’ambassadeur StudentPassport, tu joues un rôle clé : accueillir les nouveaux étudiants, partager tes bons plans et représenter ta ville. Tu contribues à une communauté internationale tout en développant ton réseau."
            : "As a StudentPassport ambassador, you’ll play a key role: welcoming new students, sharing tips, and representing your city. You’ll be part of an international community while expanding your network."}
        </p>
        <ul className="list-disc list-inside text-neutral-400 space-y-1">
          <li>{isFr ? "Aider les étudiants à s’intégrer" : "Help students settle in"}</li>
          <li>{isFr ? "Partager tes bons plans locaux" : "Share your best local tips"}</li>
          <li>{isFr ? "Participer à des événements exclusifs" : "Join exclusive events"}</li>
          <li>{isFr ? "Avantages et réductions partenaires" : "Exclusive perks & partner discounts"}</li>
        </ul>
      </div>

      {/* Application form */}
      <div className="card p-6 space-y-6">
        <h2 className="font-semibold text-xl">{isFr ? "Ta candidature" : "Your application"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder={isFr ? "Ton prénom et nom" : "Your full name"} value={form.name} onChange={handleChange} required className="input" />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="input" />
          <input type="text" name="city" placeholder={isFr ? "Ville où tu représenteras StudentPassport" : "City you will represent"} value={form.city} onChange={handleChange} required className="input" />

          <textarea name="motivation" placeholder={isFr ? "Pourquoi veux-tu devenir ambassadeur ?" : "Why do you want to become ambassador?"} value={form.motivation} onChange={handleChange} required className="input" rows={4} />

          <textarea name="experience" placeholder={isFr ? "As-tu déjà eu une expérience dans l’accueil, le bénévolat ou l’événementiel ?" : "Do you have experience in welcoming, volunteering or event management?"} value={form.experience} onChange={handleChange} className="input" rows={3} />

          <input type="text" name="languages" placeholder={isFr ? "Langues parlées (ex: Français, Anglais, Espagnol)" : "Languages spoken (e.g. English, French, Spanish)"} value={form.languages} onChange={handleChange} className="input" />

          <input type="text" name="availability" placeholder={isFr ? "Disponibilités (ex: 5h/semaine, soirées, week-ends)" : "Availability (e.g. 5h/week, evenings, weekends)"} value={form.availability} onChange={handleChange} className="input" />

          <button type="submit" className="btn w-full">
            {isFr ? "📨 Envoyer ma candidature" : "📨 Send my application"}
          </button>
        </form>

        {status && <p className="text-sm text-green-400">{status}</p>}
      </div>
    </div>
  );
}
