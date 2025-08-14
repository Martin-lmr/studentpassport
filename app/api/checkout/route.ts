import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { products } from '@/lib/products';

export async function POST(req: Request) {
  const { productId, lang } = await req.json();
  const product = products.find(p => p.id === productId);
  if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price_data: { currency: 'eur', product_data: { name: product.name }, unit_amount: product.price_cents }, quantity: 1 }],
    success_url: process.env.STRIPE_SUCCESS_URL || `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/account`,
    cancel_url: process.env.STRIPE_CANCEL_URL || `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/shop`,
    allow_promotion_codes: true
  });
  return NextResponse.json({ url: session.url });
}
