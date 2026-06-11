import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ydyokuegiicockmzdfba.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkeW9rdWVnaWljb2NrbXpkZmJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwMzg3MzAsImV4cCI6MjA5NjYxNDczMH0.vrDaDSKMw20YrodvAB7lKE3TZpa7dJtv4Kvbhi0hZro";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase as s };
