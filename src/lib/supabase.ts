import { createClient } from '@supabase/supabase-js';

// 1. Intentamos leer las variables del servidor de Astro o inyectadas por Vite para el cliente
const supabaseUrl = import.meta.env.SUPABASE_URL || import.meta.env.PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY || import.meta.env.PUBLIC_SUPABASE_ANON_KEY || "";

// 2. Validación de seguridad para que nunca levante vacío
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "[Supabase Client Error]: Las llaves de conexión no están definidas en las variables de entorno.",
    { hasUrl: !!supabaseUrl, hasKey: !!supabaseAnonKey }
  );
}

// 3. Configuramos las opciones dinámicamente según el entorno
const clientOptions: any = {};

if (typeof window === 'undefined') {
  clientOptions.auth = {
    persistSession: false
  };
} else {
  clientOptions.auth = {
    persistSession: true
  };
}

// 4. Exportamos la instancia única del cliente para toda la app
export const supabase = createClient(supabaseUrl, supabaseAnonKey, clientOptions);