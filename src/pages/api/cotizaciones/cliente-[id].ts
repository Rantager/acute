export const prerender = false;

import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const GET: APIRoute = async ({ params }) => {
  try {
    const { id } = params;

    if (!id) {
      return new Response(JSON.stringify({ error: 'Falta el ID del cliente.' }), { status: 400 });
    }

    const { data, error } = await supabase
      .from('cotizaciones_proyectos')
      .select('*, mensajes_contacto(*)')
      .eq('mensaje_id', id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('[GET Cliente Cotizaciones Error]:', error.message);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error: any) {
    console.error('[API Cliente Cotizaciones GET Error]:', error);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), { status: 500 });
  }
};