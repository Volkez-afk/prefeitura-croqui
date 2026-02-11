import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://wtgxzswahhwqjuasnrie.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_uMEfaVJdfXEt264vEZVrFA_GoJDC1gk'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
