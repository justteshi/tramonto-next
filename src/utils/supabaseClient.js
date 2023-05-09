import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(
  'https://cwnxmhdlmockzpbbmqgm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3bnhtaGRsbW9ja3pwYmJtcWdtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MzEyNjQwOSwiZXhwIjoxOTk4NzAyNDA5fQ.k0nLWuP2PpyyavmCO8TCQAryRvHwqylzbfP8Jt9oGps'
)