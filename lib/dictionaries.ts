export type Lang = 'fr' | 'en';

export const dict = {
  fr: {
    brand: "StudentPassport",
    tagline: "Ton copilote pour t'installer dans une nouvelle ville",
    nav: { cities: "Villes", pricing: "Abonnement", shop: "Boutique", account: "Compte", login: "Connexion", logout: "Déconnexion" },
    cta: { explore: "Explorer les villes", start: "Commencer", subscribe: "S'abonner", buy: "Acheter" },
    hero: {
      title: "Arrive confiant·e, vis comme un·e local·e",
      subtitle: "Guides étudiants, bons plans logement, banques, eSIM, transports — le tout trié par ville."
    },
    pricing: {
      title: "Abonnement",
      monthly: "Mensuel",
      yearly: "Annuel",
      features: ["Guides complets par ville", "Cartes & checklists", "Support prioritaire", "Réductions partenaires"]
    },
    shop: { title: "Boutique étudiante" },
    auth: { magicTitle: "Connexion par email", email: "Ton email ESSEC (ou perso)", send: "M'envoyer le lien", or: "ou", google: "Continuer avec Google (à venir)" },
    account: { needLogin: "Connecte-toi pour voir ton compte.", subscriber: "Tu es abonné·e ✅", notSubscriber: "Pas encore abonné·e." }
  },
  en: {
    brand: "StudentPassport",
    tagline: "Your co‑pilot to settle into a new city",
    nav: { cities: "Cities", pricing: "Pricing", shop: "Shop", account: "Account", login: "Log in", logout: "Log out" },
    cta: { explore: "Explore cities", start: "Get started", subscribe: "Subscribe", buy: "Buy" },
    hero: {
      title: "Arrive confident, live like a local",
      subtitle: "Student guides, housing tips, banks, eSIM, transport — curated per city."
    },
    pricing: {
      title: "Pricing",
      monthly: "Monthly",
      yearly: "Yearly",
      features: ["Full city guides", "Maps & checklists", "Priority support", "Partner discounts"]
    },
    shop: { title: "Student shop" },
    auth: { magicTitle: "Magic link login", email: "Your email", send: "Send me the link", or: "or", google: "Continue with Google (coming soon)" },
    account: { needLogin: "Log in to view your account.", subscriber: "You are a subscriber ✅", notSubscriber: "Not subscribed yet." }
  }
} as const;
