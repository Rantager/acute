import { createClient } from '@supabase/supabase-js';

// Jalamos las variables de entorno de forma segura en Astro v4
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

// Creamos e exportamos el cliente de conexión
export const supabase = createClient(supabaseUrl, supabaseAnonKey);