// lib/destinations.ts

export type Budget = {
  food_per_month_eur: number;
  housing_flatshare_eur: number;
  transport_pass_eur: number;
  beer_pub_eur: number;
  cinema_eur: number;
};

// J'ai ajouté de nouvelles sections pour enrichir le contenu de chaque ville.
export type CityDetails = {
  name: string;
  description2: string;
  neighborhoods: string[];
  housing_howto: string;

  tips: string[];
  emergency: {
    universal: string;
    police: string;
    ambulance: string;
    fire: string;
  };
  health: {
    hospitals: string[];
    note: string;
  };
  services: {
    banks: string[];
    phone_carriers: string[];
  };
  education: {
    universities: string[];
  };
  misc: {
    visa_note: string;
    fun_fact: string;
  };
};

export type CityContent = {
  fr: CityDetails;
  en: CityDetails;
};

export type CityData = {
  slug: string;
  nameEn: string;
  nameFr: string;
  budget: Budget;
  content: CityContent;
};

export type CountryData = {
  slug: string;
  nameEn: string;
  nameFr: string;
  cities?: CityData[];
};

export type DestinationData = {
  slug: string;
  nameEn: string;
  nameFr: string;
  countries?: CountryData[];
};

export const destinations: DestinationData[] = [
  {
    slug: "europe",
    nameEn: "Europe",
    nameFr: "Europe",
    countries: [
      {
        slug: "france",
        nameEn: "France",
        nameFr: "France",
        cities: [
          // 1. Paris
          {
            slug: "paris",
            nameEn: "Paris",
            nameFr: "Paris",
            budget: {
              food_per_month_eur: 350,
              housing_flatshare_eur: 750,
              transport_pass_eur: 84,
              beer_pub_eur: 8,
              cinema_eur: 13,
            },
            content: {
              fr: {
                name: "Paris",
                description2: "Surnommée la Ville Lumière, Paris est un centre mondial d’art, de mode, de gastronomie et de culture. Ses universités prestigieuses et son bouillonnement culturel en font une destination de rêve pour les étudiants.",
                neighborhoods: ["Le Marais", "Quartier Latin", "Montmartre", "Belleville", "13e arrondissement (quartier asiatique)"],
                housing_howto: "Le logement est compétitif. Commencez vos recherches tôt sur des sites comme Crous, Studapart, ou SeLoger. La colocation est une option populaire pour réduire les coûts.",
                tips: ["Le Pass Navigo est indispensable pour les transports.", "Profitez des musées gratuits pour les moins de 26 ans résidents de l'UE.", "Explorez les marchés alimentaires pour des produits frais et abordables."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Hôpital de la Pitié-Salpêtrière", "Hôpital Georges-Pompidou", "Hôpital Saint-Louis"],
                  note: "La Carte Vitale est nécessaire pour le remboursement des soins. Les étudiants étrangers doivent s'inscrire à la sécurité sociale étudiante.",
                },
                services: {
                  banks: ["BNP Paribas", "Société Générale", "Crédit Agricole", "Revolut", "N26"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université de la Sorbonne", "Sciences Po", "PSL Research University", "HEC Paris", "Polytechnique"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "Il y a plus de 1800 boulangeries à Paris. Chaque année, un concours élit la meilleure baguette de la ville.",
                }
              },
              en: {
                name: "Paris",
                description2: "Nicknamed the City of Light, Paris is a global center for art, fashion, gastronomy, and culture. Its prestigious universities and vibrant cultural scene make it a dream destination for students.",
                neighborhoods: ["Le Marais", "Latin Quarter", "Montmartre", "Belleville", "13th arrondissement (Asian quarter)"],
                housing_howto: "Housing is competitive. Start your search early on sites like Crous, Studapart, or SeLoger. Flatsharing is a popular option to reduce costs.",
                tips: ["The Pass Navigo is essential for transport.", "Enjoy free museums for EU residents under 26.", "Explore food markets for fresh and affordable products."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Pitié-Salpêtrière Hospital", "Georges-Pompidou Hospital", "Saint-Louis Hospital"],
                  note: "The 'Carte Vitale' is necessary for healthcare reimbursement. International students must register for student social security.",
                },
                services: {
                  banks: ["BNP Paribas", "Société Générale", "Crédit Agricole", "Revolut", "N26"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Sorbonne University", "Sciences Po", "PSL Research University", "HEC Paris", "Polytechnique"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "There are over 1,800 bakeries in Paris. Every year, a competition crowns the city's best baguette.",
                }
              },
            },
          },
          // 2. Lyon
          {
            slug: "lyon",
            nameEn: "Lyon",
            nameFr: "Lyon",
            budget: {
              food_per_month_eur: 300,
              housing_flatshare_eur: 450,
              transport_pass_eur: 32.5,
              beer_pub_eur: 7,
              cinema_eur: 11,
            },
            content: {
              fr: {
                name: "Lyon",
                description2: "Capitale de la gastronomie, Lyon est une ville dynamique et étudiante, réputée pour sa qualité de vie. Entre ses quartiers historiques, ses rives aménagées et ses nombreux événements, la vie y est riche et animée.",
                neighborhoods: ["La Croix-Rousse", "Vieux Lyon", "Guillotière", "Confluence"],
                housing_howto: "Plusieurs options sont disponibles : résidences étudiantes (CROUS), appartements via des agences ou colocation. Des plateformes comme Lyon Campus ou Adele sont utiles.",
                tips: ["Le réseau de transport TCL est très efficace.", "Ne manquez pas la Fête des Lumières en décembre.", "Goûtez aux spécialités locales dans les 'bouchons' lyonnais."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Hospices Civils de Lyon (HCL)", "Hôpital de la Croix-Rousse", "Centre Léon Bérard"],
                  note: "Comme partout en France, l'affiliation à la sécurité sociale est obligatoire pour les étudiants.",
                },
                services: {
                  banks: ["LCL", "Caisse d'Épargne", "BNP Paribas", "Société Générale"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université de Lyon (UCBL, Lyon 2, Lyon 3)", "INSA Lyon", "EMLyon Business School"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "Lyon est considérée comme le berceau du cinéma, grâce aux frères Lumière qui y ont projeté leur premier film en 1895.",
                }
              },
              en: {
                name: "Lyon",
                description2: "As the capital of gastronomy, Lyon is a dynamic student city known for its quality of life. With its historic districts, landscaped riverbanks, and numerous events, life here is rich and vibrant.",
                neighborhoods: ["La Croix-Rousse", "Old Lyon", "Guillotière", "Confluence"],
                housing_howto: "Several options are available: student residences (CROUS), apartments via agencies, or flatshares. Platforms like Lyon Campus or Adele are helpful.",
                tips: ["The TCL public transport network is very efficient.", "Don't miss the Festival of Lights in December.", "Taste local specialties in Lyon's 'bouchons'."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Hospices Civils de Lyon (HCL)", "Croix-Rousse Hospital", "Léon Bérard Center"],
                  note: "As everywhere in France, social security affiliation is mandatory for students.",
                },
                services: {
                  banks: ["LCL", "Caisse d'Épargne", "BNP Paribas", "Société Générale"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["University of Lyon (UCBL, Lyon 2, Lyon 3)", "INSA Lyon", "EMLyon Business School"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "Lyon is considered the birthplace of cinema, thanks to the Lumière brothers who screened their first film there in 1895.",
                }
              },
            },
          },
          // 3. Marseille
          {
            slug: "marseille",
            nameEn: "Marseille",
            nameFr: "Marseille",
            budget: { food_per_month_eur: 320, housing_flatshare_eur: 420, transport_pass_eur: 36.70, beer_pub_eur: 6, cinema_eur: 10 },
            content: {
              fr: {
                name: "Marseille",
                description2: "Plus ancienne ville de France, Marseille est une cité portuaire vibrante et multiculturelle. Son climat ensoleillé, ses calanques et son ambiance unique attirent de nombreux étudiants.",
                neighborhoods: ["Le Panier", "Cours Julien", "La Plaine", "Vieux-Port"],
                housing_howto: "Le marché est plus accessible que Paris. La colocation est très courante. Consultez LeBonCoin et les groupes Facebook dédiés.",
                tips: ["La carte RTM est votre alliée pour les transports.", "Explorez le Parc National des Calanques.", "Goûtez la fameuse bouillabaisse."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["AP-HM (Hôpital de la Timone, Hôpital Nord)", "Institut Paoli-Calmettes"],
                  note: "Pensez à déclarer un médecin traitant pour être mieux remboursé.",
                },
                services: {
                  banks: ["Crédit Mutuel", "La Banque Postale", "CIC", "BNP Paribas"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Aix-Marseille Université (AMU)", "KEDGE Business School", "École Centrale de Marseille"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "Le savon de Marseille, mondialement connu, doit suivre une recette stricte datant de 1688 pour obtenir son appellation.",
                }
              },
              en: {
                name: "Marseille",
                description2: "The oldest city in France, Marseille is a vibrant and multicultural port city. Its sunny climate, calanques, and unique atmosphere attract many students.",
                neighborhoods: ["Le Panier", "Cours Julien", "La Plaine", "Old Port"],
                housing_howto: "The market is more accessible than in Paris. Flatsharing is very common. Check LeBonCoin and dedicated Facebook groups.",
                tips: ["The RTM card is your best friend for transport.", "Explore the Calanques National Park.", "Taste the famous bouillabaisse."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["AP-HM (Timone Hospital, North Hospital)", "Paoli-Calmettes Institute"],
                  note: "Remember to declare a primary care physician ('médecin traitant') for better reimbursement.",
                },
                services: {
                  banks: ["Crédit Mutuel", "La Banque Postale", "CIC", "BNP Paribas"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Aix-Marseille University (AMU)", "KEDGE Business School", "École Centrale de Marseille"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "The world-famous Marseille soap must follow a strict recipe dating back to 1688 to earn its name.",
                }
              },
            },
          },
          // 4. Toulouse
          {
            slug: "toulouse",
            nameEn: "Toulouse",
            nameFr: "Toulouse",
            budget: { food_per_month_eur: 280, housing_flatshare_eur: 400, transport_pass_eur: 15, beer_pub_eur: 6.5, cinema_eur: 9 },
            content: {
              fr: {
                name: "Toulouse",
                description2: "Surnommée la 'Ville Rose' pour ses briques en terre cuite, Toulouse est un pôle majeur de l'industrie aérospatiale européenne et une ville étudiante très animée.",
                neighborhoods: ["Capitole", "Saint-Cyprien", "Carmes", "Saint-Aubin"],
                housing_howto: "La demande est forte à la rentrée. Les résidences étudiantes et la colocation sont les options privilégiées. Le CROUS de Toulouse est un bon point de départ.",
                tips: ["Le réseau Tisséo (métro, tram, bus) est très pratique.", "Profitez des berges de la Garonne pour vous détendre.", "La Cité de l'Espace est un incontournable."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["CHU de Toulouse (Hôpital Purpan, Hôpital Rangueil)", "Oncopole"],
                  note: "La ville dispose de nombreux centres de santé universitaires pour les étudiants.",
                },
                services: {
                  banks: ["Crédit Agricole", "BNP Paribas", "Société Générale", "LCL"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université de Toulouse (Capitole, Jean Jaurès, Paul Sabatier)", "INSA Toulouse", "ISAE-SUPAERO"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "Toulouse est le plus grand centre aérospatial d'Europe, abritant le siège d'Airbus.",
                }
              },
              en: {
                name: "Toulouse",
                description2: "Nicknamed the 'Pink City' for its terracotta bricks, Toulouse is a major hub of the European aerospace industry and a very lively student city.",
                neighborhoods: ["Capitole", "Saint-Cyprien", "Carmes", "Saint-Aubin"],
                housing_howto: "Demand is high at the start of the academic year. Student residences and flatsharing are the preferred options. The CROUS of Toulouse is a good starting point.",
                tips: ["The Tisséo network (metro, tram, bus) is very convenient.", "Enjoy the banks of the Garonne to relax.", "The Cité de l'Espace (Space City) is a must-see."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Toulouse University Hospital (Purpan Hospital, Rangueil Hospital)", "Oncopole"],
                  note: "The city has many university health centers for students.",
                },
                services: {
                  banks: ["Crédit Agricole", "BNP Paribas", "Société Générale", "LCL"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["University of Toulouse (Capitole, Jean Jaurès, Paul Sabatier)", "INSA Toulouse", "ISAE-SUPAERO"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "Toulouse is the largest aerospace center in Europe, home to the headquarters of Airbus.",
                }
              },
            },
          },
          // 5. Bordeaux
          {
            slug: "bordeaux",
            nameEn: "Bordeaux",
            nameFr: "Bordeaux",
            budget: { food_per_month_eur: 300, housing_flatshare_eur: 480, transport_pass_eur: 20.40, beer_pub_eur: 7, cinema_eur: 10 },
            content: {
              fr: {
                name: "Bordeaux",
                description2: "Mondialement connue pour ses vignobles, Bordeaux est aussi une ville d'art et d'histoire avec une qualité de vie exceptionnelle. Son centre-ville, classé à l'UNESCO, est un joyau architectural.",
                neighborhoods: ["Chartrons", "Saint-Michel", "Victoire", "Bastide"],
                housing_howto: "Le campus universitaire est un peu excentré, mais bien desservi. Les quartiers comme Victoire sont populaires auprès des étudiants. Pensez aux résidences du CROUS.",
                tips: ["Le tramway est le meilleur moyen de se déplacer.", "Le Miroir d'eau est un lieu de rendez-vous emblématique.", "La ville est très cyclable, profitez-en !"],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["CHU de Bordeaux (Hôpital Pellegrin, Hôpital Saint-André)", "Institut Bergonié"],
                  note: "Le service de santé universitaire (ESE) offre des consultations médicales et psychologiques.",
                },
                services: {
                  banks: ["Crédit Agricole", "Caisse d'Épargne", "BNP Paribas", "LCL"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université de Bordeaux", "Sciences Po Bordeaux", "KEDGE Business School"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "Bordeaux possède la plus longue rue commerçante piétonne d'Europe, la rue Sainte-Catherine, qui s'étend sur 1,2 km.",
                }
              },
              en: {
                name: "Bordeaux",
                description2: "World-renowned for its vineyards, Bordeaux is also a city of art and history with an exceptional quality of life. Its city center, a UNESCO World Heritage site, is an architectural gem.",
                neighborhoods: ["Chartrons", "Saint-Michel", "Victoire", "Bastide"],
                housing_howto: "The university campus is a bit out of the city center but well-connected. Neighborhoods like Victoire are popular with students. Consider CROUS residences.",
                tips: ["The tram is the best way to get around.", "The Miroir d'eau (Water Mirror) is an iconic meeting spot.", "The city is very bike-friendly, take advantage of it!"],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Bordeaux University Hospital (Pellegrin Hospital, Saint-André Hospital)", "Bergonié Institute"],
                  note: "The university health service (ESE) offers medical and psychological consultations.",
                },
                services: {
                  banks: ["Crédit Agricole", "Caisse d'Épargne", "BNP Paribas", "LCL"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["University of Bordeaux", "Sciences Po Bordeaux", "KEDGE Business School"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "Bordeaux has the longest pedestrian shopping street in Europe, Rue Sainte-Catherine, which stretches for 1.2 km.",
                }
              },
            },
          },
          // 6. Lille
          {
            slug: "lille",
            nameEn: "Lille",
            nameFr: "Lille",
            budget: { food_per_month_eur: 270, housing_flatshare_eur: 430, transport_pass_eur: 28, beer_pub_eur: 6, cinema_eur: 9 },
            content: {
              fr: {
                name: "Lille",
                description2: "Au carrefour de l'Europe, Lille est une ville chaleureuse et festive, connue pour sa magnifique architecture flamande et sa célèbre braderie. C'est un pôle étudiant majeur du nord de la France.",
                neighborhoods: ["Vieux-Lille", "Wazemmes", "Vauban-Esquermes", "Moulins"],
                housing_howto: "Le quartier Vauban est le quartier étudiant par excellence. Les résidences universitaires sont nombreuses. Le marché de la colocation est très actif.",
                tips: ["Le réseau Ilévia (métro, bus, tram) est dense.", "Profitez de la proximité avec la Belgique pour des escapades.", "Goûtez les spécialités locales : welsh, carbonnade, et bien sûr, les frites !"],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["CHRU de Lille (Hôpital Claude Huriez, Hôpital Jeanne de Flandre)", "Centre Oscar Lambret"],
                  note: "Les centres de santé universitaires sont accessibles sur les différents campus.",
                },
                services: {
                  banks: ["Crédit Mutuel Nord Europe", "Caisse d'Épargne", "BNP Paribas", "Société Générale"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université de Lille", "EDHEC Business School", "IESEG School of Management", "École Centrale de Lille"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "La Braderie de Lille, qui a lieu le premier week-end de septembre, est le plus grand marché aux puces d'Europe et attire des millions de visiteurs.",
                }
              },
              en: {
                name: "Lille",
                description2: "At the crossroads of Europe, Lille is a warm and festive city, known for its magnificent Flemish architecture and its famous flea market. It is a major student hub in northern France.",
                neighborhoods: ["Old Lille", "Wazemmes", "Vauban-Esquermes", "Moulins"],
                housing_howto: "The Vauban district is the quintessential student neighborhood. University residences are numerous. The flatsharing market is very active.",
                tips: ["The Ilévia network (metro, bus, tram) is extensive.", "Take advantage of the proximity to Belgium for getaways.", "Taste the local specialties: welsh, carbonnade, and of course, fries!"],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Lille University Hospital (Claude Huriez Hospital, Jeanne de Flandre Hospital)", "Oscar Lambret Center"],
                  note: "University health centers are available on the various campuses.",
                },
                services: {
                  banks: ["Crédit Mutuel Nord Europe", "Caisse d'Épargne", "BNP Paribas", "Société Générale"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["University of Lille", "EDHEC Business School", "IESEG School of Management", "École Centrale de Lille"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "The Braderie de Lille, held on the first weekend of September, is the largest flea market in Europe and attracts millions of visitors.",
                }
              },
            },
          },
          // 7. Nice
          {
            slug: "nice",
            nameEn: "Nice",
            nameFr: "Nice",
            budget: { food_per_month_eur: 330, housing_flatshare_eur: 550, transport_pass_eur: 40, beer_pub_eur: 7.5, cinema_eur: 11 },
            content: {
              fr: {
                name: "Nice",
                description2: "Capitale de la Côte d'Azur, Nice offre un cadre de vie idyllique entre mer et montagnes. Son climat, sa Promenade des Anglais et sa richesse culturelle en font une destination prisée.",
                neighborhoods: ["Vieux-Nice", "Le Port", "Cimiez", "Libération"],
                housing_howto: "Le logement peut être cher, surtout près de la mer. La colocation est une bonne solution. Les recherches doivent être anticipées, car la ville est aussi très touristique.",
                tips: ["Le réseau Lignes d'Azur dessert bien la ville et ses environs.", "Profitez des plages publiques.", "Goûtez la socca, une spécialité locale à base de pois chiches."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["CHU de Nice (Hôpital Pasteur)", "Centre Antoine Lacassagne"],
                  note: "La souscription à une mutuelle étudiante est fortement recommandée pour compléter les remboursements de la Sécurité Sociale.",
                },
                services: {
                  banks: ["LCL", "Société Générale", "BNP Paribas", "Crédit Agricole"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université Côte d'Azur", "EDHEC Business School (campus de Nice)", "IPAG Business School"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "Le Carnaval de Nice, en février, est l'un des plus grands carnavals du monde, célèbre pour ses chars fleuris et ses batailles de fleurs.",
                }
              },
              en: {
                name: "Nice",
                description2: "Capital of the French Riviera, Nice offers an idyllic living environment between the sea and the mountains. Its climate, the Promenade des Anglais, and its cultural richness make it a popular destination.",
                neighborhoods: ["Old Nice", "The Port", "Cimiez", "Libération"],
                housing_howto: "Housing can be expensive, especially near the sea. Flatsharing is a good solution. Searches should be started early, as the city is also very touristy.",
                tips: ["The Lignes d'Azur network serves the city and its surroundings well.", "Enjoy the public beaches.", "Taste socca, a local specialty made from chickpeas."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Nice University Hospital (Pasteur Hospital)", "Antoine Lacassagne Center"],
                  note: "Subscribing to a student mutual insurance ('mutuelle') is highly recommended to supplement Social Security reimbursements.",
                },
                services: {
                  banks: ["LCL", "Société Générale", "BNP Paribas", "Crédit Agricole"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université Côte d'Azur", "EDHEC Business School (Nice campus)", "IPAG Business School"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "The Nice Carnival, in February, is one of the largest carnivals in the world, famous for its floral floats and flower battles.",
                }
              },
            },
          },
          // 8. Strasbourg
          {
            slug: "strasbourg",
            nameEn: "Strasbourg",
            nameFr: "Strasbourg",
            budget: { food_per_month_eur: 290, housing_flatshare_eur: 460, transport_pass_eur: 27.60, beer_pub_eur: 6, cinema_eur: 10 },
            content: {
              fr: {
                name: "Strasbourg",
                description2: "Capitale de l'Alsace et siège de plusieurs institutions européennes, Strasbourg est une ville au charme unique avec ses canaux et ses maisons à colombages. C'est une ville très internationale et cyclable.",
                neighborhoods: ["Grande Île", "Petite France", "Krutenau", "Neudorf"],
                housing_howto: "Le quartier de la Krutenau est très prisé des étudiants. Le CROUS de Strasbourg gère de nombreuses résidences. La colocation est également une option populaire.",
                tips: ["Le vélo est roi à Strasbourg, c'est le moyen de transport idéal.", "Le réseau de tram CTS est excellent.", "Ne manquez pas le marché de Noël, l'un des plus anciens d'Europe."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Hôpitaux Universitaires de Strasbourg (Hôpital Civil)", "Centre Paul Strauss"],
                  note: "Le Service de Santé Universitaire (SSU) est à la disposition des étudiants pour toute question de santé.",
                },
                services: {
                  banks: ["Crédit Mutuel", "Caisse d'Épargne", "BNP Paribas", "Société Générale"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université de Strasbourg (Unistra)", "EM Strasbourg Business School", "INSA Strasbourg"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "La cathédrale de Strasbourg a été le plus haut édifice du monde de 1647 à 1874.",
                }
              },
              en: {
                name: "Strasbourg",
                description2: "Capital of Alsace and seat of several European institutions, Strasbourg is a city with a unique charm with its canals and half-timbered houses. It is a very international and bike-friendly city.",
                neighborhoods: ["Grande Île", "Petite France", "Krutenau", "Neudorf"],
                housing_howto: "The Krutenau district is very popular with students. The CROUS of Strasbourg manages many residences. Flatsharing is also a popular option.",
                tips: ["The bicycle is king in Strasbourg; it's the ideal mode of transport.", "The CTS tram network is excellent.", "Don't miss the Christmas market, one of the oldest in Europe."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Strasbourg University Hospitals (Civil Hospital)", "Paul Strauss Center"],
                  note: "The University Health Service (SSU) is available to students for any health-related questions.",
                },
                services: {
                  banks: ["Crédit Mutuel", "Caisse d'Épargne", "BNP Paribas", "Société Générale"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["University of Strasbourg (Unistra)", "EM Strasbourg Business School", "INSA Strasbourg"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "Strasbourg Cathedral was the world's tallest building from 1647 to 1874.",
                }
              },
            },
          },
          // 9. Nantes
          {
            slug: "nantes",
            nameEn: "Nantes",
            nameFr: "Nantes",
            budget: { food_per_month_eur: 280, housing_flatshare_eur: 420, transport_pass_eur: 24, beer_pub_eur: 6, cinema_eur: 9 },
            content: {
              fr: {
                name: "Nantes",
                description2: "Ancienne capitale de la Bretagne, Nantes est une ville créative et innovante, reconnue pour sa qualité de vie. Son dynamisme culturel et ses projets urbains audacieux en font une ville très attractive.",
                neighborhoods: ["Bouffay", "Île de Nantes", "Talensac", "Zola"],
                housing_howto: "La colocation est très développée. Le centre-ville et l'Île de Nantes sont des quartiers recherchés. Le CROUS propose des logements à des tarifs avantageux.",
                tips: ["Le réseau TAN est efficace et le 'Navibus' permet de traverser la Loire.", "Les Machines de l'île et le Voyage à Nantes sont des expériences uniques.", "La ville est très verte, avec de nombreux parcs et jardins."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["CHU de Nantes (Hôtel-Dieu, Hôpital Nord Laennec)", "Institut de Cancérologie de l'Ouest"],
                  note: "Le pôle santé étudiant de l'Université de Nantes est un interlocuteur privilégié.",
                },
                services: {
                  banks: ["Crédit Agricole", "Crédit Mutuel", "BNP Paribas", "LCL"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université de Nantes", "Audencia Business School", "École Centrale de Nantes"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "Nantes est la ville de naissance de l'écrivain Jules Verne, et son univers fantastique inspire de nombreux projets artistiques dans la ville, comme les Machines de l'île.",
                }
              },
              en: {
                name: "Nantes",
                description2: "Former capital of Brittany, Nantes is a creative and innovative city, recognized for its quality of life. Its cultural dynamism and bold urban projects make it a very attractive city.",
                neighborhoods: ["Bouffay", "Île de Nantes", "Talensac", "Zola"],
                housing_howto: "Flatsharing is very common. The city center and the Île de Nantes are sought-after areas. The CROUS offers housing at affordable rates.",
                tips: ["The TAN network is efficient, and the 'Navibus' allows you to cross the Loire.", "Les Machines de l'île and the Voyage à Nantes are unique experiences.", "The city is very green, with many parks and gardens."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Nantes University Hospital (Hôtel-Dieu, Nord Laennec Hospital)", "Western Cancer Institute"],
                  note: "The student health center at the University of Nantes is a key contact.",
                },
                services: {
                  banks: ["Crédit Agricole", "Crédit Mutuel", "BNP Paribas", "LCL"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["University of Nantes", "Audencia Business School", "École Centrale de Nantes"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "Nantes is the birthplace of the writer Jules Verne, and his fantasy world inspires many artistic projects in the city, such as Les Machines de l'île.",
                }
              },
            },
          },
          // 10. Montpellier
          {
            slug: "montpellier",
            nameEn: "Montpellier",
            nameFr: "Montpellier",
            budget: { food_per_month_eur: 290, housing_flatshare_eur: 450, transport_pass_eur: 19.60, beer_pub_eur: 6.5, cinema_eur: 9.5 },
            content: {
              fr: {
                name: "Montpellier",
                description2: "Ville jeune et ensoleillée près de la Méditerranée, Montpellier est l'une des villes les plus dynamiques de France. Un tiers de sa population est étudiante, ce qui lui confère une atmosphère vibrante.",
                neighborhoods: ["Écusson (centre historique)", "Beaux-Arts", "Boutonnet", "Port Marianne"],
                housing_howto: "La demande est très forte. Commencez vos recherches en avance. Les résidences étudiantes (CROUS et privées) sont une bonne option pour éviter les arnaques.",
                tips: ["Le réseau de tramway TaM est moderne et dessert toute la ville.", "La Place de la Comédie est le cœur battant de la ville.", "Les plages sont accessibles en tramway + navette ou à vélo."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["CHU de Montpellier (Hôpital Lapeyronie, Hôpital Gui de Chauliac)", "Institut du Cancer de Montpellier"],
                  note: "Le SCMPPS (Service Commun de Médecine Préventive et de Promotion de la Santé) est dédié aux étudiants.",
                },
                services: {
                  banks: ["Caisse d'Épargne", "BNP Paribas", "Société Générale", "Crédit Agricole"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université de Montpellier", "Montpellier Business School", "Polytech Montpellier"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "La faculté de médecine de Montpellier est la plus ancienne faculté de médecine en activité au monde, fondée au 12ème siècle.",
                }
              },
              en: {
                name: "Montpellier",
                description2: "A young and sunny city near the Mediterranean, Montpellier is one of the most dynamic cities in France. One-third of its population is students, giving it a vibrant atmosphere.",
                neighborhoods: ["Écusson (historic center)", "Beaux-Arts", "Boutonnet", "Port Marianne"],
                housing_howto: "Demand is very high. Start your search early. Student residences (CROUS and private) are a good option to avoid scams.",
                tips: ["The TaM tram network is modern and serves the entire city.", "Place de la Comédie is the beating heart of the city.", "The beaches are accessible by tram + shuttle or by bike."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Montpellier University Hospital (Lapeyronie Hospital, Gui de Chauliac Hospital)", "Montpellier Cancer Institute"],
                  note: "The SCMPPS (University Preventive Medicine and Health Promotion Service) is dedicated to students.",
                },
                services: {
                  banks: ["Caisse d'Épargne", "BNP Paribas", "Société Générale", "Crédit Agricole"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["University of Montpellier", "Montpellier Business School", "Polytech Montpellier"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "The Faculty of Medicine of Montpellier is the oldest active medical faculty in the world, founded in the 12th century.",
                }
              },
            },
          },
        ],
      },
      {
        slug: "spain",
        nameEn: "Spain",
        nameFr: "Espagne",
        cities: [
          // 1. Madrid
          {
            slug: "madrid",
            nameEn: "Madrid",
            nameFr: "Madrid",
            budget: { food_per_month_eur: 280, housing_flatshare_eur: 450, transport_pass_eur: 20, beer_pub_eur: 3, cinema_eur: 9 },
            content: {
              fr: {
                name: "Madrid",
                description2: "Capitale de l'Espagne, Madrid est une ville qui ne dort jamais. Célèbre pour sa vie nocturne, ses musées d'art de renommée mondiale et ses parcs magnifiques, elle offre une expérience étudiante inoubliable.",
                neighborhoods: ["Malasaña", "Chueca", "La Latina", "Lavapiés"],
                housing_howto: "La colocation ('piso compartido') est la norme. Des sites comme Idealista, Fotocasa ou Badi sont très utilisés. Commencez à chercher avant l'été pour la rentrée.",
                tips: ["L'Abono Joven à 20€/mois pour les moins de 26 ans est une aubaine pour les transports.", "Profitez des tapas, une tradition culinaire abordable.", "Les musées du Prado et Reina Sofía ont des horaires de visite gratuite."],
                emergency: { universal: "112", police: "091", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["Hospital Universitario La Paz", "Hospital General Universitario Gregorio Marañón", "Hospital Universitario 12 de Octubre"],
                  note: "Les étudiants de l'UE doivent avoir la Carte Européenne d'Assurance Maladie (CEAM). Les autres doivent souscrire une assurance privée.",
                },
                services: {
                  banks: ["Santander", "BBVA", "CaixaBank", "Sabadell"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "Yoigo"],
                },
                education: {
                  universities: ["Universidad Complutense de Madrid", "Universidad Autónoma de Madrid", "Universidad Politécnica de Madrid", "IE University"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent demander un visa d'étudiant. Le NIE (Numéro d'Identification d'Étranger) est obligatoire pour tous les séjours longs.",
                  fun_fact: "Madrid est la capitale la plus haute d'Europe, située à une altitude de 667 mètres au-dessus du niveau de la mer.",
                }
              },
              en: {
                name: "Madrid",
                description2: "The capital of Spain, Madrid is a city that never sleeps. Famous for its nightlife, world-class art museums, and beautiful parks, it offers an unforgettable student experience.",
                neighborhoods: ["Malasaña", "Chueca", "La Latina", "Lavapiés"],
                housing_howto: "Shared flats ('piso compartido') are the norm. Websites like Idealista, Fotocasa, or Badi are widely used. Start looking before the summer for the academic year.",
                tips: ["The 'Abono Joven' at €20/month for under 26s is a bargain for transport.", "Enjoy tapas, an affordable culinary tradition.", "The Prado and Reina Sofía museums have free visiting hours."],
                emergency: { universal: "112", police: "091", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["La Paz University Hospital", "Gregorio Marañón General University Hospital", "12 de Octubre University Hospital"],
                  note: "EU students should have the European Health Insurance Card (EHIC). Others must take out private insurance.",
                },
                services: {
                  banks: ["Santander", "BBVA", "CaixaBank", "Sabadell"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "Yoigo"],
                },
                education: {
                  universities: ["Complutense University of Madrid", "Autonomous University of Madrid", "Polytechnic University of Madrid", "IE University"],
                },
                misc: {
                  visa_note: "Non-EU students must apply for a student visa. The NIE (Foreigner Identification Number) is mandatory for all long stays.",
                  fun_fact: "Madrid is the highest capital city in Europe, located at an altitude of 667 meters above sea level.",
                }
              },
            },
          },
          // 2. Barcelone
          {
            slug: "barcelona",
            nameEn: "Barcelona",
            nameFr: "Barcelone",
            budget: { food_per_month_eur: 300, housing_flatshare_eur: 500, transport_pass_eur: 40, beer_pub_eur: 3.5, cinema_eur: 9 },
            content: {
              fr: {
                name: "Barcelone",
                description2: "Entre mer et montagne, Barcelone est célèbre pour son architecture unique signée Gaudí, ses plages et son ambiance cosmopolite. C'est une destination de choix pour les étudiants internationaux.",
                neighborhoods: ["Gràcia", "El Raval", "Gòtic", "Poblenou"],
                housing_howto: "La colocation est très répandue. Utilisez Idealista et Badi. Les prix varient fortement selon les quartiers. Soyez réactif, les bons appartements partent vite.",
                tips: ["La carte T-Jove offre des transports illimités pour 3 mois aux moins de 25 ans.", "Explorez les marchés comme La Boqueria.", "Profitez des plages de la Barceloneta."],
                emergency: { universal: "112", police: "092 (locale) / 091 (nationale)", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["Hospital Clínic de Barcelona", "Hospital de la Santa Creu i Sant Pau", "Hospital Universitari Vall d'Hebron"],
                  note: "La CEAM est indispensable pour les étudiants européens. Une assurance privée est requise pour les autres.",
                },
                services: {
                  banks: ["CaixaBank", "Santander", "BBVA", "Sabadell"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "MásMóvil"],
                },
                education: {
                  universities: ["Universitat de Barcelona (UB)", "Universitat Autònoma de Barcelona (UAB)", "ESADE Business School", "IQS"],
                },
                misc: {
                  visa_note: "Le visa étudiant et le NIE sont obligatoires pour les étudiants non-européens.",
                  fun_fact: "Le quartier de l'Eixample a été conçu au 19ème siècle avec un plan en damier et des coins de rues coupés pour améliorer la visibilité et la circulation des tramways.",
                }
              },
              en: {
                name: "Barcelona",
                description2: "Between sea and mountains, Barcelona is famous for its unique architecture by Gaudí, its beaches, and its cosmopolitan atmosphere. It is a top destination for international students.",
                neighborhoods: ["Gràcia", "El Raval", "Gothic Quarter", "Poblenou"],
                housing_howto: "Flatsharing is very common. Use Idealista and Badi. Prices vary greatly by neighborhood. Be quick, good apartments go fast.",
                tips: ["The T-Jove card offers unlimited transport for 3 months for those under 25.", "Explore markets like La Boqueria.", "Enjoy the beaches of Barceloneta."],
                emergency: { universal: "112", police: "092 (local) / 091 (national)", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["Hospital Clínic de Barcelona", "Hospital de la Santa Creu i Sant Pau", "Vall d'Hebron University Hospital"],
                  note: "The EHIC is essential for European students. Private insurance is required for others.",
                },
                services: {
                  banks: ["CaixaBank", "Santander", "BBVA", "Sabadell"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "MásMóvil"],
                },
                education: {
                  universities: ["University of Barcelona (UB)", "Autonomous University of Barcelona (UAB)", "ESADE Business School", "IQS"],
                },
                misc: {
                  visa_note: "A student visa and the NIE are mandatory for non-EU students.",
                  fun_fact: "The Eixample district was designed in the 19th century with a grid plan and chamfered street corners to improve visibility and tram circulation.",
                }
              },
            },
          },
          // 3. Valence
          {
            slug: "valencia",
            nameEn: "Valencia",
            nameFr: "Valence",
            budget: { food_per_month_eur: 250, housing_flatshare_eur: 300, transport_pass_eur: 25, beer_pub_eur: 2.5, cinema_eur: 8 },
            content: {
              fr: {
                name: "Valence",
                description2: "Troisième ville d'Espagne, Valence combine une vieille ville charmante, une architecture futuriste (la Cité des Arts et des Sciences) et de belles plages. Son coût de la vie est plus abordable que Madrid ou Barcelone.",
                neighborhoods: ["El Carmen", "Ruzafa", "Benimaclet", "Cabanyal"],
                housing_howto: "Benimaclet est le quartier étudiant par excellence. La colocation est facile à trouver et abordable. Idealista est la référence.",
                tips: ["La ville est très plate, parfaite pour le vélo.", "Ne manquez pas les Fallas en mars, une fête spectaculaire.", "Goûtez la paella valencienne authentique."],
                emergency: { universal: "112", police: "092", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["Hospital Universitari i Politècnic La Fe", "Hospital Clínico Universitario de Valencia"],
                  note: "Les mêmes conditions que dans le reste de l'Espagne s'appliquent (CEAM pour l'UE, assurance privée pour les autres).",
                },
                services: {
                  banks: ["CaixaBank", "Bankia", "Santander", "Sabadell"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "Yoigo"],
                },
                education: {
                  universities: ["Universitat de València (UV)", "Universitat Politècnica de València (UPV)"],
                },
                misc: {
                  visa_note: "Le visa étudiant et le NIE sont obligatoires pour les étudiants non-européens.",
                  fun_fact: "Le lit de l'ancienne rivière Turia, détournée après une inondation, a été transformé en un immense parc de 9 km qui traverse la ville.",
                }
              },
              en: {
                name: "Valencia",
                description2: "Spain's third-largest city, Valencia combines a charming old town, futuristic architecture (the City of Arts and Sciences), and beautiful beaches. Its cost of living is more affordable than Madrid or Barcelona.",
                neighborhoods: ["El Carmen", "Ruzafa", "Benimaclet", "Cabanyal"],
                housing_howto: "Benimaclet is the quintessential student neighborhood. Flatsharing is easy to find and affordable. Idealista is the go-to resource.",
                tips: ["The city is very flat, perfect for cycling.", "Don't miss Las Fallas in March, a spectacular festival.", "Taste authentic Valencian paella."],
                emergency: { universal: "112", police: "092", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["La Fe University and Polytechnic Hospital", "Clínico Universitario de Valencia Hospital"],
                  note: "The same conditions as in the rest of Spain apply (EHIC for EU, private insurance for others).",
                },
                services: {
                  banks: ["CaixaBank", "Bankia", "Santander", "Sabadell"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "Yoigo"],
                },
                education: {
                  universities: ["University of Valencia (UV)", "Polytechnic University of Valencia (UPV)"],
                },
                misc: {
                  visa_note: "A student visa and the NIE are mandatory for non-EU students.",
                  fun_fact: "The riverbed of the old Turia river, diverted after a flood, was transformed into a huge 9 km park that crosses the city.",
                }
              },
            },
          },
          // 4. Séville
          {
            slug: "seville",
            nameEn: "Seville",
            nameFr: "Séville",
            budget: { food_per_month_eur: 240, housing_flatshare_eur: 320, transport_pass_eur: 35, beer_pub_eur: 2, cinema_eur: 7 },
            content: {
              fr: {
                name: "Séville",
                description2: "Capitale de l'Andalousie, Séville est le cœur de la culture du flamenco. C'est une ville magnifique avec un patrimoine historique riche et un climat des plus ensoleillés d'Europe.",
                neighborhoods: ["Santa Cruz", "Triana", "Macarena", "Alameda"],
                housing_howto: "Les quartiers de Triana et Macarena sont populaires et abordables pour les étudiants. La colocation est la meilleure option.",
                tips: ["Utilisez le service de vélos en libre-service Sevici.", "La Feria de Abril est un événement à ne pas manquer.", "Cherchez l'ombre en été, les températures peuvent être extrêmes."],
                emergency: { universal: "112", police: "092", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["Hospital Universitario Virgen del Rocío", "Hospital Universitario Virgen Macarena"],
                  note: "Assurez-vous d'avoir une couverture santé adéquate (CEAM ou privée) avant votre arrivée.",
                },
                services: {
                  banks: ["CaixaBank", "Santander", "Unicaja Banco", "BBVA"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "Yoigo"],
                },
                education: {
                  universities: ["Universidad de Sevilla", "Universidad Pablo de Olavide"],
                },
                misc: {
                  visa_note: "Le visa étudiant et le NIE sont obligatoires pour les étudiants non-européens.",
                  fun_fact: "Séville abrite la plus grande cathédrale gothique du monde, où repose Christophe Colomb.",
                }
              },
              en: {
                name: "Seville",
                description2: "The capital of Andalusia, Seville is the heart of flamenco culture. It is a beautiful city with a rich historical heritage and one of the sunniest climates in Europe.",
                neighborhoods: ["Santa Cruz", "Triana", "Macarena", "Alameda"],
                housing_howto: "The Triana and Macarena neighborhoods are popular and affordable for students. Flatsharing is the best option.",
                tips: ["Use the Sevici bike-sharing service.", "The Feria de Abril is an event not to be missed.", "Seek shade in the summer, as temperatures can be extreme."],
                emergency: { universal: "112", police: "092", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["Virgen del Rocío University Hospital", "Virgen Macarena University Hospital"],
                  note: "Ensure you have adequate health coverage (EHIC or private) before your arrival.",
                },
                services: {
                  banks: ["CaixaBank", "Santander", "Unicaja Banco", "BBVA"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "Yoigo"],
                },
                education: {
                  universities: ["University of Seville", "Pablo de Olavide University"],
                },
                misc: {
                  visa_note: "A student visa and the NIE are mandatory for non-EU students.",
                  fun_fact: "Seville is home to the largest Gothic cathedral in the world, where Christopher Columbus is buried.",
                }
              },
            },
          },
          // 5. Grenade
          {
            slug: "granada",
            nameEn: "Granada",
            nameFr: "Grenade",
            budget: { food_per_month_eur: 220, housing_flatshare_eur: 250, transport_pass_eur: 21, beer_pub_eur: 2.5, cinema_eur: 7 },
            content: {
              fr: {
                name: "Grenade",
                description2: "Située au pied des montagnes de la Sierra Nevada, Grenade est célèbre pour son majestueux palais de l'Alhambra. C'est une ville étudiante par excellence, connue pour sa culture des tapas gratuites.",
                neighborhoods: ["Albaicín", "Realejo", "Centro", "Zaidín"],
                housing_howto: "Le coût de la vie et du logement est très bas. Il est facile de trouver une chambre en colocation pour un prix très raisonnable.",
                tips: ["Pour chaque boisson commandée dans un bar, vous recevez une tapa gratuite. C'est un mode de vie !", "Réservez vos billets pour l'Alhambra des mois à l'avance.", "Profitez de la proximité des pistes de ski en hiver."],
                emergency: { universal: "112", police: "092", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["Hospital Universitario Virgen de las Nieves", "Hospital Universitario Clínico San Cecilio"],
                  note: "Les services de santé sont de bonne qualité. N'oubliez pas votre CEAM ou assurance privée.",
                },
                services: {
                  banks: ["CaixaBank", "Caja Rural de Granada", "Santander", "BBVA"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "Yoigo"],
                },
                education: {
                  universities: ["Universidad de Granada (UGR)"],
                },
                misc: {
                  visa_note: "Le visa étudiant et le NIE sont obligatoires pour les étudiants non-européens.",
                  fun_fact: "L'Université de Grenade est l'une des plus prestigieuses d'Espagne et accueille le plus grand nombre d'étudiants Erasmus.",
                }
              },
              en: {
                name: "Granada",
                description2: "Located at the foot of the Sierra Nevada mountains, Granada is famous for its majestic Alhambra palace. It is a quintessential student city, known for its free tapas culture.",
                neighborhoods: ["Albaicín", "Realejo", "Centro", "Zaidín"],
                housing_howto: "The cost of living and housing is very low. It is easy to find a room in a shared flat for a very reasonable price.",
                tips: ["For every drink you order in a bar, you get a free tapa. It's a way of life!", "Book your tickets for the Alhambra months in advance.", "Enjoy the proximity to the ski slopes in winter."],
                emergency: { universal: "112", police: "092", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["Virgen de las Nieves University Hospital", "San Cecilio Clinical University Hospital"],
                  note: "Health services are of good quality. Don't forget your EHIC or private insurance.",
                },
                services: {
                  banks: ["CaixaBank", "Caja Rural de Granada", "Santander", "BBVA"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "Yoigo"],
                },
                education: {
                  universities: ["University of Granada (UGR)"],
                },
                misc: {
                  visa_note: "A student visa and the NIE are mandatory for non-EU students.",
                  fun_fact: "The University of Granada is one of the most prestigious in Spain and hosts the largest number of Erasmus students.",
                }
              },
            },
          },
        ],
      },
      {
        slug: "italy",
        nameEn: "Italy",
        nameFr: "Italie",
        cities: [
          // 1. Rome
          {
            slug: "rome",
            nameEn: "Rome",
            nameFr: "Rome",
            budget: { food_per_month_eur: 280, housing_flatshare_eur: 550, transport_pass_eur: 35, beer_pub_eur: 5, cinema_eur: 9 },
            content: {
              fr: {
                name: "Rome",
                description2: "La 'Ville Éternelle' est un musée à ciel ouvert. Étudier à Rome, c'est vivre au milieu de 3000 ans d'histoire, tout en profitant d'une métropole animée et d'une cuisine délicieuse.",
                neighborhoods: ["San Lorenzo", "Trastevere", "Monti", "Pigneto"],
                housing_howto: "San Lorenzo est le quartier étudiant. La colocation ('stanza in affitto') est la norme. Des sites comme Immobiliare.it, Subito.it ou les groupes Facebook sont essentiels.",
                tips: ["La carte Metrebus est utile pour les transports.", "Explorez les quartiers moins touristiques pour trouver des trattorias authentiques et abordables.", "Le café se boit 'al banco' (au comptoir)."],
                emergency: { universal: "112", police: "113", ambulance: "118", fire: "115" },
                health: {
                  hospitals: ["Policlinico Umberto I", "Ospedale San Camillo-Forlanini", "Policlinico Universitario Agostino Gemelli"],
                  note: "La Tessera Sanitaria est nécessaire pour les résidents. Les étudiants de l'UE utilisent leur CEAM.",
                },
                services: {
                  banks: ["Intesa Sanpaolo", "UniCredit", "BNL (groupe BNP Paribas)", "Poste Italiane"],
                  phone_carriers: ["TIM", "Vodafone", "Wind Tre", "Iliad"],
                },
                education: {
                  universities: ["Sapienza Università di Roma", "Università degli Studi di Roma 'Tor Vergata'", "LUISS Guido Carli"],
                },
                misc: {
                  visa_note: "Un visa étudiant et un 'permesso di soggiorno' (permis de séjour) sont nécessaires pour les étudiants non-européens.",
                  fun_fact: "Rome compte plus de 900 églises et 280 fontaines. La fontaine de Trevi est la plus célèbre, où des milliers d'euros sont jetés chaque jour.",
                }
              },
              en: {
                name: "Rome",
                description2: "The 'Eternal City' is an open-air museum. Studying in Rome means living amidst 3000 years of history while enjoying a lively metropolis and delicious cuisine.",
                neighborhoods: ["San Lorenzo", "Trastevere", "Monti", "Pigneto"],
                housing_howto: "San Lorenzo is the student district. Renting a room ('stanza in affitto') is the norm. Websites like Immobiliare.it, Subito.it, or Facebook groups are essential.",
                tips: ["The Metrebus card is useful for transport.", "Explore less touristy neighborhoods to find authentic and affordable trattorias.", "Coffee is drunk 'al banco' (at the counter)."],
                emergency: { universal: "112", police: "113", ambulance: "118", fire: "115" },
                health: {
                  hospitals: ["Policlinico Umberto I", "San Camillo-Forlanini Hospital", "Agostino Gemelli University Policlinic"],
                  note: "The 'Tessera Sanitaria' is necessary for residents. EU students use their EHIC.",
                },
                services: {
                  banks: ["Intesa Sanpaolo", "UniCredit", "BNL (BNP Paribas group)", "Poste Italiane"],
                  phone_carriers: ["TIM", "Vodafone", "Wind Tre", "Iliad"],
                },
                education: {
                  universities: ["Sapienza University of Rome", "University of Rome 'Tor Vergata'", "LUISS Guido Carli"],
                },
                misc: {
                  visa_note: "A student visa and a 'permesso di soggiorno' (residence permit) are required for non-EU students.",
                  fun_fact: "Rome has over 900 churches and 280 fountains. The Trevi Fountain is the most famous, where thousands of euros are thrown every day.",
                }
              },
            },
          },
          // 2. Milan
          {
            slug: "milan",
            nameEn: "Milan",
            nameFr: "Milan",
            budget: { food_per_month_eur: 300, housing_flatshare_eur: 600, transport_pass_eur: 22, beer_pub_eur: 6, cinema_eur: 10 },
            content: {
              fr: {
                name: "Milan",
                description2: "Capitale économique et de la mode en Italie, Milan est une ville dynamique, moderne et internationale. Elle abrite des universités de renommée mondiale, notamment dans le design, la mode et l'économie.",
                neighborhoods: ["Navigli", "Brera", "Città Studi", "Isola"],
                housing_howto: "Le logement est cher et compétitif. Città Studi est le principal quartier universitaire. Commencez vos recherches bien à l'avance.",
                tips: ["L'abonnement mensuel ATM pour les moins de 27 ans est très avantageux.", "Ne manquez pas l'aperitivo, une tradition milanaise.", "Profitez de la proximité des lacs (Côme, Majeur) pour des escapades."],
                emergency: { universal: "112", police: "113", ambulance: "118", fire: "115" },
                health: {
                  hospitals: ["Ospedale Maggiore Policlinico", "Ospedale Niguarda Ca' Granda", "Istituto Europeo di Oncologia"],
                  note: "Les étudiants de l'UE doivent avoir la CEAM. Les autres doivent souscrire une assurance privée.",
                },
                services: {
                  banks: ["UniCredit", "Intesa Sanpaolo", "Banca Popolare di Milano (BPM)"],
                  phone_carriers: ["TIM", "Vodafone", "Wind Tre", "Iliad"],
                },
                education: {
                  universities: ["Politecnico di Milano", "Università Bocconi", "Università degli Studi di Milano (Statale)"],
                },
                misc: {
                  visa_note: "Un visa étudiant et un 'permesso di soggiorno' sont nécessaires pour les étudiants non-européens.",
                  fun_fact: "Milan abrite 'La Cène' de Léonard de Vinci, l'une des œuvres d'art les plus célèbres au monde, visible dans le réfectoire du couvent Santa Maria delle Grazie.",
                }
              },
              en: {
                name: "Milan",
                description2: "Italy's economic and fashion capital, Milan is a dynamic, modern, and international city. It is home to world-renowned universities, especially in design, fashion, and economics.",
                neighborhoods: ["Navigli", "Brera", "Città Studi", "Isola"],
                housing_howto: "Housing is expensive and competitive. Città Studi is the main university district. Start your search well in advance.",
                tips: ["The monthly ATM pass for under 27s is a great deal.", "Don't miss the aperitivo, a Milanese tradition.", "Take advantage of the proximity to the lakes (Como, Maggiore) for getaways."],
                emergency: { universal: "112", police: "113", ambulance: "118", fire: "115" },
                health: {
                  hospitals: ["Ospedale Maggiore Policlinico", "Niguarda Ca' Granda Hospital", "European Institute of Oncology"],
                  note: "EU students must have the EHIC. Others must take out private insurance.",
                },
                services: {
                  banks: ["UniCredit", "Intesa Sanpaolo", "Banca Popolare di Milano (BPM)"],
                  phone_carriers: ["TIM", "Vodafone", "Wind Tre", "Iliad"],
                },
                education: {
                  universities: ["Polytechnic University of Milan", "Bocconi University", "University of Milan (Statale)"],
                },
                misc: {
                  visa_note: "A student visa and a 'permesso di soggiorno' are required for non-EU students.",
                  fun_fact: "Milan is home to Leonardo da Vinci's 'The Last Supper,' one of the most famous works of art in the world, visible in the refectory of the Santa Maria delle Grazie convent.",
                }
              },
            },
          },
          // 3. Florence
          {
            slug: "florence",
            nameEn: "Florence",
            nameFr: "Florence",
            budget: { food_per_month_eur: 270, housing_flatshare_eur: 450, transport_pass_eur: 35, beer_pub_eur: 5, cinema_eur: 8 },
            content: {
              fr: {
                name: "Florence",
                description2: "Berceau de la Renaissance, Florence est un trésor d'art et d'architecture. C'est une ville à taille humaine, parfaite pour être explorée à pied, avec une atmosphère étudiante internationale très présente.",
                neighborhoods: ["Oltrarno", "Santa Croce", "San Niccolò", "San Frediano"],
                housing_howto: "Le centre historique est magnifique mais cher. Cherchez dans les quartiers légèrement excentrés pour de meilleurs prix. La colocation est très courante.",
                tips: ["Marchez ! C'est la meilleure façon de découvrir les secrets de la ville.", "Visitez la Galerie des Offices et la Galerie de l'Académie (pour voir le David de Michel-Ange).", "Montez au sommet du Duomo pour une vue imprenable."],
                emergency: { universal: "112", police: "113", ambulance: "118", fire: "115" },
                health: {
                  hospitals: ["Azienda Ospedaliero-Universitaria Careggi", "Ospedale Santa Maria Nuova"],
                  note: "Les mêmes conditions que dans le reste de l'Italie s'appliquent (CEAM pour l'UE, assurance privée pour les autres).",
                },
                services: {
                  banks: ["Intesa Sanpaolo", "UniCredit", "Monte dei Paschi di Siena"],
                  phone_carriers: ["TIM", "Vodafone", "Wind Tre"],
                },
                education: {
                  universities: ["Università degli Studi di Firenze (UNIFI)", "European University Institute", "Polimoda"],
                },
                misc: {
                  visa_note: "Un visa étudiant et un 'permesso di soggiorno' sont nécessaires pour les étudiants non-européens.",
                  fun_fact: "Le 'syndrome de Stendhal' a été nommé d'après l'écrivain français qui a ressenti des vertiges et des palpitations face à la profusion d'œuvres d'art lors de sa visite à Florence en 1817.",
                }
              },
              en: {
                name: "Florence",
                description2: "The birthplace of the Renaissance, Florence is a treasure trove of art and architecture. It is a walkable city, perfect for exploring on foot, with a strong international student atmosphere.",
                neighborhoods: ["Oltrarno", "Santa Croce", "San Niccolò", "San Frediano"],
                housing_howto: "The historic center is beautiful but expensive. Look in slightly outlying neighborhoods for better prices. Flatsharing is very common.",
                tips: ["Walk! It's the best way to discover the city's secrets.", "Visit the Uffizi Gallery and the Accademia Gallery (to see Michelangelo's David).", "Climb to the top of the Duomo for a breathtaking view."],
                emergency: { universal: "112", police: "113", ambulance: "118", fire: "115" },
                health: {
                  hospitals: ["Careggi University Hospital", "Santa Maria Nuova Hospital"],
                  note: "The same conditions as in the rest of Italy apply (EHIC for EU, private insurance for others).",
                },
                services: {
                  banks: ["Intesa Sanpaolo", "UniCredit", "Monte dei Paschi di Siena"],
                  phone_carriers: ["TIM", "Vodafone", "Wind Tre"],
                },
                education: {
                  universities: ["University of Florence (UNIFI)", "European University Institute", "Polimoda"],
                },
                misc: {
                  visa_note: "A student visa and a 'permesso di soggiorno' are required for non-EU students.",
                  fun_fact: "The 'Stendhal syndrome' was named after the French writer who experienced dizziness and palpitations when faced with the abundance of artworks during his visit to Florence in 1817.",
                }
              },
            },
          },
          // 4. Bologne
          {
            slug: "bologna",
            nameEn: "Bologna",
            nameFr: "Bologne",
            budget: { food_per_month_eur: 260, housing_flatshare_eur: 400, transport_pass_eur: 27, beer_pub_eur: 5, cinema_eur: 8 },
            content: {
              fr: {
                name: "Bologne",
                description2: "Surnommée 'la Dotta, la Grassa, la Rossa' (la Savante, la Grasse, la Rouge), Bologne abrite la plus ancienne université du monde occidental. C'est une ville étudiante animée, réputée pour sa gastronomie et ses arcades.",
                neighborhoods: ["Centro Storico", "Bolognina", "Porto-Saragozza"],
                housing_howto: "La demande de logements étudiants est très élevée. Il est crucial de commencer à chercher des mois à l'avance. Les appartements en colocation sont l'option principale.",
                tips: ["Explorez la ville à l'abri sous ses 40 km d'arcades.", "Montez à la Tour Asinelli pour une vue panoramique.", "Dégustez les spécialités locales : tagliatelles al ragù, mortadelle, lasagnes."],
                emergency: { universal: "112", police: "113", ambulance: "118", fire: "115" },
                health: {
                  hospitals: ["Policlinico Sant'Orsola-Malpighi", "Ospedale Maggiore"],
                  note: "Les mêmes conditions que dans le reste de l'Italie s'appliquent (CEAM pour l'UE, assurance privée pour les autres).",
                },
                services: {
                  banks: ["Intesa Sanpaolo", "UniCredit", "BPER Banca"],
                  phone_carriers: ["TIM", "Vodafone", "Wind Tre"],
                },
                education: {
                  universities: ["Università di Bologna (UNIBO)"],
                },
                misc: {
                  visa_note: "Un visa étudiant et un 'permesso di soggiorno' sont nécessaires pour les étudiants non-européens.",
                  fun_fact: "L'Université de Bologne, fondée en 1088, est la plus ancienne université du monde en fonctionnement continu.",
                }
              },
              en: {
                name: "Bologna",
                description2: "Nicknamed 'la Dotta, la Grassa, la Rossa' (the Learned, the Fat, the Red), Bologna is home to the oldest university in the Western world. It is a lively student city, renowned for its gastronomy and arcades.",
                neighborhoods: ["Centro Storico", "Bolognina", "Porto-Saragozza"],
                housing_howto: "The demand for student housing is very high. It is crucial to start looking months in advance. Shared apartments are the main option.",
                tips: ["Explore the city sheltered under its 40 km of arcades.", "Climb the Asinelli Tower for a panoramic view.", "Taste the local specialties: tagliatelle al ragù, mortadella, lasagna."],
                emergency: { universal: "112", police: "113", ambulance: "118", fire: "115" },
                health: {
                  hospitals: ["Sant'Orsola-Malpighi Polyclinic", "Maggiore Hospital"],
                  note: "The same conditions as in the rest of Italy apply (EHIC for EU, private insurance for others).",
                },
                services: {
                  banks: ["Intesa Sanpaolo", "UniCredit", "BPER Banca"],
                  phone_carriers: ["TIM", "Vodafone", "Wind Tre"],
                },
                education: {
                  universities: ["University of Bologna (UNIBO)"],
                },
                misc: {
                  visa_note: "A student visa and a 'permesso di soggiorno' are required for non-EU students.",
                  fun_fact: "The University of Bologna, founded in 1088, is the oldest continuously operating university in the world.",
                }
              },
            },
          },
        ],
      },
      {
        slug: "portugal",
        nameEn: "Portugal",
        nameFr: "Portugal",
        cities: [
          // 1. Lisbonne
          {
            slug: "lisbon",
            nameEn: "Lisbon",
            nameFr: "Lisbonne",
            budget: { food_per_month_eur: 250, housing_flatshare_eur: 400, transport_pass_eur: 30, beer_pub_eur: 2, cinema_eur: 7 },
            content: {
              fr: {
                name: "Lisbonne",
                description2: "Capitale du Portugal, Lisbonne séduit par ses collines, ses tramways jaunes emblématiques et son ambiance décontractée. Le coût de la vie y est relativement bas pour une capitale européenne.",
                neighborhoods: ["Alfama", "Bairro Alto", "Cais do Sodré", "Graça"],
                housing_howto: "La colocation est la solution la plus courante. Les prix ont augmenté, mais restent abordables. Des sites comme Idealista.pt ou les groupes Facebook sont très actifs.",
                tips: ["La carte Navegante permet de se déplacer à bas prix.", "Goûtez les pastéis de nata à Belém.", "Profitez des nombreux 'miradouros' (points de vue) pour admirer la ville."],
                emergency: { universal: "112", police: "112", ambulance: "112", fire: "112" },
                health: {
                  hospitals: ["Centro Hospitalar Universitário de Lisboa Norte (Hospital de Santa Maria)", "Centro Hospitalar Universitário de Lisboa Central"],
                  note: "La CEAM est nécessaire pour les étudiants de l'UE. Une assurance privée est recommandée pour les autres.",
                },
                services: {
                  banks: ["Caixa Geral de Depósitos", "Millennium BCP", "Santander Totta", "Novo Banco"],
                  phone_carriers: ["MEO", "NOS", "Vodafone"],
                },
                education: {
                  universities: ["Universidade de Lisboa", "Universidade NOVA de Lisboa", "Católica Lisbon School of Business & Economics"],
                },
                misc: {
                  visa_note: "Un visa étudiant est requis pour les séjours de plus de 90 jours pour les non-ressortissants de l'UE.",
                  fun_fact: "Lisbonne est l'une des plus anciennes villes d'Europe occidentale, précédant d'autres capitales comme Londres, Paris et Rome de plusieurs siècles.",
                }
              },
              en: {
                name: "Lisbon",
                description2: "The capital of Portugal, Lisbon charms with its hills, iconic yellow trams, and relaxed atmosphere. The cost of living is relatively low for a European capital.",
                neighborhoods: ["Alfama", "Bairro Alto", "Cais do Sodré", "Graça"],
                housing_howto: "Flatsharing is the most common solution. Prices have risen but remain affordable. Websites like Idealista.pt or Facebook groups are very active.",
                tips: ["The Navegante card allows for low-cost travel.", "Taste the pastéis de nata in Belém.", "Enjoy the many 'miradouros' (viewpoints) to admire the city."],
                emergency: { universal: "112", police: "112", ambulance: "112", fire: "112" },
                health: {
                  hospitals: ["North Lisbon University Hospital Center (Santa Maria Hospital)", "Central Lisbon University Hospital Center"],
                  note: "The EHIC is necessary for EU students. Private insurance is recommended for others.",
                },
                services: {
                  banks: ["Caixa Geral de Depósitos", "Millennium BCP", "Santander Totta", "Novo Banco"],
                  phone_carriers: ["MEO", "NOS", "Vodafone"],
                },
                education: {
                  universities: ["University of Lisbon", "NOVA University of Lisbon", "Católica Lisbon School of Business & Economics"],
                },
                misc: {
                  visa_note: "A student visa is required for stays longer than 90 days for non-EU nationals.",
                  fun_fact: "Lisbon is one of the oldest cities in Western Europe, predating other capitals like London, Paris, and Rome by centuries.",
                }
              },
            },
          },
          // 2. Porto
          {
            slug: "porto",
            nameEn: "Porto",
            nameFr: "Porto",
            budget: { food_per_month_eur: 230, housing_flatshare_eur: 320, transport_pass_eur: 30, beer_pub_eur: 2, cinema_eur: 6 },
            content: {
              fr: {
                name: "Porto",
                description2: "Deuxième ville du Portugal, Porto est célèbre pour son vin, son centre historique classé à l'UNESCO et le fleuve Douro. C'est une ville authentique avec une vie étudiante très active.",
                neighborhoods: ["Ribeira", "Cedofeita", "Bonfim", "Vila Nova de Gaia"],
                housing_howto: "Le logement est moins cher qu'à Lisbonne. La colocation est facile à trouver, notamment près du pôle universitaire de Asprela.",
                tips: ["La carte Andante est utilisée pour les transports en commun.", "Traversez le pont Dom Luís I pour visiter les caves de vin de Porto à Gaia.", "Goûtez la Francesinha, un sandwich local très copieux."],
                emergency: { universal: "112", police: "112", ambulance: "112", fire: "112" },
                health: {
                  hospitals: ["Centro Hospitalar Universitário do Porto (Hospital de Santo António)", "Hospital de São João"],
                  note: "Les mêmes conditions que pour Lisbonne s'appliquent (CEAM ou assurance privée).",
                },
                services: {
                  banks: ["Caixa Geral de Depósitos", "Millennium BCP", "Santander Totta"],
                  phone_carriers: ["MEO", "NOS", "Vodafone"],
                },
                education: {
                  universities: ["Universidade do Porto", "Universidade Católica Portuguesa (campus de Porto)"],
                },
                misc: {
                  visa_note: "Un visa étudiant est requis pour les séjours de plus de 90 jours pour les non-ressortissants de l'UE.",
                  fun_fact: "La librairie Lello à Porto, avec son escalier rouge emblématique, est considérée comme l'une des plus belles du monde et aurait inspiré J.K. Rowling pour la bibliothèque de Poudlard.",
                }
              },
              en: {
                name: "Porto",
                description2: "Portugal's second city, Porto is famous for its wine, its UNESCO-listed historic center, and the Douro River. It is an authentic city with a very active student life.",
                neighborhoods: ["Ribeira", "Cedofeita", "Bonfim", "Vila Nova de Gaia"],
                housing_howto: "Housing is cheaper than in Lisbon. Flatsharing is easy to find, especially near the Asprela university hub.",
                tips: ["The Andante card is used for public transport.", "Cross the Dom Luís I Bridge to visit the Port wine cellars in Gaia.", "Try the Francesinha, a very hearty local sandwich."],
                emergency: { universal: "112", police: "112", ambulance: "112", fire: "112" },
                health: {
                  hospitals: ["Porto University Hospital Center (Santo António Hospital)", "São João Hospital"],
                  note: "The same conditions as for Lisbon apply (EHIC or private insurance).",
                },
                services: {
                  banks: ["Caixa Geral de Depósitos", "Millennium BCP", "Santander Totta"],
                  phone_carriers: ["MEO", "NOS", "Vodafone"],
                },
                education: {
                  universities: ["University of Porto", "Catholic University of Portugal (Porto campus)"],
                },
                misc: {
                  visa_note: "A student visa is required for stays longer than 90 days for non-EU nationals.",
                  fun_fact: "The Lello Bookstore in Porto, with its iconic red staircase, is considered one of the most beautiful in the world and is said to have inspired J.K. Rowling for the Hogwarts library.",
                }
              },
            },
          },
        ],
      },
      // ... Autres pays européens
      {
        slug: "united-kingdom",
        nameEn: "United Kingdom",
        nameFr: "Royaume-Uni",
        cities: [
          // 1. Londres
          {
            slug: "london",
            nameEn: "London",
            nameFr: "Londres",
            budget: { food_per_month_eur: 400, housing_flatshare_eur: 900, transport_pass_eur: 180, beer_pub_eur: 7, cinema_eur: 15 },
            content: {
              fr: {
                name: "Londres",
                description2: "Londres est une mégalopole mondiale, un carrefour de cultures, de finances et de créativité. Étudier ici, c'est s'immerger dans une ville à l'énergie incomparable, avec des universités de premier plan.",
                neighborhoods: ["Shoreditch", "Camden", "Notting Hill", "Brixton"],
                housing_howto: "Le logement est très cher. La colocation ('flatshare') est quasi obligatoire. Des sites comme SpareRoom ou Rightmove sont incontournables. Pensez aux résidences étudiantes.",
                tips: ["La carte Oyster ou le paiement sans contact est essentiel pour les transports (TfL).", "De nombreux musées (British Museum, Tate Modern) sont gratuits.", "Explorez les différents marchés : Borough Market pour la nourriture, Camden pour l'alternatif."],
                emergency: { universal: "999", police: "999", ambulance: "999", fire: "999" },
                health: {
                  hospitals: ["St Thomas' Hospital", "University College Hospital", "King's College Hospital"],
                  note: "Le NHS (National Health Service) est le système de santé public. Les étudiants étrangers payent une surtaxe (IHS) lors de leur demande de visa pour y avoir accès.",
                },
                services: {
                  banks: ["HSBC", "Barclays", "Lloyds Bank", "NatWest", "Monzo", "Revolut"],
                  phone_carriers: ["EE", "O2", "Vodafone", "Three", "Giffgaff"],
                },
                education: {
                  universities: ["Imperial College London", "University College London (UCL)", "London School of Economics (LSE)", "King's College London"],
                },
                misc: {
                  visa_note: "Un visa étudiant ('Student visa') est nécessaire pour les étudiants non-britanniques (y compris de l'UE depuis le Brexit) pour les cours de plus de 6 mois.",
                  fun_fact: "Le métro de Londres, surnommé 'The Tube', est le plus ancien réseau de transport souterrain au monde, inauguré en 1863.",
                }
              },
              en: {
                name: "London",
                description2: "London is a global megalopolis, a crossroads of cultures, finance, and creativity. Studying here means immersing yourself in a city with unparalleled energy, with leading universities.",
                neighborhoods: ["Shoreditch", "Camden", "Notting Hill", "Brixton"],
                housing_howto: "Housing is very expensive. Flatsharing is almost mandatory. Websites like SpareRoom or Rightmove are essential. Consider student residences.",
                tips: ["An Oyster card or contactless payment is essential for transport (TfL).", "Many museums (British Museum, Tate Modern) are free.", "Explore the different markets: Borough Market for food, Camden for alternative style."],
                emergency: { universal: "999", police: "999", ambulance: "999", fire: "999" },
                health: {
                  hospitals: ["St Thomas' Hospital", "University College Hospital", "King's College Hospital"],
                  note: "The NHS (National Health Service) is the public health system. International students pay a surcharge (IHS) with their visa application to access it.",
                },
                services: {
                  banks: ["HSBC", "Barclays", "Lloyds Bank", "NatWest", "Monzo", "Revolut"],
                  phone_carriers: ["EE", "O2", "Vodafone", "Three", "Giffgaff"],
                },
                education: {
                  universities: ["Imperial College London", "University College London (UCL)", "London School of Economics (LSE)", "King's College London"],
                },
                misc: {
                  visa_note: "A Student visa is required for non-UK students (including EU since Brexit) for courses longer than 6 months.",
                  fun_fact: "The London Underground, nicknamed 'The Tube,' is the world's oldest underground transport network, opened in 1863.",
                }
              },
            },
          },
        ],
      },
      {
        slug: "germany",
        nameEn: "Germany",
        nameFr: "Allemagne",
        cities: [
          // 1. Berlin
          {
            slug: "berlin",
            nameEn: "Berlin",
            nameFr: "Berlin",
            budget: { food_per_month_eur: 280, housing_flatshare_eur: 550, transport_pass_eur: 49, beer_pub_eur: 4, cinema_eur: 10 },
            content: {
              fr: {
                name: "Berlin",
                description2: "Capitale de l'Allemagne, Berlin est une ville d'histoire, de culture alternative et de créativité. Relativement abordable pour une grande capitale, elle attire des artistes et des étudiants du monde entier.",
                neighborhoods: ["Kreuzberg", "Neukölln", "Friedrichshain", "Prenzlauer Berg"],
                housing_howto: "Le marché du logement est très tendu. La colocation ('WG' - Wohngemeinschaft) est la norme. Utilisez WG-Gesucht.de. L'Anmeldung (déclaration de domicile) est une étape administrative cruciale.",
                tips: ["Le Deutschlandticket à 49€/mois permet de voyager sur tous les transports régionaux en Allemagne.", "Explorez l'East Side Gallery, un morceau du Mur de Berlin transformé en galerie d'art.", "La vie nocturne est légendaire, avec des clubs comme le Berghain."],
                emergency: { universal: "112", police: "110", ambulance: "112", fire: "112" },
                health: {
                  hospitals: ["Charité - Universitätsmedizin Berlin", "Vivantes Klinikum"],
                  note: "L'assurance maladie (publique ou privée) est obligatoire pour tous les résidents, y compris les étudiants.",
                },
                services: {
                  banks: ["Deutsche Bank", "Commerzbank", "Sparkasse", "N26"],
                  phone_carriers: ["Deutsche Telekom", "Vodafone", "O2"],
                },
                education: {
                  universities: ["Humboldt-Universität zu Berlin", "Freie Universität Berlin", "Technische Universität Berlin (TU Berlin)"],
                },
                misc: {
                  visa_note: "Un visa étudiant et un permis de séjour sont nécessaires pour les étudiants non-européens.",
                  fun_fact: "Berlin compte plus de ponts que Venise (environ 1700) et plus de musées que de jours de pluie par an.",
                }
              },
              en: {
                name: "Berlin",
                description2: "The capital of Germany, Berlin is a city of history, alternative culture, and creativity. Relatively affordable for a major capital, it attracts artists and students from all over the world.",
                neighborhoods: ["Kreuzberg", "Neukölln", "Friedrichshain", "Prenzlauer Berg"],
                housing_howto: "The housing market is very tight. Shared flats ('WG' - Wohngemeinschaft) are the norm. Use WG-Gesucht.de. The 'Anmeldung' (address registration) is a crucial administrative step.",
                tips: ["The €49/month Deutschlandticket allows travel on all regional transport in Germany.", "Explore the East Side Gallery, a section of the Berlin Wall turned into an art gallery.", "The nightlife is legendary, with clubs like Berghain."],
                emergency: { universal: "112", police: "110", ambulance: "112", fire: "112" },
                health: {
                  hospitals: ["Charité - Universitätsmedizin Berlin", "Vivantes Klinikum"],
                  note: "Health insurance (public or private) is mandatory for all residents, including students.",
                },
                services: {
                  banks: ["Deutsche Bank", "Commerzbank", "Sparkasse", "N26"],
                  phone_carriers: ["Deutsche Telekom", "Vodafone", "O2"],
                },
                education: {
                  universities: ["Humboldt University of Berlin", "Free University of Berlin", "Technical University of Berlin (TU Berlin)"],
                },
                misc: {
                  visa_note: "A student visa and residence permit are required for non-EU students.",
                  fun_fact: "Berlin has more bridges than Venice (around 1700) and more museums than rainy days per year.",
                }
              },
            },
          },
        ],
      },
      // ...
    ],
  },
  {
    slug: "north-america",
    nameEn: "North America",
    nameFr: "Amérique du Nord",
    countries: [
      {
        slug: "canada",
        nameEn: "Canada",
        nameFr: "Canada",
        cities: [
          // 1. Montréal
          {
            slug: "montreal",
            nameEn: "Montreal",
            nameFr: "Montréal",
            budget: { food_per_month_eur: 300, housing_flatshare_eur: 500, transport_pass_eur: 58, beer_pub_eur: 6, cinema_eur: 11 },
            content: {
              fr: {
                name: "Montréal",
                description2: "Plus grande ville du Québec, Montréal est une métropole bilingue et cosmopolite qui mélange le charme européen et l'énergie nord-américaine. C'est l'une des meilleures villes étudiantes au monde.",
                neighborhoods: ["Le Plateau-Mont-Royal", "Mile End", "Vieux-Montréal", "Griffintown"],
                housing_howto: "La colocation est très répandue et abordable. Les baux commencent souvent le 1er juillet. Kijiji et les groupes Facebook sont les plateformes principales.",
                tips: ["La carte OPUS est indispensable pour le réseau STM (métro et bus).", "Investissez dans un bon manteau d'hiver !", "Profitez des nombreux festivals gratuits en été (Jazz, Francos)."],
                emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
                health: {
                  hospitals: ["Centre universitaire de santé McGill (CUSM)", "Centre hospitalier de l'Université de Montréal (CHUM)"],
                  note: "L'assurance maladie est obligatoire. Les étudiants français peuvent bénéficier d'une entente de sécurité sociale, les autres doivent souscrire une assurance privée.",
                },
                services: {
                  banks: ["Desjardins", "Banque Nationale du Canada", "RBC", "TD", "BMO"],
                  phone_carriers: ["Bell", "Telus", "Rogers", "Vidéotron", "Fizz"],
                },
                education: {
                  universities: ["Université McGill", "Université de Montréal (UdeM)", "Concordia University", "HEC Montréal"],
                },
                misc: {
                  visa_note: "Un permis d'études et un CAQ (Certificat d'Acceptation du Québec) sont nécessaires pour les étudiants internationaux.",
                  fun_fact: "Montréal possède un 'réseau souterrain' (RÉSO) de plus de 32 km de tunnels reliant métros, centres commerciaux et universités, très pratique en hiver.",
                }
              },
              en: {
                name: "Montreal",
                description2: "The largest city in Quebec, Montreal is a bilingual and cosmopolitan metropolis that blends European charm with North American energy. It is one of the best student cities in the world.",
                neighborhoods: ["Le Plateau-Mont-Royal", "Mile End", "Old Montreal", "Griffintown"],
                housing_howto: "Flatsharing is very common and affordable. Leases often start on July 1st. Kijiji and Facebook groups are the main platforms.",
                tips: ["The OPUS card is essential for the STM network (metro and bus).", "Invest in a good winter coat!", "Enjoy the many free summer festivals (Jazz, Francos)."],
                emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
                health: {
                  hospitals: ["McGill University Health Centre (MUHC)", "Centre hospitalier de l'Université de Montréal (CHUM)"],
                  note: "Health insurance is mandatory. French students may benefit from a social security agreement; others must take out private insurance.",
                },
                services: {
                  banks: ["Desjardins", "National Bank of Canada", "RBC", "TD", "BMO"],
                  phone_carriers: ["Bell", "Telus", "Rogers", "Vidéotron", "Fizz"],
                },
                education: {
                  universities: ["McGill University", "Université de Montréal (UdeM)", "Concordia University", "HEC Montréal"],
                },
                misc: {
                  visa_note: "A study permit and a CAQ (Quebec Acceptance Certificate) are required for international students.",
                  fun_fact: "Montreal has an 'underground city' (RÉSO) of over 32 km of tunnels connecting metros, shopping malls, and universities, which is very convenient in winter.",
                }
              },
            },
          },
        ],
      },
      {
        slug: "usa",
        nameEn: "USA",
        nameFr: "États-Unis",
        cities: [
          // 1. New York
          {
            slug: "new-york",
            nameEn: "New York",
            nameFr: "New York",
            budget: { food_per_month_eur: 500, housing_flatshare_eur: 1300, transport_pass_eur: 120, beer_pub_eur: 8, cinema_eur: 16 },
            content: {
              fr: {
                name: "New York",
                description2: "La 'ville qui ne dort jamais' est un centre mondial de la finance, de la culture et des médias. Étudier à New York est une expérience intense et coûteuse, mais incroyablement enrichissante.",
                neighborhoods: ["East Village", "Williamsburg (Brooklyn)", "Upper West Side", "Bushwick (Brooklyn)"],
                housing_howto: "Le logement est extrêmement cher et compétitif. La colocation est la seule option viable pour la plupart. Les résidences universitaires sont une bonne alternative pour la première année.",
                tips: ["La MetroCard est essentielle pour le métro et les bus.", "Profitez des nombreux parcs, comme Central Park et Prospect Park.", "Beaucoup de musées proposent des entrées 'pay-what-you-wish' (payez ce que vous voulez)."],
                emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
                health: {
                  hospitals: ["NYU Langone Health", "Mount Sinai Hospital", "NewYork-Presbyterian Hospital"],
                  note: "Le système de santé est privé et extrêmement cher. Une assurance santé étudiante complète est absolument obligatoire et souvent fournie par l'université.",
                },
                services: {
                  banks: ["Chase", "Bank of America", "Citibank", "Wells Fargo"],
                  phone_carriers: ["Verizon", "AT&T", "T-Mobile"],
                },
                education: {
                  universities: ["Columbia University", "New York University (NYU)", "The Juilliard School", "Fordham University"],
                },
                misc: {
                  visa_note: "Un visa étudiant (F-1 ou J-1) est requis. Le processus est long et rigoureux.",
                  fun_fact: "Plus de 800 langues sont parlées à New York, ce qui en fait la ville la plus linguistiquement diverse au monde.",
                }
              },
              en: {
                name: "New York",
                description2: "The 'city that never sleeps' is a global center for finance, culture, and media. Studying in New York is an intense and expensive experience, but incredibly rewarding.",
                neighborhoods: ["East Village", "Williamsburg (Brooklyn)", "Upper West Side", "Bushwick (Brooklyn)"],
                housing_howto: "Housing is extremely expensive and competitive. Sharing a flat is the only viable option for most. University residences are a good alternative for the first year.",
                tips: ["A MetroCard is essential for the subway and buses.", "Enjoy the many parks, like Central Park and Prospect Park.", "Many museums offer 'pay-what-you-wish' admission."],
                emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
                health: {
                  hospitals: ["NYU Langone Health", "Mount Sinai Hospital", "NewYork-Presbyterian Hospital"],
                  note: "The healthcare system is private and extremely expensive. Comprehensive student health insurance is absolutely mandatory and often provided by the university.",
                },
                services: {
                  banks: ["Chase", "Bank of America", "Citibank", "Wells Fargo"],
                  phone_carriers: ["Verizon", "AT&T", "T-Mobile"],
                },
                education: {
                  universities: ["Columbia University", "New York University (NYU)", "The Juilliard School", "Fordham University"],
                },
                misc: {
                  visa_note: "A student visa (F-1 or J-1) is required. The process is long and rigorous.",
                  fun_fact: "Over 800 languages are spoken in New York City, making it the most linguistically diverse city in the world.",
                }
              },
            },
          },
        ],
      },
    ],
  },
  {
    slug: "asia",
    nameEn: "Asia",
    nameFr: "Asie",
    countries: [
      {
        slug: "japan",
        nameEn: "Japan",
        nameFr: "Japon",
        cities: [
          // 1. Tokyo
          {
            slug: "tokyo",
            nameEn: "Tokyo",
            nameFr: "Tokyo",
            budget: { food_per_month_eur: 400, housing_flatshare_eur: 700, transport_pass_eur: 90, beer_pub_eur: 5, cinema_eur: 15 },
            content: {
              fr: {
                name: "Tokyo",
                description2: "Mélange fascinant de tradition et de modernité, Tokyo est une mégalopole vibrante et sûre. Ses universités de classe mondiale et sa culture unique offrent une expérience étudiante inoubliable.",
                neighborhoods: ["Shibuya", "Shinjuku", "Shimokitazawa", "Kichijoji"],
                housing_howto: "Le logement est cher. Les 'share houses' ou les résidences universitaires sont les options les plus courantes pour les étudiants. Des sites comme GaijinPot peuvent aider.",
                tips: ["Une carte Suica ou Pasmo est indispensable pour les transports.", "Les 'konbini' (supérettes) sont parfaits pour des repas abordables et de qualité.", "Respectez les coutumes locales (politesse, pas de pourboire)."],
                emergency: { universal: "119 (feu/ambulance)", police: "110", ambulance: "119", fire: "119" },
                health: {
                  hospitals: ["St. Luke's International Hospital", "The University of Tokyo Hospital"],
                  note: "L'assurance maladie nationale (NHI) est obligatoire pour tous les résidents de long séjour et couvre 70% des frais médicaux.",
                },
                services: {
                  banks: ["MUFG Bank", "SMBC", "Mizuho Bank", "Japan Post Bank"],
                  phone_carriers: ["NTT Docomo", "au by KDDI", "SoftBank"],
                },
                education: {
                  universities: ["The University of Tokyo", "Waseda University", "Keio University", "Tokyo Institute of Technology"],
                },
                misc: {
                  visa_note: "Un visa étudiant et une carte de résident ('Zairyu Card') sont nécessaires.",
                  fun_fact: "La gare de Shinjuku à Tokyo est la plus fréquentée du monde, avec plus de 3,5 millions de passagers par jour.",
                }
              },
              en: {
                name: "Tokyo",
                description2: "A fascinating blend of tradition and modernity, Tokyo is a vibrant and safe megalopolis. Its world-class universities and unique culture offer an unforgettable student experience.",
                neighborhoods: ["Shibuya", "Shinjuku", "Shimokitazawa", "Kichijoji"],
                housing_howto: "Housing is expensive. 'Share houses' or university dormitories are the most common options for students. Websites like GaijinPot can help.",
                tips: ["A Suica or Pasmo card is essential for transport.", "'Konbini' (convenience stores) are perfect for affordable, quality meals.", "Respect local customs (politeness, no tipping)."],
                emergency: { universal: "119 (fire/ambulance)", police: "110", ambulance: "119", fire: "119" },
                health: {
                  hospitals: ["St. Luke's International Hospital", "The University of Tokyo Hospital"],
                  note: "National Health Insurance (NHI) is mandatory for all long-term residents and covers 70% of medical costs.",
                },
                services: {
                  banks: ["MUFG Bank", "SMBC", "Mizuho Bank", "Japan Post Bank"],
                  phone_carriers: ["NTT Docomo", "au by KDDI", "SoftBank"],
                },
                education: {
                  universities: ["The University of Tokyo", "Waseda University", "Keio University", "Tokyo Institute of Technology"],
                },
                misc: {
                  visa_note: "A student visa and a Residence Card ('Zairyu Card') are required.",
                  fun_fact: "Shinjuku Station in Tokyo is the busiest in the world, with over 3.5 million passengers per day.",
                }
              },
            },
          },
        ],
      },
      // ...
    ],
  },
  // ... Autres continents
];
