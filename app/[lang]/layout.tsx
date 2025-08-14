import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Lang, dict } from '@/lib/dictionaries';

export default function LangLayout({ params, children }: { params: { lang: Lang }, children: React.ReactNode }) {
  const lang = params.lang;
  return (
    <div>
      <Navbar lang={lang} />
      <main className="container py-8">{children}</main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }];
}
