import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'StudentPassport',
  description: 'Your co‑pilot to settle into a new city',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
