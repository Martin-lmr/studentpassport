// app/cities/page.tsx
import Link from "next/link";
import { cities } from "@/lib/cities";

export default function CitiesPage() {
  const continents = cities.reduce((acc, city) => {
    if (!acc[city.continent]) acc[city.continent] = {};
    if (!acc[city.continent][city.country]) acc[city.continent][city.country] = [];
    acc[city.continent][city.country].push(city);
    return acc;
  }, {} as Record<string, Record<string, typeof cities>>);

  return (
    <main className="bg-black text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Toutes les villes</h1>
      {Object.entries(continents).map(([continent, countries]) => (
        <section key={continent} className="mb-8">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">{continent}</h2>
          {Object.entries(countries).map(([country, citiesList]) => (
            <div key={country} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{country}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {citiesList.map(city => (
                  <Link href={`/cities/${city.slug}`} key={city.slug}>
                    <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                      <img src={city.cover} alt={city.content.fr.name} className="w-full h-40 object-cover" />
                      <div className="p-4">
                        <h4 className="text-lg font-bold">{city.content.fr.name}</h4>
                        <p className="text-sm text-gray-400">{city.content.fr.description2}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}