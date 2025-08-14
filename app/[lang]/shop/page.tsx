import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { Lang, dict } from '@/lib/dictionaries';

export default function Shop({ params }: { params: { lang: Lang } }) {
  const t = dict[params.lang];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t.shop.title}</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(p => <ProductCard key={p.id} p={p} lang={params.lang} />)}
      </div>
    </div>
  );
}
