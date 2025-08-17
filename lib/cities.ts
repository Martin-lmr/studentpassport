export type Budget = {
  food_per_month_eur: number;      // nourriture mensuelle (courses étudiant)
  housing_flatshare_eur: number;   // loyer en colocation (mois)
  transport_pass_eur: number;      // abonnement transport (mois)
  beer_pub_eur: number;            // bière en bar
  cinema_eur: number;              // billet de cinéma
};

export type CityContent = {
  fr: {
    name: string;
    description2: string; // 2 phrases
    neighborhoods: string[]; // quartiers sympas
    housing_howto: string;   // où/comment trouver un logement
    tips: string[];          // autres infos pertinentes
  };
  en: CityContent["fr"]; // pour MVP : on duplique le FR ; tu pourras traduire plus tard
};

export type City = {
  slug: string;
  continent: "Europe" | "Americas" | "Asia" | "Oceania" | "Africa";
  country: string;
  timeZone: string; // IANA time zone (ex: "Europe/Paris")
  coords: [number, number];
  cover: string; // photo URL
  budget: Budget;
  content: CityContent;
};

// Helper pour créer vite la section "housing_howto"
const defaultSites = (sites: string[]) =>
  `Logement : ${sites.join(", ")}. Rejoins aussi les groupes Facebook d'étudiants et regarde les boards des écoles.`;

