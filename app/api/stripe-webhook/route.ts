import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature') as string;
  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET as string);
  } catch (err) {
    console.error('Webhook signature verification failed.', err);
    return new NextResponse('Bad signature', { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any;
    const email = session.customer_details?.email as string | undefined;
    const isSubscription = session.mode === 'subscription' || Boolean(session.subscription);

    if (email && isSubscription) {
      const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE!);
      const { data: users } = await supabaseAdmin.auth.admin.listUsers();
      const user = users.users.find(u => u.email?.toLowerCase() === email.toLowerCase());
      if (user) {
        await supabaseAdmin.auth.admin.updateUserById(user.id, { user_metadata: { ...(user.user_metadata || {}), is_subscriber: true } });
      }
    }
  }

  return NextResponse.json({ received: true });
}

export const config = { api: { bodyParser: false } };
