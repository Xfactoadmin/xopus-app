import { createBrowserClient } from "@supabase/ssr";

/**
 * Client Supabase pour les composants client (browser).
 * Utilise les variables d'environnement publiques Next.js.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}