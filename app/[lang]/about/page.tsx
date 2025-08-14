import { Lang } from '@/lib/dictionaries';

export default function About({ params }: { params: { lang: Lang } }) {
  const isFr = params.lang === 'fr';
  return (
    <div className="space-y-8 w-full">
      <div className="relative w-full h-64 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600)` }} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center px-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold">{isFr ? 'À propos' : 'About us'}</h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card p-6 space-y-4">
          <h2 className="font-semibold text-xl">{isFr ? 'Fait par des étudiants, pour des étudiants' : 'Built by students, for students'}</h2>
          <p className="text-neutral-300">
            {isFr ?
            'Né à l’ESSEC, StudentPassport rassemble des étudiants qui ont vécu les échanges internationaux et savent ce qui compte vraiment à l’arrivée : un logement sûr, un titre de transport, une carte SIM, un compte bancaire, et des bons plans locaux.' :
            'Born at ESSEC, StudentPassport brings together students who experienced studying abroad and know what really matters upon arrival: safe housing, transport pass, SIM card, bank account, and local hacks.'}
          </p>
          <p className="text-neutral-300">
            {isFr ?
            'Nos guides sont concrets, à jour, et validés par des contributeurs sur place. Notre mission : que ton installation prenne des heures, pas des semaines.' :
            'Our guides are concrete, up-to-date, and validated by contributors on the ground. Our mission: make your setup take hours, not weeks.'}
          </p>
        </div>
        <div className="card p-6 space-y-4">
          <h3 className="font-semibold">{isFr ? 'Équipe' : 'Team'}</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { name: 'Alex', role: isFr?'Fondateur':'Founder', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400' },
              { name: 'Maya', role: isFr?'Contenus':'Content', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400' },
              { name: 'Ibrahim', role: isFr?'Partenariats':'Partnerships', img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400' },
              { name: 'Zoé', role: isFr?'Design':'Design', img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=400' },
              { name: 'Mateo', role: 'Ops', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400' },
              { name: 'Sara', role: isFr?'Communauté':'Community', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400' },
            ].map((m,i)=>(
              <div key={i} className="text-center">
                <img className="w-full h-20 object-cover rounded-lg" src={m.img} alt={m.name} />
                <div className="mt-1 text-sm font-semibold">{m.name}</div>
                <div className="text-xs text-neutral-400">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-semibold mb-2">{isFr ? 'Ce que nous offrons' : 'What we offer'}</h3>
        <ul className="list-disc list-inside text-neutral-300 space-y-1">
          <li>{isFr ? 'Guides par ville triés pour les étudiants' : 'Student-focused city guides'}</li>
          <li>{isFr ? 'Checklists interactives' : 'Interactive checklists'}</li>
          <li>{isFr ? 'Réductions partenaires' : 'Partner discounts'}</li>
          <li>{isFr ? 'Support prioritaire' : 'Priority support'}</li>
        </ul>
      </div>
    </div>
  );
}