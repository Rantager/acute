// src/pages/api/mensajes-status.ts
export const prerender = false;

import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

// Handler para actualizar estado (Marcar como leído)
export const PATCH: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { id, leido } = body;

    if (!id) {
      return new Response(JSON.stringify({ error: 'Falta el ID' }), { status: 400 });
    }

    // UPDATE en Supabase usando el ID como String (UUID)
    const { data, error } = await supabase
      .from('mensajes_contacto')
      .update({ leido: leido })
      .eq('id', String(id))
      .select();

    if (error) throw error;

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error: any) {
    console.error('Error en API PATCH:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

// Handler para eliminar registros
export const DELETE: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return new Response(JSON.stringify({ error: 'Falta el ID' }), { status: 400 });
    }

    // DELETE en Supabase usando el ID como String (UUID)
    const { error } = await supabase
      .from('mensajes_contacto')
      .delete()
      .eq('id', String(id));

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error('Error en API DELETE:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
