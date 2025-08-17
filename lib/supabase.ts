"use client";
import { createClient, SupabaseClient } from '@supabase/supabase-js'

/**
 * Client Supabase lazy + safe.
 * - Évite l’erreur "supabaseUrl is required" pendant `next build`
 *   en ne créant le client que si les envs sont dispo.
 * - Sur Vercel (où les envs seront définies), le client est créé normalement.
 */
let cached: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (cached) return cached;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) return null;
  cached = createClient(url, anon);
  return cached;
}

// Conserve l’export nommé `supabase` pour ne pas toucher tous les imports existants.
export const supabase = (getSupabase() as unknown) as SupabaseClient;
