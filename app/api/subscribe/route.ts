import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
  const { period, lang } = await req.json();
  const priceId = period === 'yearly' ? process.env.STRIPE_PRICE_YEARLY : process.env.STRIPE_PRICE_MONTHLY;
  if (!priceId) return NextResponse.json({ error: 'Missing price id' }, { status: 400 });

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: process.env.STRIPE_SUCCESS_URL || `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/account`,
    cancel_url: process.env.STRIPE_CANCEL_URL || `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/pricing`,
    allow_promotion_codes: true
  });
  return NextResponse.json({ url: session.url });
}
