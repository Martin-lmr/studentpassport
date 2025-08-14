import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-12">
      <div className="container py-8 text-sm text-neutral-400 flex flex-col sm:flex-row gap-2 sm:gap-6">
        <span>© {new Date().getFullYear()} StudentPassport</span>
        <Link href="https://essec.edu" target="_blank" className="underline">Built by an ESSEC student</Link>
        <span className="opacity-70">This is an MVP demo</span>
      </div>
    </footer>
  );
}
