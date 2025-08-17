export type Lang = 'fr' | 'en';

export const dict = {
  fr: {
    brand: "StudentPassport",
    tagline: "Ton copilote pour t'installer dans une nouvelle ville",
    nav: { 
      cities: "Villes", 
      pricing: "Abonnement", 
      shop: "Boutique", 
      account: "Compte", 
      login: "Connexion", 
      logout: "Déconnexion" 
    },
    cta: { 
      explore: "Explorer les villes", 
      start: "Commencer", 
      subscribe: "S'abonner", 
      buy: "Acheter" 
    },
    hero: {
      title: "Arrive confiant·e, vis comme un·e local·e",
      subtitle: "Guides étudiants, bons plans logement, banques, eSIM, transports — le tout trié par ville."
    },
    pricing: {
      title: "Abonnement",
      monthly: "Mensuel",
      yearly: "Annuel",
      features: [
        "Guides complets par ville", 
        "Cartes & checklists", 
        "Support prioritaire", 
        "Réductions partenaires"
      ]
    },
    shop: { 
      title: "Boutique étudiante" 
    },
    auth: { 
      magicTitle: "Connexion par email",   // ancien mode (magic link)
      email: "Ton email ESSEC (ou perso)",
      password: "Mot de passe",
      loginTitle: "Connexion",
      signupTitle: "Créer un compte",
      login: "Se connecter",
      signup: "Créer mon compte",
      send: "M'envoyer le lien",
      or: "ou",
      google: "Continuer avec Google (à venir)",
      forgot: "Mot de passe oublié ?",
      noAccount: "Pas de compte ? Crée-en un",
      haveAccount: "Déjà un compte ? Se connecter",
      checkInbox: "Vérifie ta boîte mail pour confirmer ton adresse.",
      welcome: "Bienvenue 👋 Connexion réussie.",
      resetTitle: "Réinitialiser le mot de passe",
      newPassword: "Nouveau mot de passe",
      newPasswordAgain: "Confirme le mot de passe",
      updatePassword: "Mettre à jour",
      resetEmailSent: "Email de réinitialisation envoyé ✔",
      enterEmailFirst: "Entre ton email pour recevoir le lien.",
      rules: "8+ caractères, sensible à la casse",
      show: "Afficher",
      hide: "Masquer"
    },
    account: { 
      needLogin: "Connecte-toi pour voir ton compte.", 
      subscriber: "Tu es abonné·e ✅", 
      notSubscriber: "Pas encore abonné·e." 
    }
  },

  en: {
    brand: "StudentPassport",
    tagline: "Your co-pilot to settle into a new city",
    nav: { 
      cities: "Cities", 
      pricing: "Pricing", 
      shop: "Shop", 
      account: "Account", 
      login: "Log in", 
      logout: "Log out" 
    },
    cta: { 
      explore: "Explore cities", 
      start: "Get started", 
      subscribe: "Subscribe", 
      buy: "Buy" 
    },
    hero: {
      title: "Arrive confident, live like a local",
      subtitle: "Student guides, housing tips, banks, eSIM, transport — curated per city."
    },
    pricing: {
      title: "Pricing",
      monthly: "Monthly",
      yearly: "Yearly",
      features: [
        "Full city guides", 
        "Maps & checklists", 
        "Priority support", 
        "Partner discounts"
      ]
    },
    shop: { 
      title: "Student shop" 
    },
    auth: { 
      magicTitle: "Magic link login",  // old mode (magic link)
      email: "Your email",
      password: "Password",
      loginTitle: "Log in",
      signupTitle: "Create an account",
      login: "Log in",
      signup: "Sign up",
      send: "Send me the link",
      or: "or",
      google: "Continue with Google (coming soon)",
      forgot: "Forgot password?",
      noAccount: "No account? Create one",
      haveAccount: "Already have an account? Log in",
      checkInbox: "Check your inbox to confirm your email.",
      welcome: "Welcome 👋 You’re logged in.",
      resetTitle: "Reset password",
      newPassword: "New password",
      newPasswordAgain: "Confirm password",
      updatePassword: "Update password",
      resetEmailSent: "Password reset email sent ✔",
      enterEmailFirst: "Enter your email to receive the link.",
      rules: "8+ characters, case sensitive",
      show: "Show",
      hide: "Hide"
    },
    account: { 
      needLogin: "Log in to view your account.", 
      subscriber: "You are a subscriber ✅", 
      notSubscriber: "Not subscribed yet." 
    }
  }
} as const;
