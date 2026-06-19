// src/pages/api/mensajes-contacto.ts
export const prerender = false;

import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

// 1. GUARDAR NUEVO MENSAJE DE CONTACTO (Formulario Público)
export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, softwareType, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Faltan campos requeridos.' }), { status: 400 });
    }

    const detallesCompletos = `[Tipo: ${softwareType || 'No especificado'}] ${message}`;

    const { error } = await supabase
      .from('mensajes_contacto')
      .insert([{ 
        nombre: name, 
        correo: email, 
        telefono: phone || 'No especificado', 
        detalles_proyecto: detallesCompletos 
      }]);

    if (error) {
      console.error('[Supabase Error POST]:', error.message);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'Mensaje guardado exitosamente' }), { status: 200 });
  } catch (error) {
    console.error('[API Error POST]:', error);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), { status: 500 });
  }
};

// 2. MARCAR COMO LEÍDO (Panel de Administración)
export const PATCH: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { id, leido } = body;

    if (!id) {
      return new Response(JSON.stringify({ error: 'Falta el ID' }), { status: 400 });
    }

    const { data, error } = await supabase
      .from('mensajes_contacto')
      .update({ leido: leido })
      .eq('id', String(id))
      .select();

    if (error) throw error;

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error: any) {
    console.error('[API Error PATCH]:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

// 3. ELIMINAR MENSAJE (Panel de Administración)
export const DELETE: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return new Response(JSON.stringify({ error: 'Falta el ID' }), { status: 400 });
    }

    const { error } = await supabase
      .from('mensajes_contacto')
      .delete()
      .eq('id', String(id));

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error('[API Error DELETE]:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