export const cities: City[] = [
  // ==== EUROPE (16) ====
  {
    slug: "paris",
    continent: "Europe",
    country: "France",
    timeZone: "Europe/Paris",
    coords: [48.8566, 2.3522],
    cover: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1600",
    budget: { food_per_month_eur: 300, housing_flatshare_eur: 850, transport_pass_eur: 30, beer_pub_eur: 7, cinema_eur: 12 },
    content: {
      fr: {
        name: "Paris",
        description2:
          "Ville-musée et hub étudiant, tout est à portée de métro et de vélo. La vie est chère mais les réductions étudiantes sont nombreuses.",
        neighborhoods: ["11e Oberkampf", "Canal Saint-Martin", "Butte-aux-Cailles", "Batignolles"],
        housing_howto: defaultSites(["leboncoin", "SeLoger", "PAP", "Studapart"]),
        tips: [
          "Passe Navigo Jeune / ImaginR pour réduire le coût des transports",
          "APL via la CAF si bail et logement éligibles",
        ],
      },
      en: {
        name: "Paris",
        description2:
          "Open-air museum and student hub; metro and bikes take you everywhere. Costly city but tons of student discounts.",
        neighborhoods: ["11th Oberkampf", "Canal Saint-Martin", "Butte-aux-Cailles", "Batignolles"],
        housing_howto: "Housing: leboncoin, SeLoger, PAP, Studapart. Also check FB student groups and school boards.",
        tips: ["Navigo Jeune/ImaginR discount", "CAF housing aid (APL) if eligible"],
      },
    },
  },
  {
    slug: "lyon",
    continent: "Europe",
    country: "France",
    timeZone: "Europe/Paris",
    coords: [45.764, 4.8357],
    cover: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600",
    budget: { food_per_month_eur: 260, housing_flatshare_eur: 600, transport_pass_eur: 25, beer_pub_eur: 6, cinema_eur: 10 },
    content: {
      fr: {
        name: "Lyon",
        description2:
          "Capitale gourmande et étudiante, à taille humaine, parfaitement connectée. Bons plans logement autour de Guillotière et Croix-Rousse.",
        neighborhoods: ["Guillotière", "Croix-Rousse", "Saxe-Gambetta", "Confluence"],
        housing_howto: defaultSites(["leboncoin", "SeLoger", "LocService", "Studapart"]),
        tips: ["Vélo'v pratique et économique", "Nombreux restos étudiants à midi"],
      },
      en: {
        name: "Lyon",
        description2:
          "Food capital with a student vibe and human scale. Great areas in Guillotière and Croix-Rousse.",
        neighborhoods: ["Guillotière", "Croix-Rousse", "Saxe-Gambetta", "Confluence"],
        housing_howto: "Housing: leboncoin, SeLoger, LocService, Studapart.",
        tips: ["Bike sharing (Vélo'v)", "Plenty of cheap lunch menus"],
      },
    },
  },
  {
    slug: "bordeaux",
    continent: "Europe",
    country: "France",
    timeZone: "Europe/Paris",
    coords: [44.8378, -0.5792],
    cover: "https://images.unsplash.com/photo-1548786811-dd3cfce93345?q=80&w=1600",
    budget: { food_per_month_eur: 250, housing_flatshare_eur: 550, transport_pass_eur: 30, beer_pub_eur: 6, cinema_eur: 10 },
    content: {
      fr: {
        name: "Bordeaux",
        description2:
          "Ville élégante entre océan et vignes. Transports fluides en tram, vie étudiante concentrée autour de Victoire et Chartrons.",
        neighborhoods: ["Saint-Michel", "Victoire", "Chartrons", "Bacalan"],
        housing_howto: defaultSites(["leboncoin", "SeLoger", "PAP", "Studapart"]),
        tips: ["Bons plans surf à Lacanau le week-end", "Beaucoup de colocations"],
      },
      en: {
        name: "Bordeaux",
        description2:
          "Elegant city between ocean and vineyards. Trams are efficient; student life around Victoire and Chartrons.",
        neighborhoods: ["Saint-Michel", "Victoire", "Chartrons", "Bacalan"],
        housing_howto: "Housing: leboncoin, SeLoger, PAP, Studapart.",
        tips: ["Surf trips to Lacanau", "Many flat-shares available"],
      },
    },
  },
  {
    slug: "london",
    continent: "Europe",
    country: "United Kingdom",
    timeZone: "Europe/London",
    coords: [51.5072, -0.1276],
    cover: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600",
    budget: { food_per_month_eur: 320, housing_flatshare_eur: 1100, transport_pass_eur: 180, beer_pub_eur: 7.5, cinema_eur: 15 },
    content: {
      fr: {
        name: "Londres",
        description2:
          "Énorme terrain de jeu culturel et pro. Vie chère, mais opportunités infinies et scènes étudiantes partout.",
        neighborhoods: ["Shoreditch", "Camden", "Brixton", "Clapham"],
        housing_howto: defaultSites(["Spareroom", "Rightmove", "Zoopla", "Gumtree"]),
        tips: ["Oyster / contactless pour transports", "Regarde les council tax rules en colocation"],
      },
      en: {
        name: "London",
        description2:
          "Massive cultural and professional hub. Expensive, but opportunities are endless.",
        neighborhoods: ["Shoreditch", "Camden", "Brixton", "Clapham"],
        housing_howto: "Housing: Spareroom, Rightmove, Zoopla, Gumtree.",
        tips: ["Oyster/contactless for transport", "Check council tax for flat-shares"],
      },
    },
  },
  {
    slug: "dublin",
    continent: "Europe",
    country: "Ireland",
    timeZone: "Europe/Dublin",
    coords: [53.3498, -6.2603],
    cover: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=1600",
    budget: { food_per_month_eur: 320, housing_flatshare_eur: 950, transport_pass_eur: 120, beer_pub_eur: 6.5, cinema_eur: 12 },
    content: {
      fr: {
        name: "Dublin",
        description2:
          "Ville tech & cosy, ambiance pubs et musique live. Logement tendu, anticipe les recherches.",
        neighborhoods: ["Rathmines", "Phibsborough", "Portobello", "Drumcondra"],
        housing_howto: defaultSites(["Daft.ie", "Rent.ie", "Facebook Groups"]),
        tips: ["Leap Card pour transports", "Prévois un budget chauffage en hiver"],
      },
      en: {
        name: "Dublin",
        description2:
          "Tech-friendly and cosy, pubs and live music everywhere. Tight housing market—start early.",
        neighborhoods: ["Rathmines", "Phibsborough", "Portobello", "Drumcondra"],
        housing_howto: "Housing: Daft.ie, Rent.ie, FB groups.",
        tips: ["Get a Leap Card", "Heating costs are real in winter"],
      },
    },
  },
  {
    slug: "madrid",
    continent: "Europe",
    country: "Spain",
    timeZone: "Europe/Madrid",
    coords: [40.4168, -3.7038],
    cover: "https://images.unsplash.com/photo-1520697517317-22a31b91e7d9?q=80&w=1600",
    budget: { food_per_month_eur: 260, housing_flatshare_eur: 600, transport_pass_eur: 30, beer_pub_eur: 3, cinema_eur: 9 },
    content: {
      fr: {
        name: "Madrid",
        description2:
          "Ambiance chaleureuse et coûts modérés. Tapas, soleil et excellent réseau de métro.",
        neighborhoods: ["Malasaña", "Chamberí", "Lavapiés", "La Latina"],
        housing_howto: defaultSites(["Idealista", "Badi", "Spotahome"]),
        tips: ["Abono Joven pour transports illimités", "Clim indispensable l’été"],
      },
      en: {
        name: "Madrid",
        description2:
          "Warm vibe and moderate costs. Tapas, sun, and a great metro.",
        neighborhoods: ["Malasaña", "Chamberí", "Lavapiés", "La Latina"],
        housing_howto: "Housing: Idealista, Badi, Spotahome.",
        tips: ["Abono Joven unlimited transport", "Aircon matters in summer"],
      },
    },
  },
  {
    slug: "barcelona",
    continent: "Europe",
    country: "Spain",
    timeZone: "Europe/Madrid",
    coords: [41.3874, 2.1686],
    cover: "https://images.unsplash.com/photo-1508051123996-69f8caf4891e?q=80&w=1600",
    budget: { food_per_month_eur: 260, housing_flatshare_eur: 650, transport_pass_eur: 25, beer_pub_eur: 3, cinema_eur: 9 },
    content: {
      fr: {
        name: "Barcelone",
        description2:
          "Mer, soleil, design et start-ups. Quartiers étudiants autour de Gràcia et Poblenou.",
        neighborhoods: ["Gràcia", "Poblenou", "Eixample", "Sant Antoni"],
        housing_howto: defaultSites(["Idealista", "Badi", "Spotahome"]),
        tips: ["Attention aux pickpockets dans les zones touristiques", "Beaucoup de colivings"],
      },
      en: {
        name: "Barcelona",
        description2:
          "Sea, sun, design and start-ups. Student areas around Gràcia and Poblenou.",
        neighborhoods: ["Gràcia", "Poblenou", "Eixample", "Sant Antoni"],
        housing_howto: "Housing: Idealista, Badi, Spotahome.",
        tips: ["Beware of pickpockets", "Plenty of colivings"],
      },
    },
  },
  {
    slug: "lisbon",
    continent: "Europe",
    country: "Portugal",
    timeZone: "Europe/Lisbon",
    coords: [38.7223, -9.1393],
    cover: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600",
    budget: { food_per_month_eur: 250, housing_flatshare_eur: 600, transport_pass_eur: 40, beer_pub_eur: 2.5, cinema_eur: 8 },
    content: {
      fr: {
        name: "Lisbonne",
        description2:
          "Lumière dorée, plages proches et food scene cool. Colline + tram + surf = lifestyle.",
        neighborhoods: ["Alfama", "Graça", "Estrela", "Campo de Ourique"],
        housing_howto: defaultSites(["Idealista", "Uniplaces", "Spotahome"]),
        tips: ["Lisboa Viva card pour transports", "Fais attention aux pentes !"],
      },
      en: {
        name: "Lisbon",
        description2:
          "Golden light, nearby beaches and cool food scene. Hills + trams + surf lifestyle.",
        neighborhoods: ["Alfama", "Graça", "Estrela", "Campo de Ourique"],
        housing_howto: "Housing: Idealista, Uniplaces, Spotahome.",
        tips: ["Lisboa Viva transport card", "Mind the hills!"],
      },
    },
  },
  {
    slug: "milan",
    continent: "Europe",
    country: "Italy",
    timeZone: "Europe/Rome",
    coords: [45.4642, 9.19],
    cover: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600",
    budget: { food_per_month_eur: 270, housing_flatshare_eur: 750, transport_pass_eur: 22, beer_pub_eur: 5.5, cinema_eur: 9 },
    content: {
      fr: {
        name: "Milan",
        description2:
          "Capitale design & business. Réseau ATM efficace, vie étudiante à Città Studi et Navigli.",
        neighborhoods: ["Città Studi", "Navigli", "Porta Romana", "Isola"],
        housing_howto: defaultSites(["Spotahome", "Uniplaces", "Idealista"]),
        tips: ["Codice Fiscale utile pour contrats", "Valide toujours ton ticket"],
      },
      en: {
        name: "Milan",
        description2:
          "Design & business capital. Efficient ATM network, student life in Città Studi and Navigli.",
        neighborhoods: ["Città Studi", "Navigli", "Porta Romana", "Isola"],
        housing_howto: "Housing: Spotahome, Uniplaces, Idealista.",
        tips: ["Codice Fiscale for contracts", "Always validate tickets"],
      },
    },
  },
  {
    slug: "rome",
    continent: "Europe",
    country: "Italy",
    timeZone: "Europe/Rome",
    coords: [41.9028, 12.4964],
    cover: "https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1600",
    budget: { food_per_month_eur: 260, housing_flatshare_eur: 650, transport_pass_eur: 35, beer_pub_eur: 5, cinema_eur: 8 },
    content: {
      fr: {
        name: "Rome",
        description2:
          "Histoire à chaque coin de rue et dolce vita. Logements étudiants autour de San Lorenzo et Trastevere.",
        neighborhoods: ["San Lorenzo", "Trastevere", "Monti", "Testaccio"],
        housing_howto: defaultSites(["Idealista", "Uniplaces", "Spotahome"]),
        tips: ["La chaleur l’été : vise des appartements ventilés", "Transports plus lents qu’au nord"],
      },
      en: {
        name: "Rome",
        description2:
          "History at every corner and dolce vita. Student flats around San Lorenzo and Trastevere.",
        neighborhoods: ["San Lorenzo", "Trastevere", "Monti", "Testaccio"],
        housing_howto: "Housing: Idealista, Uniplaces, Spotahome.",
        tips: ["Hot summers—seek ventilation", "Transit slower than northern cities"],
      },
    },
  },
  {
    slug: "berlin",
    continent: "Europe",
    country: "Germany",
    timeZone: "Europe/Berlin",
    coords: [52.52, 13.405],
    cover: "https://images.unsplash.com/photo-1526481280698-8fcc13fd3b1d?q=80&w=1600",
    budget: { food_per_month_eur: 260, housing_flatshare_eur: 700, transport_pass_eur: 49, beer_pub_eur: 4.5, cinema_eur: 10 },
    content: {
      fr: {
        name: "Berlin",
        description2:
          "Créative et alternative, mais le logement s’est tendu. Très bon réseau vélo et U-Bahn.",
        neighborhoods: ["Kreuzberg", "Neukölln", "Friedrichshain", "Prenzlauer Berg"],
        housing_howto: defaultSites(["WG-Gesucht", "Immobilienscout24"]),
        tips: ["Inscription (Anmeldung) pour démarches", "Vélo très pratique"],
      },
      en: {
        name: "Berlin",
        description2:
          "Creative and alternative, housing got tighter. Great cycling and U-Bahn.",
        neighborhoods: ["Kreuzberg", "Neukölln", "Friedrichshain", "Prenzlauer Berg"],
        housing_howto: "Housing: WG-Gesucht, Immobilienscout24.",
        tips: ["Do Anmeldung early", "Bike-friendly city"],
      },
    },
  },
  {
    slug: "munich",
    continent: "Europe",
    country: "Germany",
    timeZone: "Europe/Berlin",
    coords: [48.1372, 11.5756],
    cover: "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1600",
    budget: { food_per_month_eur: 280, housing_flatshare_eur: 900, transport_pass_eur: 59, beer_pub_eur: 5.5, cinema_eur: 12 },
    content: {
      fr: {
        name: "Munich",
        description2:
          "Propre, sûre et sportive, avec salaires étudiants souvent corrects. Logement cher, anticipe.",
        neighborhoods: ["Maxvorstadt", "Schwabing", "Glockenbach", "Haidhausen"],
        housing_howto: defaultSites(["WG-Gesucht", "Immobilienscout24"]),
        tips: ["Parcs superbes (Englischer Garten)", "Transports fiables"],
      },
      en: {
        name: "Munich",
        description2:
          "Clean, safe and sporty; student jobs often pay well. Housing is pricey—start early.",
        neighborhoods: ["Maxvorstadt", "Schwabing", "Glockenbach", "Haidhausen"],
        housing_howto: "Housing: WG-Gesucht, Immobilienscout24.",
        tips: ["Beautiful parks", "Reliable transit"],
      },
    },
  },
  {
    slug: "amsterdam",
    continent: "Europe",
    country: "Netherlands",
    timeZone: "Europe/Amsterdam",
    coords: [52.3676, 4.9041],
    cover: "https://images.unsplash.com/photo-1521207418485-99c705420785?q=80&w=1600",
    budget: { food_per_month_eur: 300, housing_flatshare_eur: 900, transport_pass_eur: 60, beer_pub_eur: 6, cinema_eur: 13 },
    content: {
      fr: {
        name: "Amsterdam",
        description2:
          "Canaux, vélos et scène internationale. Le logement est la vraie difficulté.",
        neighborhoods: ["De Pijp", "Oud-West", "Indische Buurt", "Jordaan"],
        housing_howto: defaultSites(["Kamer.nl", "Pararius", "Funda"]),
        tips: ["Vélo indispensable", "Fortes demandes pour les chambres"],
      },
      en: {
        name: "Amsterdam",
        description2:
          "Canals, bikes and international vibe. Housing is the hard part.",
        neighborhoods: ["De Pijp", "Oud-West", "Indische Buurt", "Jordaan"],
        housing_howto: "Housing: Kamer.nl, Pararius, Funda.",
        tips: ["Bike is essential", "High demand for rooms"],
      },
    },
  },
  {
    slug: "copenhagen",
    continent: "Europe",
    country: "Denmark",
    timeZone: "Europe/Copenhagen",
    coords: [55.6761, 12.5683],
    cover: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?q=80&w=1600",
    budget: { food_per_month_eur: 330, housing_flatshare_eur: 900, transport_pass_eur: 65, beer_pub_eur: 7, cinema_eur: 14 },
    content: {
      fr: {
        name: "Copenhague",
        description2:
          "Design, hygge et vélo. Très chère mais qualité de vie top.",
        neighborhoods: ["Nørrebro", "Vesterbro", "Østerbro", "Amager"],
        housing_howto: defaultSites(["BoligPortal", "Facebook Groups"]),
        tips: ["Vélo par tous les temps", "Cartes bancaires très utilisées (cash rare)"],
      },
      en: {
        name: "Copenhagen",
        description2:
          "Design, hygge and bikes. Expensive but excellent quality of life.",
        neighborhoods: ["Nørrebro", "Vesterbro", "Østerbro", "Amager"],
        housing_howto: "Housing: BoligPortal, FB groups.",
        tips: ["Bike in any weather", "Cards over cash"],
      },
    },
  },
  {
    slug: "stockholm",
    continent: "Europe",
    country: "Sweden",
    timeZone: "Europe/Stockholm",
    coords: [59.3293, 18.0686],
    cover: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=1600",
    budget: { food_per_month_eur: 340, housing_flatshare_eur: 850, transport_pass_eur: 80, beer_pub_eur: 7.5, cinema_eur: 15 },
    content: {
      fr: {
        name: "Stockholm",
        description2:
          "Archipel élégant, hiver sombre mais villes étudiantes très actives.",
        neighborhoods: ["Södermalm", "Vasastan", "Kungsholmen", "Östermalm (cher)"],
        housing_howto: defaultSites(["Blocket Bostad", "SSSB (étudiants)"]),
        tips: ["Budget vêtements d’hiver", "Bons salaires étudiants possibles"],
      },
      en: {
        name: "Stockholm",
        description2:
          "Elegant archipelago; dark winters but lively student life.",
        neighborhoods: ["Södermalm", "Vasastan", "Kungsholmen", "Östermalm (expensive)"],
        housing_howto: "Housing: Blocket Bostad, SSSB.",
        tips: ["Winter clothing", "Good student wages possible"],
      },
    },
  },
  {
    slug: "prague",
    continent: "Europe",
    country: "Czech Republic",
    timeZone: "Europe/Prague",
    coords: [50.0755, 14.4378],
    cover: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600",
    budget: { food_per_month_eur: 230, housing_flatshare_eur: 500, transport_pass_eur: 22, beer_pub_eur: 2.5, cinema_eur: 7 },
    content: {
      fr: {
        name: "Prague",
        description2:
          "Beaux bâtiments, coûts modérés, excellente bière. Très populaire pour les échanges.",
        neighborhoods: ["Vinohrady", "Žižkov", "Holešovice", "Karlín"],
        housing_howto: defaultSites(["Sreality", "Flatio", "Bezrealitky"]),
        tips: ["Transports bon marché", "Ville sûre"],
      },
      en: {
        name: "Prague",
        description2:
          "Beautiful architecture, moderate costs, excellent beer. Erasmus favorite.",
        neighborhoods: ["Vinohrady", "Žižkov", "Holešovice", "Karlín"],
        housing_howto: "Housing: Sreality, Flatio, Bezrealitky.",
        tips: ["Cheap transport", "Safe city"],
      },
    },
  },

  // ==== AMERICAS (6) ====
  {
    slug: "new-york",
    continent: "Americas",
    country: "USA",
    timeZone: "America/New_York",
    coords: [40.7128, -74.006],
    cover: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600",
    budget: { food_per_month_eur: 380, housing_flatshare_eur: 1300, transport_pass_eur: 125, beer_pub_eur: 8, cinema_eur: 17 },
    content: {
      fr: {
        name: "New York",
        description2:
          "Énergie non-stop et opportunités à chaque coin de rue. Logement très cher, mais la ville se découvre à pied et en métro.",
        neighborhoods: ["Williamsburg", "Astoria", "Harlem", "Lower East Side"],
        housing_howto: defaultSites(["StreetEasy", "Craigslist", "Facebook Housing NYC"]),
        tips: ["MetroCard mensuelle", "Frais d’agence fréquents"],
      },
      en: {
        name: "New York",
        description2:
          "Non-stop energy and opportunities everywhere. Housing is pricey; walk and subway rule.",
        neighborhoods: ["Williamsburg", "Astoria", "Harlem", "Lower East Side"],
        housing_howto: "Housing: StreetEasy, Craigslist, FB groups.",
        tips: ["Monthly MetroCard", "Broker fees are common"],
      },
    },
  },
  {
    slug: "montreal",
    continent: "Americas",
    country: "Canada",
    timeZone: "America/Toronto",
    coords: [45.5017, -73.5673],
    cover: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1600",
    budget: { food_per_month_eur: 300, housing_flatshare_eur: 700, transport_pass_eur: 70, beer_pub_eur: 6, cinema_eur: 11 },
    content: {
      fr: {
        name: "Montréal",
        description2:
          "Bilingue, culturelle et étudiante. Hiver rude mais qualité de vie top.",
        neighborhoods: ["Plateau", "Rosemont", "Verdun", "Mile-End"],
        housing_howto: defaultSites(["Kijiji", "Facebook Marketplace", "Rentals.ca"]),
        tips: ["Prévois des vêtements -20°C", "Réseau souterrain pratique l’hiver"],
      },
      en: {
        name: "Montreal",
        description2:
          "Bilingual, cultural and student-friendly. Cold winters, high quality of life.",
        neighborhoods: ["Plateau", "Rosemont", "Verdun", "Mile-End"],
        housing_howto: "Housing: Kijiji, FB Marketplace, Rentals.ca.",
        tips: ["Winter gear matters", "Underground city is handy"],
      },
    },
  },
  {
    slug: "mexico-city",
    continent: "Americas",
    country: "Mexico",
    timeZone: "America/Mexico_City",
    coords: [19.4326, -99.1332],
    cover: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=1600",
    budget: { food_per_month_eur: 220, housing_flatshare_eur: 450, transport_pass_eur: 20, beer_pub_eur: 2.5, cinema_eur: 5 },
    content: {
      fr: {
        name: "Mexico",
        description2:
          "Immense et culturelle, quartiers étudiants à Roma/Condesa/Coyoacán. Cuisine incroyable.",
        neighborhoods: ["Roma", "Condesa", "Coyoacán", "Polanco (cher)"],
        housing_howto: defaultSites(["Inmuebles24", "Vivanuncios", "Facebook Groups"]),
        tips: ["Apps VTC (DiDi, Uber)", "Eau en bouteille uniquement"],
      },
      en: {
        name: "Mexico City",
        description2:
          "Huge and cultural; student areas in Roma/Condesa/Coyoacán. Food scene is stellar.",
        neighborhoods: ["Roma", "Condesa", "Coyoacán", "Polanco (expensive)"],
        housing_howto: "Housing: Inmuebles24, Vivanuncios, FB groups.",
        tips: ["Use ride-hailing apps", "Drink bottled water"],
      },
    },
  },
  {
    slug: "buenos-aires",
    continent: "Americas",
    country: "Argentina",
    timeZone: "America/Argentina/Buenos_Aires",
    coords: [-34.6037, -58.3816],
    cover: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600",
    budget: { food_per_month_eur: 180, housing_flatshare_eur: 350, transport_pass_eur: 12, beer_pub_eur: 2, cinema_eur: 4 },
    content: {
      fr: {
        name: "Buenos Aires",
        description2:
          "Capitale du tango et des cafés. Coûts bas pour les étudiants étrangers, vie nocturne très riche.",
        neighborhoods: ["Palermo", "Recoleta", "Belgrano", "San Telmo"],
        housing_howto: defaultSites(["Zonaprop", "AlquilerArgentina", "Airbnb long terme"]),
        tips: ["Change de devises via canaux officiels", "Transports bon marché"],
      },
      en: {
        name: "Buenos Aires",
        description2:
          "Tango capital with café culture. Low costs for students; vibrant nightlife.",
        neighborhoods: ["Palermo", "Recoleta", "Belgrano", "San Telmo"],
        housing_howto: "Housing: Zonaprop, AlquilerArgentina, long-term Airbnb.",
        tips: ["Official FX channels", "Cheap public transport"],
      },
    },
  },
  {
    slug: "sao-paulo",
    continent: "Americas",
    country: "Brazil",
    timeZone: "America/Sao_Paulo",
    coords: [-23.5505, -46.6333],
    cover: "https://images.unsplash.com/photo-1559253661-fcfab86f6af8?q=80&w=1600",
    budget: { food_per_month_eur: 220, housing_flatshare_eur: 400, transport_pass_eur: 35, beer_pub_eur: 2.5, cinema_eur: 6 },
    content: {
      fr: {
        name: "São Paulo",
        description2:
          "Mégalopole business et culturelle. Quartiers étudiants autour de Vila Madalena et Pinheiros.",
        neighborhoods: ["Vila Madalena", "Pinheiros", "Bela Vista", "Moema"],
        housing_howto: defaultSites(["QuintoAndar", "VivaReal", "OLX"]),
        tips: ["Apps VTC recommandées", "Évite de montrer des objets de valeur"],
      },
      en: {
        name: "São Paulo",
        description2:
          "Business megacity with rich culture. Student areas in Vila Madalena and Pinheiros.",
        neighborhoods: ["Vila Madalena", "Pinheiros", "Bela Vista", "Moema"],
        housing_howto: "Housing: QuintoAndar, VivaReal, OLX.",
        tips: ["Use ride-hailing", "Avoid showing valuables"],
      },
    },
  },
  {
    slug: "vancouver",
    continent: "Americas",
    country: "Canada",
    timeZone: "America/Vancouver",
    coords: [49.2827, -123.1207],
    cover: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600",
    budget: { food_per_month_eur: 320, housing_flatshare_eur: 900, transport_pass_eur: 75, beer_pub_eur: 7, cinema_eur: 13 },
    content: {
      fr: {
        name: "Vancouver",
        description2:
          "Entre mer et montagnes, nature incroyable. Logement cher, mais qualité de vie élevée.",
        neighborhoods: ["Kitsilano", "Mount Pleasant", "Commercial Drive", "Downtown (cher)"],
        housing_howto: defaultSites(["Craigslist", "Rentals.ca", "Facebook Groups"]),
        tips: ["Pluie fréquente, équipe-toi", "TransLink très fiable"],
      },
      en: {
        name: "Vancouver",
        description2:
          "Between sea and mountains; stunning nature. Expensive housing, high quality of life.",
        neighborhoods: ["Kitsilano", "Mount Pleasant", "Commercial Drive", "Downtown (expensive)"],
        housing_howto: "Housing: Craigslist, Rentals.ca, FB groups.",
        tips: ["Rain gear needed", "Reliable TransLink"],
      },
    },
  },

  // ==== ASIA (5) ====
  {
    slug: "tokyo",
    continent: "Asia",
    country: "Japan",
    timeZone: "Asia/Tokyo",
    coords: [35.6762, 139.6503],
    cover: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1600",
    budget: { food_per_month_eur: 300, housing_flatshare_eur: 700, transport_pass_eur: 60, beer_pub_eur: 4.5, cinema_eur: 12 },
    content: {
      fr: {
        name: "Tokyo",
        description2:
          "Ultramoderne et traditionnelle, sûre et efficace. Petits logements, mais confortables et bien situés.",
        neighborhoods: ["Shinjuku", "Shimokitazawa", "Kichijōji", "Nakameguro"],
        housing_howto: defaultSites(["Sakura House", "Leo Palace", "Suumo"]),
        tips: ["Pas de pourboire", "Transport à l’heure"],
      },
      en: {
        name: "Tokyo",
        description2:
          "Ultra-modern yet traditional, safe and efficient. Small flats but comfy and well located.",
        neighborhoods: ["Shinjuku", "Shimokitazawa", "Kichijōji", "Nakameguro"],
        housing_howto: "Housing: Sakura House, Leo Palace, Suumo.",
        tips: ["No tipping culture", "Punctual transit"],
      },
    },
  },
  {
    slug: "seoul",
    continent: "Asia",
    country: "South Korea",
    timeZone: "Asia/Seoul",
    coords: [37.5665, 126.978],
    cover: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1600",
    budget: { food_per_month_eur: 280, housing_flatshare_eur: 550, transport_pass_eur: 45, beer_pub_eur: 4, cinema_eur: 9 },
    content: {
      fr: {
        name: "Séoul",
        description2:
          "Tech, K-culture et nourriture 24/7. Vie étudiante très dynamique.",
        neighborhoods: ["Hongdae", "Sinchon", "Gangnam", "Itaewon"],
        housing_howto: defaultSites(["Zigbang", "Naver Real Estate", "Goshiwon"]),
        tips: ["Paiement sans cash partout", "Wi-Fi public très présent"],
      },
      en: {
        name: "Seoul",
        description2:
          "Tech, K-culture and 24/7 food. Very dynamic student life.",
        neighborhoods: ["Hongdae", "Sinchon", "Gangnam", "Itaewon"],
        housing_howto: "Housing: Zigbang, Naver Real Estate, Goshiwon.",
        tips: ["Cashless friendly", "Plenty of public Wi-Fi"],
      },
    },
  },
  {
    slug: "singapore",
    continent: "Asia",
    country: "Singapore",
    timeZone: "Asia/Singapore",
    coords: [1.3521, 103.8198],
    cover: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600",
    budget: { food_per_month_eur: 320, housing_flatshare_eur: 900, transport_pass_eur: 60, beer_pub_eur: 8, cinema_eur: 11 },
    content: {
      fr: {
        name: "Singapour",
        description2:
          "Ultra propre et sûre, climat équatorial. Hawker centres = manger bon et pas cher.",
        neighborhoods: ["Tiong Bahru", "Queenstown", "Bugis", "Novena"],
        housing_howto: defaultSites(["PropertyGuru", "99.co", "Facebook Groups"]),
        tips: ["Clim et humidité élevées", "Règles strictes (amendes)"],
      },
      en: {
        name: "Singapore",
        description2:
          "Ultra-clean and safe; equatorial climate. Hawker centres = tasty & cheap.",
        neighborhoods: ["Tiong Bahru", "Queenstown", "Bugis", "Novena"],
        housing_howto: "Housing: PropertyGuru, 99.co, FB groups.",
        tips: ["Hot & humid", "Strict rules (fines)"],
      },
    },
  },
  {
    slug: "bangkok",
    continent: "Asia",
    country: "Thailand",
    timeZone: "Asia/Bangkok",
    coords: [13.7563, 100.5018],
    cover: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1600",
    budget: { food_per_month_eur: 200, housing_flatshare_eur: 350, transport_pass_eur: 30, beer_pub_eur: 2.5, cinema_eur: 6 },
    content: {
      fr: {
        name: "Bangkok",
        description2:
          "Street-food incroyable et vie nocturne animée. Transports aériens (BTS/MRT) efficaces.",
        neighborhoods: ["Ari", "Thonglor", "Ekkamai", "Phrom Phong"],
        housing_howto: defaultSites(["Hipflat", "DDproperty", "Airbnb long terme"]),
        tips: ["Clim bruyante parfois", "Négociation courante pour loyers"],
      },
      en: {
        name: "Bangkok",
        description2:
          "Amazing street-food and lively nightlife. Efficient BTS/MRT.",
        neighborhoods: ["Ari", "Thonglor", "Ekkamai", "Phrom Phong"],
        housing_howto: "Housing: Hipflat, DDproperty, long-term Airbnb.",
        tips: ["AC noise can be common", "Haggling on rent happens"],
      },
    },
  },
  {
    slug: "hong-kong",
    continent: "Asia",
    country: "Hong Kong",
    timeZone: "Asia/Hong_Kong",
    coords: [22.3193, 114.1694],
    cover: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600",
    budget: { food_per_month_eur: 340, housing_flatshare_eur: 1000, transport_pass_eur: 55, beer_pub_eur: 7, cinema_eur: 13 },
    content: {
      fr: {
        name: "Hong Kong",
        description2:
          "Densité folle, vues incroyables, MTR ultra fiable. Studios minuscules mais bien situés.",
        neighborhoods: ["Sheung Wan", "Sai Ying Pun", "TST", "Kowloon Tong"],
        housing_howto: defaultSites(["28Hse", "SquareFoot", "Spacious"]),
        tips: ["Humidité élevée", "Escaliers/échelles dans certains studios"],
      },
      en: {
        name: "Hong Kong",
        description2:
          "Insane density, stunning views, super reliable MTR. Tiny but central studios.",
        neighborhoods: ["Sheung Wan", "Sai Ying Pun", "TST", "Kowloon Tong"],
        housing_howto: "Housing: 28Hse, SquareFoot, Spacious.",
        tips: ["Very humid", "Tiny loft ladders common"],
      },
    },
  },

  // ==== OCEANIA (2) ====
  {
    slug: "sydney",
    continent: "Oceania",
    country: "Australia",
    timeZone: "Australia/Sydney",
    coords: [-33.8688, 151.2093],
    cover: "https://images.unsplash.com/photo-1510745343150-0f2fb9092fd0?q=80&w=1600",
    budget: { food_per_month_eur: 340, housing_flatshare_eur: 900, transport_pass_eur: 120, beer_pub_eur: 7, cinema_eur: 14 },
    content: {
      fr: {
        name: "Sydney",
        description2:
          "Plages, surf et jobs étudiants variés. Coût de la vie élevé mais salaires étudiants souvent bons.",
        neighborhoods: ["Newtown", "Surry Hills", "Manly", "Glebe"],
        housing_howto: defaultSites(["Flatmates.com.au", "Gumtree", "Domain"]),
        tips: ["Soleil fort (crème solaire !)", "Opal Card pour transports"],
      },
      en: {
        name: "Sydney",
        description2:
          "Beaches, surf, and varied student jobs. High cost of living, decent student pay.",
        neighborhoods: ["Newtown", "Surry Hills", "Manly", "Glebe"],
        housing_howto: "Housing: Flatmates.com.au, Gumtree, Domain.",
        tips: ["Strong sun", "Opal Card for transit"],
      },
    },
  },
  {
    slug: "melbourne",
    continent: "Oceania",
    country: "Australia",
    timeZone: "Australia/Melbourne",
    coords: [-37.8136, 144.9631],
    cover: "https://images.unsplash.com/photo-1506976785307-8732e854ad71?q=80&w=1600",
    budget: { food_per_month_eur: 330, housing_flatshare_eur: 850, transport_pass_eur: 100, beer_pub_eur: 6.5, cinema_eur: 13 },
    content: {
      fr: {
        name: "Melbourne",
        description2:
          "Capitale café & culture, météo changeante. Quartiers étudiants autour de Carlton et Fitzroy.",
        neighborhoods: ["Carlton", "Fitzroy", "Brunswick", "Southbank"],
        housing_howto: defaultSites(["Flatmates.com.au", "Realestate.com.au", "Gumtree"]),
        tips: ["Quatre saisons en une journée", "Trams fréquents et fiables"],
      },
      en: {
        name: "Melbourne",
        description2:
          "Coffee & culture capital with moody weather. Student life around Carlton/Fitzroy.",
        neighborhoods: ["Carlton", "Fitzroy", "Brunswick", "Southbank"],
        housing_howto: "Housing: Flatmates, Realestate.com.au, Gumtree.",
        tips: ["Four seasons in a day", "Great tram network"],
      },
    },
  },

  // ==== AFRICA (1) ====
  {
    slug: "cape-town",
    continent: "Africa",
    country: "South Africa",
    timeZone: "Africa/Johannesburg",
    coords: [-33.9249, 18.4241],
    cover: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600",
    budget: { food_per_month_eur: 220, housing_flatshare_eur: 450, transport_pass_eur: 35, beer_pub_eur: 2.5, cinema_eur: 6 },
    content: {
      fr: {
        name: "Cape Town",
        description2:
          "Montagne, océan et paysages de dingue. Quartiers étudiants autour d’Observatory et Gardens.",
        neighborhoods: ["Observatory", "Gardens", "Sea Point", "Woodstock"],
        housing_howto: defaultSites(["Gumtree ZA", "Property24", "Facebook Groups"]),
        tips: ["Sécurité : utilise VTC la nuit", "Eau et électricité parfois rationnées"],
      },
      en: {
        name: "Cape Town",
        description2:
          "Mountains and ocean with jaw-dropping views. Student areas around Observatory and Gardens.",
        neighborhoods: ["Observatory", "Gardens", "Sea Point", "Woodstock"],
        housing_howto: "Housing: Gumtree ZA, Property24, FB groups.",
        tips: ["Use ride-hailing at night", "Utility rationing can occur"],
      },
    },
  },
];
