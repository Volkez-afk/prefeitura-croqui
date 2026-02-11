import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Substitua pelos novos valores do seu projeto
const SUPABASE_URL = 'https://wtgxzswahhwqjuasnrie.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0Z3h6c3dhaGh3cWp1YXNucmllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3ODI4OTIsImV4cCI6MjA4NjM1ODg5Mn0.E-_oZ3o1517rY5w0e0NMaHiu4L0vLRo6v4-5EwkS3Uk'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
