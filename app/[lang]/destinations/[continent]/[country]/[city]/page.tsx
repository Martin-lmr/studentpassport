import { destinations, CityData } from "@/lib/destinations";
import Link from "next/link";

export default function CityPage({
  params,
}: {
  params: { lang: string; continent: string; country: string; city: string };
}) {
  const { lang, continent, country, city } = params;

  // Recherche de la ville dans les données
  const continentData = destinations.find((c) => c.slug === continent);
  const countryData = continentData?.countries?.find(
    (cty) => cty.slug === country
  );
  const cityData: CityData | undefined = countryData?.cities?.find(
    (ct) => ct.slug === city
  );

  // Gérer le cas où la ville n'est pas trouvée
  if (!continentData || !countryData || !cityData) {
    return <p>City not found</p>;
  }

  // Sélectionner le contenu en fonction de la langue
  const content = lang === "fr" ? cityData.content.fr : cityData.content.en;
  const budget = cityData.budget;

  return (
    <main className="container py-10">
      {/* Fil d'Ariane (Breadcrumbs) */}
      <div className="text-sm text-neutral-500 mb-6 flex items-center gap-2">
        <Link href={`/${lang}/destinations/${continent}`} className="hover:underline">
          {lang === "fr" ? continentData.nameFr : continentData.nameEn}
        </Link>
        <span>&gt;</span>
        <Link
          href={`/${lang}/destinations/${continent}/${country}`}
          className="hover:underline"
        >
          {lang === "fr" ? countryData.nameFr : countryData.nameEn}
        </Link>
        <span>&gt;</span>
        <span className="text-white">{content.name}</span>
      </div>

      {/* Hero */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">
          {lang === "fr" ? `Bienvenue à ${content.name}` : `Welcome to ${content.name}`}
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          {content.description2}
        </p>
      </div>

      {/* Coût de la vie (Budget) */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">
          {lang === "fr" ? "Coût de la vie" : "Cost of Living"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg text-center">
            <p className="text-neutral-400 text-sm">{lang === "fr" ? "Nourriture / mois" : "Food / month"}</p>
            <p className="text-lg font-semibold">{budget.food_per_month_eur}€</p>
          </div>
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg text-center">
            <p className="text-neutral-400 text-sm">{lang === "fr" ? "Logement / mois" : "Housing / month"}</p>
            <p className="text-lg font-semibold">{budget.housing_flatshare_eur}€</p>
          </div>
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg text-center">
            <p className="text-neutral-400 text-sm">{lang === "fr" ? "Transport / mois" : "Transport / month"}</p>
            <p className="text-lg font-semibold">{budget.transport_pass_eur}€</p>
          </div>
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg text-center">
            <p className="text-neutral-400 text-sm">{lang === "fr" ? "Bière (pub)" : "Beer (pub)"}</p>
            <p className="text-lg font-semibold">{budget.beer_pub_eur}€</p>
          </div>
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg text-center">
            <p className="text-neutral-400 text-sm">{lang === "fr" ? "Cinéma" : "Cinema"}</p>
            <p className="text-lg font-semibold">{budget.cinema_eur}€</p>
          </div>
        </div>
      </section>

      {/* Sections détaillées */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Quartiers et Logement */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            {lang === "fr" ? "Quartiers et logement" : "Neighborhoods and Housing"}
          </h3>
          <p className="text-neutral-400 font-bold mb-1">
            {lang === "fr" ? "Quartiers à visiter :" : "Neighborhoods to check out:"}
          </p>
          <ul className="list-disc list-inside text-neutral-400 mb-4">
            {content.neighborhoods.map((n, index) => (
              <li key={index}>{n}</li>
            ))}
          </ul>
          <p className="text-neutral-400 font-bold mb-1">
            {lang === "fr" ? "Conseils pour le logement :" : "Housing tips:"}
          </p>
          <p className="text-neutral-400 text-sm">{content.housing_howto}</p>
        </div>

        {/* Éducation et Services */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            {lang === "fr" ? "Éducation et services" : "Education and Services"}
          </h3>
          <p className="text-neutral-400 font-bold mb-1">
            {lang === "fr" ? "Universités principales :" : "Main universities:"}
          </p>
          <ul className="list-disc list-inside text-neutral-400 mb-4">
            {content.education.universities.map((uni, index) => (
              <li key={index}>{uni}</li>
            ))}
          </ul>
          <p className="text-neutral-400 font-bold mb-1">
            {lang === "fr" ? "Banques & Téléphonie :" : "Banks & Phone Carriers:"}
          </p>
          <p className="text-neutral-400 text-sm">
            {lang === "fr" ? "Banques : " : "Banks: "}
            {content.services.banks.join(", ")}
          </p>
          <p className="text-neutral-400 text-sm">
            {lang === "fr" ? "Opérateurs : " : "Carriers: "}
            {content.services.phone_carriers.join(", ")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Santé et Urgences */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            {lang === "fr" ? "Santé et Urgences" : "Health and Emergency"}
          </h3>
          <p className="text-neutral-400 font-bold mb-1">
            {lang === "fr" ? "Numéros d'urgence :" : "Emergency numbers:"}
          </p>
          <ul className="list-disc list-inside text-neutral-400 mb-4">
            <li>{lang === "fr" ? `Numéro universel : ${content.emergency.universal}` : `Universal number: ${content.emergency.universal}`}</li>
            <li>{lang === "fr" ? `Police : ${content.emergency.police}` : `Police: ${content.emergency.police}`}</li>
            <li>{lang === "fr" ? `Ambulance (SAMU) : ${content.emergency.ambulance}` : `Ambulance: ${content.emergency.ambulance}`}</li>
            <li>{lang === "fr" ? `Pompiers : ${content.emergency.fire}` : `Firefighters: ${content.emergency.fire}`}</li>
          </ul>
          <p className="text-neutral-400 font-bold mb-1">
            {lang === "fr" ? "Principaux hôpitaux :" : "Main hospitals:"}
          </p>
          <ul className="list-disc list-inside text-neutral-400">
            {content.health.hospitals.map((h, index) => (
              <li key={index}>{h}</li>
            ))}
          </ul>
          <p className="text-neutral-400 italic text-xs mt-2">{content.health.note}</p>
        </div>

        {/* Autres informations */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            {lang === "fr" ? "Informations utiles" : "Useful Information"}
          </h3>
          <p className="text-neutral-400 font-bold mb-1">
            {lang === "fr" ? "Conseils pratiques :" : "Practical tips:"}
          </p>
          <ul className="list-disc list-inside text-neutral-400 mb-4">
            {content.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
          <p className="text-neutral-400 font-bold mb-1">
            {lang === "fr" ? "À savoir sur le visa :" : "Visa information:"}
          </p>
          <p className="text-neutral-400 text-sm mb-4">{content.misc.visa_note}</p>
          <p className="text-neutral-400 font-bold mb-1">
            {lang === "fr" ? "Le saviez-vous ?" : "Did you know?"}
          </p>
          <p className="text-neutral-400 text-sm italic">{content.misc.fun_fact}</p>
        </div>
      </div>

      {/* Checklist call-to-action */}
      <div className="text-center mt-12">
        <a
          href={`/${lang}/checklist`}
          className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg text-white font-semibold transition"
        >
          {lang === "fr" ? "Préparer mon installation" : "Prepare my arrival"}
        </a>
      </div>
    </main>
  );
}