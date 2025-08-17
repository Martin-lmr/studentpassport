import Link from "next/link";
import { destinations, DestinationData } from "@/lib/destinations";

export default function ContinentPage({
  params,
}: {
  params: { lang: string; continent: string };
}) {
  const { lang, continent } = params;
  const continentData: DestinationData | undefined = destinations.find(
    (c) => c.slug === continent
  );

  if (!continentData) return <p>Continent not found</p>;

  return (
    <main className="container py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          {lang === "fr"
            ? `Étudier en ${continentData.nameFr}`
            : `Study in ${continentData.nameEn}`}
        </h1>
        <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
          {lang === "fr"
            ? `Partez à la découverte des meilleures destinations étudiantes en ${continentData.nameFr}. 
              Chaque pays combine excellence académique, richesse culturelle et opportunités uniques pour développer vos compétences et élargir vos horizons.`
            : `Discover the best student destinations in ${continentData.nameEn}. 
              Each country combines academic excellence, cultural richness and unique opportunities to grow your skills and broaden your horizons.`}
        </p>
      </div>

      {/* Key advantages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-neutral-900 rounded-lg border border-neutral-800">
          <h3 className="text-lg font-semibold mb-2">
            {lang === "fr" ? "Universités reconnues" : "Renowned universities"}
          </h3>
          <p className="text-neutral-400 text-sm">
            {lang === "fr"
              ? "De nombreuses institutions figurent dans les classements mondiaux."
              : "Many institutions are ranked among the world's best."}
          </p>
        </div>
        <div className="p-6 bg-neutral-900 rounded-lg border border-neutral-800">
          <h3 className="text-lg font-semibold mb-2">
            {lang === "fr" ? "Vie étudiante" : "Student life"}
          </h3>
          <p className="text-neutral-400 text-sm">
            {lang === "fr"
              ? "Des campus dynamiques et des rencontres internationales inoubliables."
              : "Vibrant campuses and unforgettable international friendships."}
          </p>
        </div>
        <div className="p-6 bg-neutral-900 rounded-lg border border-neutral-800">
          <h3 className="text-lg font-semibold mb-2">
            {lang === "fr" ? "Culture et voyages" : "Culture & Travel"}
          </h3>
          <p className="text-neutral-400 text-sm">
            {lang === "fr"
              ? "Explorez des cultures diverses et voyagez facilement dans la région."
              : "Experience diverse cultures and travel easily within the region."}
          </p>
        </div>
      </div>

      {/* Countries grid */}
      <h2 className="text-2xl font-bold mb-6 text-center">
        {lang === "fr" ? "Pays disponibles" : "Available countries"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {continentData.countries?.map((country) => (
          <Link
            key={country.slug}
            href={`/${lang}/destinations/${continent}/${country.slug}`}
            className="block bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-green-500 transition"
          >
            <div className="h-32 bg-neutral-800 flex items-center justify-center text-xl font-semibold">
              {lang === "fr" ? country.nameFr : country.nameEn}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
