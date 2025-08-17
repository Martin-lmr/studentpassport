import Link from "next/link";
import { destinations } from "@/lib/destinations";

export default function CountryPage({
  params,
}: {
  params: { lang: string; continent: string; country: string };
}) {
  const { lang, continent, country } = params;

  const continentData = destinations.find((c) => c.slug === continent);
  const countryData = continentData?.countries?.find(
    (cty) => cty.slug === country
  );

  if (!continentData || !countryData) {
    return <p>Country not found</p>;
  }

  return (
    <main className="container py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          {lang === "fr"
            ? `Étudier en ${countryData.nameFr}`
            : `Study in ${countryData.nameEn}`}
        </h1>
        <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
          {lang === "fr"
            ? `Avec ses universités prestigieuses, sa vie étudiante dynamique et sa richesse culturelle, 
              ${countryData.nameFr} est une destination incontournable pour les étudiants internationaux.`
            : `With prestigious universities, a vibrant student life and rich culture, 
              ${countryData.nameEn} is a must-visit destination for international students.`}
        </p>
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-neutral-900 rounded-lg border border-neutral-800">
          <h3 className="text-lg font-semibold mb-2">
            {lang === "fr" ? "Coût de la vie" : "Cost of living"}
          </h3>
          <p className="text-neutral-400 text-sm">
            {lang === "fr"
              ? "En moyenne 800-1200€ par mois selon la ville."
              : "On average €800-1200/month depending on the city."}
          </p>
        </div>
        <div className="p-6 bg-neutral-900 rounded-lg border border-neutral-800">
          <h3 className="text-lg font-semibold mb-2">
            {lang === "fr" ? "Logement étudiant" : "Student housing"}
          </h3>
          <p className="text-neutral-400 text-sm">
            {lang === "fr"
              ? "Résidences universitaires, colocation ou logements privés disponibles."
              : "University residences, shared flats or private housing available."}
          </p>
        </div>
        <div className="p-6 bg-neutral-900 rounded-lg border border-neutral-800">
          <h3 className="text-lg font-semibold mb-2">
            {lang === "fr" ? "Transports" : "Transport"}
          </h3>
          <p className="text-neutral-400 text-sm">
            {lang === "fr"
              ? "Réseau bien développé avec réductions étudiantes."
              : "Well-developed network with student discounts."}
          </p>
        </div>
      </div>

      {/* Cities */}
      <h2 className="text-2xl font-bold mb-6 text-center">
        {lang === "fr" ? "Villes étudiantes populaires" : "Popular student cities"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {countryData.cities?.map((city) => (
          <Link
            key={city.slug}
            href={`/${lang}/destinations/${continent}/${country}/${city.slug}`}
            className="block p-6 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-green-500 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {lang === "fr" ? city.nameFr : city.nameEn}
            </h3>
            <p className="text-neutral-400 text-sm">
              {lang === "fr"
                ? `Découvrez la vie étudiante à ${city.nameFr}.`
                : `Explore student life in ${city.nameEn}.`}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
