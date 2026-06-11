// src/pages/api/auth/callback.ts
export const prerender = false;

import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  console.log("[AuthCallback] Endpoint alcanzado. Analizando URL completa:", url.href);
  
  // 1. Extraemos el código de la URL usando searchParams
  const code = url.searchParams.get('code');
  
  if (code) {
    try {
      console.log("[AuthCallback] Código encontrado por servidor. Intercambiando por sesión...");
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error("[AuthCallback] Error al intercambiar sesión en Supabase:", error.message);
        return redirect('/admin/login?error=error_auth');
      }

      if (data?.user?.email) {
        const emailUsuario = data.user.email.trim().toLowerCase();
        console.log(`[AuthCallback Server] Sesión creada con éxito para: ${emailUsuario}`);

        // 2. Establecemos la cookie para el guardián de index.astro
        cookies.set("acute_admin_session", emailUsuario, {
          path: "/",
          maxAge: 60 * 60 * 24, // 1 día activo
          httpOnly: true,
          secure: import.meta.env.PROD
        });

        console.log("[AuthCallback Server] Cookie inyectada. Mandando al panel operativo...");
        return redirect('/admin?tab=cotizaciones');
      }
    } catch (err: any) {
      console.error("[AuthCallback Server] Excepción en servidor:", err.message);
      return redirect('/admin/login?error=error_auth');
    }
  }

  // -------------------------------------------------------------------------
  // FALLBACK INDUSTRIAL SI LLEGA EN FORMATO HASH (#) AL CLIENTE
  // -------------------------------------------------------------------------
  console.warn("[AuthCallback] URL de servidor limpia. Ejecutando extractor dinámico en cliente...");
  
  return new Response(
    `<html>
      <head>
        <title>Sincronizando Consola Acute...</title>
      </head>
      <body style="background:#0b1120;color:#f8fafc;font-family:sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;">
        <div style="text-align:center;">
          <div style="border: 4px solid rgba(34,211,238,0.1); border-left-color: #22d3ee; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 1rem auto;"></div>
          <p style="font-size:1.125rem;font-weight:600;margin-bottom:0.5rem;color:#ffffff;">Estableciendo conexión segura...</p>
          <p style="color:#94a3b8;font-size:0.875rem;">Verificando credenciales en la lista blanca de Acute.</p>
        </div>
        <style>@keyframes spin { to { transform: rotate(360deg); } }</style>
        
        <script type="module">
          // Importamos el cliente de Supabase configurado en tu proyecto
          import { supabase } from '/src/lib/supabase.ts';

          async function procesarSesionCliente() {
            try {
              // Pequeño delay estratégico para que el SDK procese el hash de la URL automáticamente
              setTimeout(async () => {
                const { data, error } = await supabase.auth.getSession();
                
                if (data?.session?.user?.email) {
                  const emailReal = data.session.user.email.trim().toLowerCase();
                  console.log("[CallbackCliente] ¡Sesión válida detectada! Email:", emailReal);
                  
                  // Inyectamos la cookie de forma limpia con el email real de Google
                  document.cookie = "acute_admin_session=" + encodeURIComponent(emailReal) + "; path=/; max-age=" + (60*60*24);
                  
                  // Fuga directa hacia el panel administrativo
                  window.location.href = '/admin?tab=cotizaciones';
                } else {
                  console.error("[CallbackCliente] No se pudo recuperar ninguna sesión activa:", error);
                  window.location.href = '/admin/login?error=error_auth';
                }
              }, 600);
            } catch (err) {
              console.error("[CallbackCliente] Error crítico:", err);
              window.location.href = '/admin/login?error=error_auth';
            }
          }
          procesarSesionCliente();
        </script>
      </body>
    </html>`,
    { headers: { 'Content-Type': 'text/html' } }
  );
};