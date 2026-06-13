// // src/lib/supabase.ts
// import { createClient } from '@supabase/supabase-js';

// // 1. Intentamos leer las variables del servidor de Astro o inyectadas por Vite para el cliente
// const supabaseUrl = import.meta.env.SUPABASE_URL || import.meta.env.PUBLIC_SUPABASE_URL || "";
// const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY || import.meta.env.PUBLIC_SUPABASE_ANON_KEY || "";

// // 2. Validación de seguridad para que nunca levante vacío
// if (!supabaseUrl || !supabaseAnonKey) {
//   console.error(
//     "[Supabase Client Error]: Las llaves de conexión no están definidas en las variables de entorno.",
//     { hasUrl: !!supabaseUrl, hasKey: !!supabaseAnonKey }
//   );
// }

// // 3. Exportamos la instancia única del cliente para toda la app
// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

// Si estamos en el servidor (Vercel / Node.js) e intentamos levantar el cliente,
// inyectamos 'ws' de forma dinámica para que Vite no lo intente empaquetar en el navegador.
if (typeof window === 'undefined') {
  try {
    // Usamos un require dinámico o dejamos que se resuelva en el backend
    // Para evitar que Rollup lo analice en estático, podemos usar la importación dinámica
    const ws = await import('ws').then(m => m.default || m);
    clientOptions.realtime = {
      transport: ws
    };
  } catch (e) {
    console.warn("[Supabase Server Warning]: No se pudo cargar el paquete 'ws' para Realtime.");
  }
} else {
  // Opciones exclusivas si se ejecuta en el navegador (opcional)
  clientOptions.auth = {
    persistSession: true
  };
}

// 4. Exportamos la instancia única del cliente para toda la app
export const supabase = createClient(supabaseUrl, supabaseAnonKey, clientOptions);