export type City = {
  slug: string;
  country: string;
  continent: 'Europe'|'North America'|'South America'|'Asia'|'Africa'|'Oceania';
  coords: [number, number]; // [lat, lng]
  cover: string;
  content: {
    fr: { name: string; intro: string; quick: string[]; budget: string; housing: string; admin: string; transport: string; tips: string[]; },
    en: { name: string; intro: string; quick: string[]; budget: string; housing: string; admin: string; transport: string; tips: string[]; },
  };
};

export const cities: City[] = [
  // EUROPE (12)
  {
    slug: "paris", country: "France", continent: "Europe", coords: [48.8566, 2.3522],
    cover: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1600",
    content: {
      fr: { name: "Paris", intro: "Capitale étudiante vibrante.", quick: ["Carte ImaginR", "APL/CAF", "eSIM Airalo/Ubigi", "Banques: Boursorama/Hello bank!"], budget: "1 100–1 500€ coloc; 1 600–2 200€ studio.", housing: "Leboncoin, SeLoger, PAP, Studapart. Quartiers 11/12/13/14/15/18/19/20.", admin: "Compte FR, assurance habitation, CAF, titre Navigo.", transport: "RATP + Navigo (mensuel). Vélo : Vélib'.", tips: ["Ne jamais payer sans visite", "Demander l'attestation CAF"] },
      en: { name: "Paris", intro: "Vibrant student capital.", quick: ["ImaginR pass", "CAF housing aid", "eSIM Airalo/Ubigi", "Banks: Boursorama/Hello bank!"], budget: "€1,100–1,500 flatshare; €1,600–2,200 studio.", housing: "Leboncoin, SeLoger, PAP, Studapart. Focus arr. 11/12/13/14/15/18/19/20.", admin: "FR bank, home insurance, CAF, Navigo.", transport: "RATP + Navigo. Bikes: Vélib'.", tips: ["Never pay before viewing", "Ask for CAF form"] }
    }
  },
  { slug: "milan", country: "Italy", continent: "Europe", coords: [45.4642, 9.19],
    cover: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600",
    content: {
      fr: { name: "Milan", intro: "Ville design & business.", quick: ["Carte étudiante ATM", "Uniplaces/Spotahome", "eSIM", "N26/Revolut"], budget: "900–1 300€ coloc; 1 300–1 800€ studio.", housing: "Città Studi, Lambrate, Porta Romana, Navigli.", admin: "Codice Fiscale utile.", transport: "ATM (métro, tram) + vélo BikeMi.", tips: ["Valide le ticket", "Subito pour l'occasion"] },
      en: { name: "Milan", intro: "Design & business hub.", quick: ["ATM student card", "Uniplaces/Spotahome", "eSIM", "N26/Revolut"], budget: "€900–1,300 share; €1,300–1,800 studio.", housing: "Città Studi, Lambrate, Porta Romana, Navigli.", admin: "Get Codice Fiscale.", transport: "ATM metro/tram; BikeMi.", tips: ["Validate your ticket", "Great second-hand on Subito"] }
    }
  },
  { slug: "madrid", country: "Spain", continent: "Europe", coords: [40.4168, -3.7038],
    cover: "https://images.unsplash.com/photo-1520697517317-22a31b91e7d9?q=80&w=1600",
    content: {
      fr: { name: "Madrid", intro: "Vie abordable, ambiance chaleureuse.", quick: ["Abono Joven", "Idealista/Badi", "NIE", "Holafly"], budget: "700–1 000€ coloc; 1 000–1 400€ studio.", housing: "Malasaña, Chamberí, Lavapiés, Argüelles.", admin: "NIE pour démarches.", transport: "Metro de Madrid illimité avec Abono.", tips: ["Clim l'été", "Tapas à La Latina"] },
      en: { name: "Madrid", intro: "Affordable & warm vibe.", quick: ["Abono Joven", "Idealista/Badi", "NIE", "Holafly"], budget: "€700–1,000 share; €1,000–1,400 studio.", housing: "Malasaña, Chamberí, Lavapiés, Argüelles.", admin: "Get NIE.", transport: "Abono Joven unlimited.", tips: ["AC for summer", "Tapas in La Latina"] }
    }
  },
  { slug: "barcelona", country: "Spain", continent: "Europe", coords: [41.3851, 2.1734],
    cover: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1600",
    content: {
      fr: { name: "Barcelone", intro: "Mer + école + startup scene.", quick: ["T-Mobilitat", "Idealista/Spotahome", "NIE", "eSIM Holafly"], budget: "800–1 200€ coloc; 1 200–1 700€ studio.", housing: "Gràcia, Poble Sec, Eixample, Poblenou.", admin: "NIE et empadronamiento utiles.", transport: "T-usual (zones), Bicing.", tips: ["Attention aux pickpockets", "Évite les arnaques logement"] },
      en: { name: "Barcelona", intro: "Beach + uni + startups.", quick: ["T-Mobilitat", "Idealista/Spotahome", "NIE", "Holafly"], budget: "€800–1,200 share; €1,200–1,700 studio.", housing: "Gràcia, Poble Sec, Eixample, Poblenou.", admin: "NIE & empadronamiento.", transport: "T-usual, Bicing.", tips: ["Beware pickpockets", "Avoid rent scams"] }
    }
  },
  { slug: "london", country: "United Kingdom", continent: "Europe", coords: [51.5072, -0.1276],
    cover: "https://images.unsplash.com/photo-1464013778555-8e723c2f01f8?q=80&w=1600",
    content: {
      fr: { name: "Londres", intro: "Capitale mondiale, chère mais dynamique.", quick: ["Oyster/Student", "SpareRoom/Rightmove", "NIN", "Revolut/Monzo"], budget: "1 200–1 800£ coloc; 1 800–2 600£ studio.", housing: "Zones 2–3: Hammersmith, Clapham, Camden.", admin: "NIN, GP registration.", transport: "Oyster/Contactless; bus 24/7; Santander Cycles.", tips: ["Vérifie le Council Tax", "Trajets: TfL app"] },
      en: { name: "London", intro: "Global, pricey, dynamic.", quick: ["Oyster/Student", "SpareRoom/Rightmove", "NIN", "Revolut/Monzo"], budget: "£1,200–1,800 share; £1,800–2,600 studio.", housing: "Zones 2–3: Hammersmith, Clapham, Camden.", admin: "NIN, register with GP.", transport: "Oyster/contactless; night buses; Santander Cycles.", tips: ["Check Council Tax", "Use TfL app"] }
    }
  },
  { slug: "berlin", country: "Germany", continent: "Europe", coords: [52.52, 13.405],
    cover: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600",
    content: {
      fr: { name: "Berlin", intro: "Créative et abordable (mais marché tendu).", quick: ["BVG", "WG-Gesucht", "Anmeldung", "N26"], budget: "700–1 000€ coloc; 1 100–1 600€ studio.", housing: "WG-Gesucht, Immobilienscout24. Quartiers: Neukölln, Friedrichshain.", admin: "Anmeldung + Anmeldung bei Krankenkasse.", transport: "BVG AB/BC; vélo très pratique.", tips: ["Prépare dossier complet", "Rendez-vous Bürgeramt tôt"] },
      en: { name: "Berlin", intro: "Creative & affordable (tight housing).", quick: ["BVG", "WG-Gesucht", "Anmeldung", "N26"], budget: "€700–1,000 share; €1,100–1,600 studio.", housing: "WG-Gesucht, Immobilienscout24. Neukölln, Friedrichshain.", admin: "Anmeldung; health insurance.", transport: "BVG AB/BC; cycling friendly.", tips: ["Strong application needed", "Book Bürgeramt early"] }
    }
  },
  { slug: "amsterdam", country: "Netherlands", continent: "Europe", coords: [52.3676, 4.9041],
    cover: "https://images.unsplash.com/photo-1459679749686-16ef2b36ad05?q=80&w=1600",
    content: {
      fr: { name: "Amsterdam", intro: "Ville vélo par excellence.", quick: ["OV-chipkaart", "Kamernet/Pararius", "BSN", "Bunq/ING"], budget: "900–1 400€ coloc; 1 400–2 000€ studio.", housing: "Kamernet, Pararius; attention aux scams.", admin: "Inscription à la mairie (BSN).", transport: "Vélo; GVB tram/métro.", tips: ["Antivol solide", "Pluie: équipement !"] },
      en: { name: "Amsterdam", intro: "Ultimate bike city.", quick: ["OV-chipkaart", "Kamernet/Pararius", "BSN", "Bunq/ING"], budget: "€900–1,400 share; €1,400–2,000 studio.", housing: "Kamernet, Pararius; beware scams.", admin: "Register for BSN.", transport: "Cycling; GVB.", tips: ["Strong bike lock", "Be rain-ready"] }
    }
  },
  { slug: "lisbon", country: "Portugal", continent: "Europe", coords: [38.7223, -9.1393],
    cover: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1600",
    content: {
      fr: { name: "Lisbonne", intro: "Ensoleillée, moins chère.", quick: ["Navegante", "Idealista/Uniplaces", "NIF", "Millennium/N26"], budget: "600–900€ coloc; 900–1 300€ studio.", housing: "Arroios, Alameda, Alcântara.", admin: "Obtenir le NIF.", transport: "Carris/Metro; colines → scooter utile.", tips: ["Touristes l'été", "Attention aux pentes !"] },
      en: { name: "Lisbon", intro: "Sunny & cheaper.", quick: ["Navegante", "Idealista/Uniplaces", "NIF", "Millennium/N26"], budget: "€600–900 share; €900–1,300 studio.", housing: "Arroios, Alameda, Alcântara.", admin: "Get NIF.", transport: "Carris/Metro; hilly.", tips: ["Touristy in summer", "Hills = good shoes"] }
    }
  },
  { slug: "copenhagen", country: "Denmark", continent: "Europe", coords: [55.6761, 12.5683],
    cover: "https://images.unsplash.com/photo-1563118490-b9bdb1d6d28b?q=80&w=1600",
    content: {
      fr: { name: "Copenhague", intro: "Qualité de vie top, chère.", quick: ["Rejsekort", "BoligPortal", "CPR", "Danske Bank"], budget: "900–1 400€ coloc; 1 400–2 100€ studio.", housing: "BoligPortal, FB groups.", admin: "CPR number + NemID.", transport: "Vélo roi; Metro 24/7.", tips: ["Hiver froid", "Budget nourriture élevé"] },
      en: { name: "Copenhagen", intro: "High QoL, pricey.", quick: ["Rejsekort", "BoligPortal", "CPR", "Danske Bank"], budget: "€900–1,400 share; €1,400–2,100 studio.", housing: "BoligPortal, FB groups.", admin: "CPR + NemID.", transport: "Bikes; 24/7 metro.", tips: ["Cold winters", "High food costs"] }
    }
  },
  { slug: "prague", country: "Czechia", continent: "Europe", coords: [50.0755, 14.4378],
    cover: "https://images.unsplash.com/photo-1521292270410-a8c2e1f0d3b6?q=80&w=1600",
    content: {
      fr: { name: "Prague", intro: "Belle et abordable.", quick: ["PID", "SReality", "Visa/étranger", "Airalo"], budget: "500–800€ coloc; 800–1 200€ studio.", housing: "SReality, Flatio; quartiers Vinohrady, Žižkov.", admin: "Enregistrement étranger.", transport: "Metro/tram efficaces.", tips: ["Hiver froid", "Touristique centre"] },
      en: { name: "Prague", intro: "Beautiful & affordable.", quick: ["PID", "SReality", "Visa/foreigners office", "Airalo"], budget: "€500–800 share; €800–1,200 studio.", housing: "SReality, Flatio; Vinohrady, Žižkov.", admin: "Foreigner registration.", transport: "Efficient metro/tram.", tips: ["Cold winters", "Touristy center"] }
    }
  },
  { slug: "stockholm", country: "Sweden", continent: "Europe", coords: [59.3293, 18.0686],
    cover: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=1600",
    content: {
      fr: { name: "Stockholm", intro: "Organisée, sûre, chère.", quick: ["SL card", "Bostad/SSSB", "Personnummer", "Swedbank"], budget: "900–1 400€ coloc; 1 400–2 100€ studio.", housing: "Files d'attente; SSSB étudiants.", admin: "Personnummer requis souvent.", transport: "SL (métro, bus, ferry).", tips: ["Hiver sombre", "Bonnes bibliothèques"] },
      en: { name: "Stockholm", intro: "Organized, safe, pricey.", quick: ["SL card", "Bostad/SSSB", "Personnummer", "Swedbank"], budget: "€900–1,400 share; €1,400–2,100 studio.", housing: "Queues; SSSB for students.", admin: "Personnummer needed.", transport: "SL network.", tips: ["Dark winters", "Great libraries"] }
    }
  },
  { slug: "dublin", country: "Ireland", continent: "Europe", coords: [53.3498, -6.2603],
    cover: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1600",
    content: {
      fr: { name: "Dublin", intro: "Écosystème tech, logements rares.", quick: ["Leap Card", "Daft.ie", "PPSN", "Revolut/AIB"], budget: "900–1 400€ coloc; 1 600–2 400€ studio.", housing: "Daft, Rent.ie; coloc fréquente.", admin: "PPS number.", transport: "DART, Bus; vélo facile.", tips: ["Budgétise chauffage", "Quartiers: Rathmines, Phibsborough"] },
      en: { name: "Dublin", intro: "Tech hub, tight rentals.", quick: ["Leap Card", "Daft.ie", "PPSN", "Revolut/AIB"], budget: "€900–1,400 share; €1,600–2,400 studio.", housing: "Daft, Rent.ie; flat-shares.", admin: "PPS number.", transport: "DART, buses.", tips: ["Heating costs", "Rathmines, Phibsborough"] }
    }
  },
  { slug: "budapest", country: "Hungary", continent: "Europe", coords: [47.4979, 19.0402],
    cover: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1600",
    content: {
      fr: { name: "Budapest", intro: "Étudiante et festive.", quick: ["BKK", "Ingatan.com", "Carte étudiante", "Revolut"], budget: "400–700€ coloc; 700–1 000€ studio.", housing: "VIIe (Erzsébetváros), VIIIe.", admin: "Enregistrement local.", transport: "BKK (métro, tram).", tips: ["Thermes : top", "Hivers froids"] },
      en: { name: "Budapest", intro: "Studenty & lively.", quick: ["BKK", "Ingatan", "Student card", "Revolut"], budget: "€400–700 share; €700–1,000 studio.", housing: "District VII, VIII.", admin: "Local registration.", transport: "BKK.", tips: ["Thermal baths", "Cold winters"] }
    }
  },
  // NORTH AMERICA (5)
  { slug: "montreal", country: "Canada", continent: "North America", coords: [45.5017, -73.5673],
    cover: "https://images.unsplash.com/photo-1509188075099-3c3e3e5f9a4c?q=80&w=1600",
    content: {
      fr: { name: "Montréal", intro: "Bilingue et abordable (hors centre).", quick: ["STM", "Kijiji/Facebook", "RAMQ (si éligible)", "Comptes: Desjardins/KOHO"], budget: "600–900€ coloc; 900–1 400€ studio.", housing: "Plateau, Rosemont, Verdun.", admin: "CAQ + permis d’études si non-échange.", transport: "STM + BIXI.", tips: ["Hiver très froid", "Sous-sol fréquents"] },
      en: { name: "Montreal", intro: "Bilingual & affordable (outside core).", quick: ["STM", "Kijiji/FB", "RAMQ (if eligible)", "Desjardins/KOHO"], budget: "€600–900 share; €900–1,400 studio.", housing: "Plateau, Rosemont, Verdun.", admin: "CAQ + study permit when needed.", transport: "STM + BIXI bikes.", tips: ["Very cold winters", "Basements common"] }
    }
  },
  { slug: "toronto", country: "Canada", continent: "North America", coords: [43.6532, -79.3832],
    cover: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600",
    content: {
      fr: { name: "Toronto", intro: "Grande métropole, chère.", quick: ["PRESTO", "Padmapper", "SIN", "Tangerine/Scotiabank"], budget: "900–1 300€ coloc; 1 400–2 200€ studio.", housing: "Annex, Little Italy, Leslieville.", admin: "SIN + compte bancaire.", transport: "TTC + GO Transit.", tips: ["Hiver rude", "Logement cher centre"] },
      en: { name: "Toronto", intro: "Big & expensive.", quick: ["PRESTO", "Padmapper", "SIN", "Tangerine/Scotiabank"], budget: "€900–1,300 share; €1,400–2,200 studio.", housing: "Annex, Little Italy, Leslieville.", admin: "SIN, bank account.", transport: "TTC + GO.", tips: ["Harsh winters", "Pricey downtown"] }
    }
  },
  { slug: "vancouver", country: "Canada", continent: "North America", coords: [49.2827, -123.1207],
    cover: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600",
    content: {
      fr: { name: "Vancouver", intro: "Nature & tech, chère.", quick: ["Compass", "Craigslist/FB", "MSP BC", "Neo/TD"], budget: "900–1 300€ coloc; 1 500–2 300€ studio.", housing: "Kitsilano, Mount Pleasant.", admin: "MSP + permis étude.", transport: "TransLink + SkyTrain.", tips: ["Pluie fréquente", "Randos superbes"] },
      en: { name: "Vancouver", intro: "Nature & tech, pricey.", quick: ["Compass", "Craigslist/FB", "MSP BC", "Neo/TD"], budget: "€900–1,300 share; €1,500–2,300 studio.", housing: "Kitsilano, Mount Pleasant.", admin: "MSP + study permit.", transport: "TransLink/SkyTrain.", tips: ["Lots of rain", "Amazing hikes"] }
    }
  },
  { slug: "new-york", country: "USA", continent: "North America", coords: [40.7128, -74.0060],
    cover: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1600",
    content: {
      fr: { name: "New York", intro: "Intense et chère, opportunités infinies.", quick: ["MTA", "StreetEasy/Roomi", "SSN (si éligible)", "Chase/Revolut"], budget: "1 200–1 900$ coloc; 2 000–3 200$ studio.", housing: "Brooklyn (Bushwick, Williamsburg), Queens (Astoria).", admin: "Visa F-1/J-1 selon cas.", transport: "MTA 24/7; CitiBike.", tips: ["Scams fréquents", "Coûts cachés (broker fee)"] },
      en: { name: "New York", intro: "Intense & pricey, endless opportunities.", quick: ["MTA", "StreetEasy/Roomi", "SSN (if eligible)", "Chase/Revolut"], budget: "$1,200–1,900 share; $2,000–3,200 studio.", housing: "Brooklyn (Bushwick/Williamsburg), Queens (Astoria).", admin: "F-1/J-1 visa.", transport: "MTA 24/7; CitiBike.", tips: ["Common scams", "Broker fees"] }
    }
  },
  { slug: "boston", country: "USA", continent: "North America", coords: [42.3601, -71.0589],
    cover: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1600",
    content: {
      fr: { name: "Boston", intro: "Capitale universitaire US.", quick: ["CharlieCard", "Zillow/FB", "SSN (si éligible)", "BoA/Chase"], budget: "1 000–1 600$ coloc; 1 800–2 800$ studio.", housing: "Allston, Cambridge, Somerville.", admin: "F-1/J-1; I-20/DS-2019.", transport: "MBTA; vélo Hubway.", tips: ["Hiver froid", "Logements anciens"] },
      en: { name: "Boston", intro: "US university capital.", quick: ["CharlieCard", "Zillow/FB", "SSN (if eligible)", "BoA/Chase"], budget: "$1,000–1,600 share; $1,800–2,800 studio.", housing: "Allston, Cambridge, Somerville.", admin: "F-1/J-1; I-20/DS-2019.", transport: "MBTA; bikes.", tips: ["Cold winters", "Older buildings"] }
    }
  },
  // SOUTH AMERICA (4)
  { slug: "mexico-city", country: "Mexico", continent: "South America", coords: [19.4326, -99.1332],
    cover: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=1600",
    content: {
      fr: { name: "Mexico", intro: "Immense et culturelle.", quick: ["eSIM Airalo", "Inmuebles24/FB", "BBVA/Santander", "Apps taxis"], budget: "600–900€ coloc; 900–1 300€ studio.", housing: "Roma, Condesa, Coyoacán.", admin: "Visa étudiant, carte de résidence selon durée.", transport: "Metro + Metrobús; Uber/DiDi.", tips: ["Eau en bouteille", "Évite taxis de rue"] },
      en: { name: "Mexico City", intro: "Huge & cultural.", quick: ["Airalo eSIM", "Inmuebles24/FB", "BBVA/Santander", "Ride-hailing"], budget: "€600–900 share; €900–1,300 studio.", housing: "Roma, Condesa, Coyoacán.", admin: "Student visa / temporary residence.", transport: "Metro/Metrobús; Uber/DiDi.", tips: ["Drink bottled water", "Avoid street taxis"] }
    }
  },
  { slug: "buenos-aires", country: "Argentina", continent: "South America", coords: [-34.6037, -58.3816],
    cover: "https://images.unsplash.com/photo-1544986581-efac024faf62?q=80&w=1600",
    content: {
      fr: { name: "Buenos Aires", intro: "Culture, tango, vie nocturne.", quick: ["SUBE", "Zonaprop/Alquiler", "DNI (si long séjour)", "eSIM"], budget: "400–700€ coloc; 700–1 000€ studio.", housing: "Palermo, Recoleta, Belgrano.", admin: "Visa étudiant écoles locales.", transport: "SUBE bus/metro; vélos Ecobici.", tips: ["Taux de change: carte/blue rate", "Sécurité variable par quartier"] },
      en: { name: "Buenos Aires", intro: "Culture, tango, nightlife.", quick: ["SUBE", "Zonaprop", "DNI (long stay)", "eSIM"], budget: "€400–700 share; €700–1,000 studio.", housing: "Palermo, Recoleta, Belgrano.", admin: "Student visa.", transport: "SUBE buses/metro; Ecobici.", tips: ["Currency quirks", "Safety varies"] }
    }
  },
  { slug: "santiago", country: "Chile", continent: "South America", coords: [-33.4489, -70.6693],
    cover: "https://images.unsplash.com/photo-1537225228614-a05f05259e5b?q=80&w=1600",
    content: {
      fr: { name: "Santiago", intro: "Moderne, sûre, proche Andes.", quick: ["Bip!", "Portalinmobiliario", "RUT", "BancoEstado"], budget: "500–800€ coloc; 800–1 200€ studio.", housing: "Providencia, Ñuñoa, Las Condes.", admin: "RUT utile.", transport: "Metro efficace.", tips: ["Pollution saisonnière", "Randos proches"] },
      en: { name: "Santiago", intro: "Modern, safe, near Andes.", quick: ["Bip!", "Portalinmobiliario", "RUT", "BancoEstado"], budget: "€500–800 share; €800–1,200 studio.", housing: "Providencia, Ñuñoa, Las Condes.", admin: "Get RUT.", transport: "Efficient metro.", tips: ["Seasonal smog", "Great hikes nearby"] }
    }
  },
  { slug: "rio", country: "Brazil", continent: "South America", coords: [-22.9068, -43.1729],
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600",
    content: {
      fr: { name: "Rio de Janeiro", intro: "Mer, montagnes, contrastes.", quick: ["Riocard", "QuintoAndar", "CPF", "Nubank"], budget: "400–700€ coloc; 700–1 100€ studio.", housing: "Ipanema, Botafogo, Flamengo.", admin: "CPF utile.", transport: "Metro + BRT.", tips: ["Sécurité: prudence", "Chaleur humide"] },
      en: { name: "Rio de Janeiro", intro: "Sea, mountains, contrasts.", quick: ["Riocard", "QuintoAndar", "CPF", "Nubank"], budget: "€400–700 share; €700–1,100 studio.", housing: "Ipanema, Botafogo, Flamengo.", admin: "Get CPF.", transport: "Metro + BRT.", tips: ["Mind safety", "Humid heat"] }
    }
  },
  // ASIA (6)
  { slug: "tokyo", country: "Japan", continent: "Asia", coords: [35.6762, 139.6503],
    cover: "https://images.unsplash.com/photo-1518544801976-3e188ea7f525?q=80&w=1600",
    content: {
      fr: { name: "Tokyo", intro: "Ultra organisée, sûre.", quick: ["Suica/PASMO", "Sakura House/Leopalace", "Residence Card", "eSIM"], budget: "700–1 100€ coloc; 1 200–2 000€ studio.", housing: "Share houses pratiques.", admin: "Residence Card + MyNumber.", transport: "JR/Metro impeccables.", tips: ["Petits logements", "Espèces parfois utiles"] },
      en: { name: "Tokyo", intro: "Ultra organized & safe.", quick: ["Suica/PASMO", "Sakura House/Leopalace", "Residence Card", "eSIM"], budget: "€700–1,100 share; €1,200–2,000 studio.", housing: "Share houses convenient.", admin: "Residence Card + MyNumber.", transport: "JR/Metro reliable.", tips: ["Small apartments", "Cash sometimes needed"] }
    }
  },
  { slug: "seoul", country: "South Korea", continent: "Asia", coords: [37.5665, 126.9780],
    cover: "https://images.unsplash.com/photo-1519126702943-6b2b27a91605?q=80&w=1600",
    content: {
      fr: { name: "Séoul", intro: "Tech, food, safe.", quick: ["T-Money", "Goshiwon/OneRoom", "Alien Card", "eSIM"], budget: "500–900€ coloc; 900–1 400€ studio.", housing: "Goshiwon = économique.", admin: "Alien Registration Card.", transport: "Subway dense; T-Money.", tips: ["Caution déposée (Jeonse)", "Nuits tardives"] },
      en: { name: "Seoul", intro: "Tech, food, safe.", quick: ["T-Money", "Goshiwon/OneRoom", "Alien Card", "eSIM"], budget: "€500–900 share; €900–1,400 studio.", housing: "Goshiwon = cheap.", admin: "Alien Registration Card.", transport: "Dense subway; T-Money.", tips: ["Deposits (Jeonse)", "Late nights"] }
    }
  },
  { slug: "singapore", country: "Singapore", continent: "Asia", coords: [1.3521, 103.8198],
    cover: "https://images.unsplash.com/photo-1494497102063-5d0553f208c8?q=80&w=1600",
    content: {
      fr: { name: "Singapour", intro: "Très sûre, chère.", quick: ["EZ-Link", "HDB/Condo rooms", "Pass étudiant", "eSIM"], budget: "800–1 300€ coloc; 1 400–2 400€ studio.", housing: "HDB rooms, condos partagés.", admin: "Student Pass.", transport: "MRT impeccable.", tips: ["Clim nécessaire", "Règles strictes (amendes)"] },
      en: { name: "Singapore", intro: "Very safe, pricey.", quick: ["EZ-Link", "HDB/Condo rooms", "Student Pass", "eSIM"], budget: "€800–1,300 share; €1,400–2,400 studio.", housing: "HDB rooms, shared condos.", admin: "Student Pass.", transport: "MRT clean & fast.", tips: ["AC needed", "Strict rules (fines)"] }
    }
  },
  { slug: "bangkok", country: "Thailand", continent: "Asia", coords: [13.7563, 100.5018],
    cover: "https://images.unsplash.com/photo-1519121788453-07b1b8c1ed59?q=80&w=1600",
    content: {
      fr: { name: "Bangkok", intro: "Vie abordable, street food.", quick: ["Rabbit Card", "Hipflat/FB", "Visa ED", "eSIM"], budget: "300–600€ coloc; 600–900€ studio.", housing: "Ari, Phaya Thai, Thonglor.", admin: "Visa étudiant ED.", transport: "BTS/MRT + motos-taxis.", tips: ["Chaleur humide", "Embouteillages"] },
      en: { name: "Bangkok", intro: "Affordable, amazing food.", quick: ["Rabbit Card", "Hipflat/FB", "ED Visa", "eSIM"], budget: "€300–600 share; €600–900 studio.", housing: "Ari, Phaya Thai, Thonglor.", admin: "ED student visa.", transport: "BTS/MRT; moto taxis.", tips: ["Humid heat", "Traffic jams"] }
    }
  },
  { slug: "hong-kong", country: "Hong Kong", continent: "Asia", coords: [22.3193, 114.1694],
    cover: "https://images.unsplash.com/photo-1526481280698-8fcc13fd12a5?q=80&w=1600",
    content: {
      fr: { name: "Hong Kong", intro: "Densité, vue, transports top.", quick: ["Octopus", "Scape/Uni halls", "Visa étudiant", "eSIM"], budget: "900–1 400€ coloc; 1 600–2 600€ studio.", housing: "Kowloon, New Territories (moins cher).", admin: "Student visa + permis.", transport: "MTR rapide.", tips: ["Petits espaces", "Humidité élevée"] },
      en: { name: "Hong Kong", intro: "Dense, scenic, great transit.", quick: ["Octopus", "Scape/Uni halls", "Student visa", "eSIM"], budget: "€900–1,400 share; €1,600–2,600 studio.", housing: "Kowloon, New Territories (cheaper).", admin: "Student visa.", transport: "MTR fast.", tips: ["Tiny flats", "Very humid"] }
    }
  },
  { slug: "shanghai", country: "China", continent: "Asia", coords: [31.2304, 121.4737],
    cover: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600",
    content: {
      fr: { name: "Shanghai", intro: "Moderne, internationale.", quick: ["Transport Card", "Ziroom/Anjuke", "Visa X1/X2", "eSIM"], budget: "500–800€ coloc; 900–1 400€ studio.", housing: "Jing'an, Xuhui, Yangpu.", admin: "Enregistrement PSB.", transport: "Métro dense.", tips: ["VPN utile", "Pollution variable"] },
      en: { name: "Shanghai", intro: "Modern, international.", quick: ["Transport Card", "Ziroom/Anjuke", "X1/X2 visa", "eSIM"], budget: "€500–800 share; €900–1,400 studio.", housing: "Jing'an, Xuhui, Yangpu.", admin: "PSB registration.", transport: "Dense metro.", tips: ["VPN useful", "Variable pollution"] }
    }
  },
  // AFRICA (3)
  { slug: "casablanca", country: "Morocco", continent: "Africa", coords: [33.5731, -7.5898],
    cover: "https://images.unsplash.com/photo-1564325724739-bae0bd08762a?q=80&w=1600",
    content: {
      fr: { name: "Casablanca", intro: "Économique, hub business.", quick: ["Casa Tram", "Avito", "Carte SIM locale", "Attijari/CIH"], budget: "300–500€ coloc; 500–800€ studio.", housing: "Maarif, Gauthier, Anfa.", admin: "Carte séjour si long séjour.", transport: "Tram + taxis.", tips: ["Négociation fréquente", "Langues FR/AR"], },
      en: { name: "Casablanca", intro: "Economical, business hub.", quick: ["Casa Tram", "Avito", "Local SIM", "Attijari/CIH"], budget: "€300–500 share; €500–800 studio.", housing: "Maarif, Gauthier, Anfa.", admin: "Residence card if long stay.", transport: "Tram + taxis.", tips: ["Negotiate often", "FR/AR languages"], }
    }
  },
  { slug: "cape-town", country: "South Africa", continent: "Africa", coords: [-33.9249, 18.4241],
    cover: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600",
    content: {
      fr: { name: "Le Cap", intro: "Nature époustouflante.", quick: ["MyCiTi", "Property24/Gumtree", "SIM locale", "FNB"], budget: "400–700€ coloc; 700–1 100€ studio.", housing: "Observatory, Gardens, Sea Point.", admin: "Visa étudiant.", transport: "MyCiTi + VTC.", tips: ["Sécurité: rester vigilant", "Eau/électricité variables"] },
      en: { name: "Cape Town", intro: "Stunning nature.", quick: ["MyCiTi", "Property24/Gumtree", "Local SIM", "FNB"], budget: "€400–700 share; €700–1,100 studio.", housing: "Observatory, Gardens, Sea Point.", admin: "Student visa.", transport: "MyCiTi + ride-hailing.", tips: ["Mind safety", "Load shedding"] }
    }
  },
  { slug: "tunis", country: "Tunisia", continent: "Africa", coords: [36.8065, 10.1815],
    cover: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=1600",
    content: {
      fr: { name: "Tunis", intro: "Abordable, Méditerranée.", quick: ["Transtu", "Tayara/FB", "SIM locale", "BIAT"], budget: "250–450€ coloc; 450–700€ studio.", housing: "Lac, La Marsa, El Menzah.", admin: "Visa selon nationalité.", transport: "Bus/métro léger; taxis bon marché.", tips: ["Négocie les loyers", "Climat doux"] },
      en: { name: "Tunis", intro: "Affordable, Mediterranean.", quick: ["Transtu", "Tayara/FB", "Local SIM", "BIAT"], budget: "€250–450 share; €450–700 studio.", housing: "Lac, La Marsa, El Menzah.", admin: "Visa depending nationality.", transport: "Buses/light metro; cheap taxis.", tips: ["Negotiate rents", "Mild climate"] }
    }
  }
]

