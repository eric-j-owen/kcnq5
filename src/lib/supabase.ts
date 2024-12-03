import { createClient } from "@supabase/supabase-js";

const { SUPABASE_URL, SUPABASE_ANON_KEY } = import.meta.env;
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("Missing sb url or sb key");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
