export const prerender = false;

import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

async function generateNextFolio(): Promise<string> {
  const year = 2026;
  const prefix = `COT-${year}-`;

  const { data, error } = await supabase
    .from('cotizaciones_proyectos')
    .select('folio')
    .like('folio', `${prefix}%`)
    .order('folio', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error('Error fetching last folio:', error);
  }

  let nextSeq = 1;
  if (data && data.folio) {
    const parts = data.folio.split('-');
    const lastSeqStr = parts[parts.length - 1];
    const lastSeq = parseInt(lastSeqStr, 10);
    if (!isNaN(lastSeq)) {
      nextSeq = lastSeq + 1;
    }
  }

  return `${prefix}${String(nextSeq).padStart(4, '0')}`;
}

// GET: Consultar cotizaciones de un cliente (?cliente_id=...)
export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const clienteId = url.searchParams.get('cliente_id');

  if (!clienteId) {
    return new Response(JSON.stringify({ error: 'Falta el parámetro cliente_id.' }), { status: 400 });
  }

  const { data, error } = await supabase
    .from('cotizaciones_proyectos')
    .select('*')
    .eq('cliente_id', clienteId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[GET Cotizaciones Error]:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true, data }), { status: 200 });
};

// POST: Crear una nueva cotización amarrada al cliente
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const {
      cliente_id,
      titulo_proyecto,
      descripcion_proyecto,
      alcances,
      exclusiones,
      tiempos_desarrollo,
      notas_adicionales, // <-- NUEVA VARIABLE EXTRAÍDA
      inversion_total,
      forma_pago,
      vigencia,
      estado
    } = body;

    if (!cliente_id || !titulo_proyecto || inversion_total === undefined) {
      return new Response(JSON.stringify({ error: 'Faltan campos requeridos.' }), { status: 400 });
    }

    const folio = await generateNextFolio();

    const { data, error } = await supabase
      .from('cotizaciones_proyectos')
      .insert([{
        cliente_id,
        folio,
        titulo_proyecto,
        descripcion_proyecto,
        alcances: alcances || [],
        exclusiones: exclusiones || [],
        tiempos_desarrollo: tiempos_desarrollo || '',
        notas_adicionales: notas_adicionales || '', // <-- INYECTADA A LA BD
        inversion_total,
        forma_pago,
        vigencia,
        estado: estado || 'Borrador'
      }])
      .select()
      .single();

    if (error) {
      console.error('[POST Cotizacion Error]:', error.message);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error: any) {
    console.error('[API Cotizaciones POST Error]:', error);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), { status: 500 });
  }
};

// PUT: Editar cambios de la cotización
export const PUT: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const {
      id,
      titulo_proyecto,
      descripcion_proyecto,
      alcances,
      exclusiones,
      tiempos_desarrollo,
      notas_adicionales, // <-- NUEVA VARIABLE EXTRAÍDA
      inversion_total,
      forma_pago,
      vigencia,
      estado
    } = body;

    if (!id || !titulo_proyecto || inversion_total === undefined) {
      return new Response(JSON.stringify({ error: 'Faltan campos requeridos.' }), { status: 400 });
    }

    const { data, error } = await supabase
      .from('cotizaciones_proyectos')
      .update({
        titulo_proyecto,
        descripcion_proyecto,
        alcances: alcances || [],
        exclusiones: exclusiones || [],
        tiempos_desarrollo: tiempos_desarrollo || '',
        notas_adicionales: notas_adicionales || '', // <-- ACTUALIZADA EN LA BD
        inversion_total,
        forma_pago,
        vigencia,
        estado
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('[PUT Cotizacion Error]:', error.message);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error: any) {
    console.error('[API Cotizaciones PUT Error]:', error);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), { status: 500 });
  }
};

// DELETE: Eliminar cotización de la base de datos (?id=...)
export const DELETE: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (!id) {
    return new Response(JSON.stringify({ error: 'Falta el parámetro id.' }), { status: 400 });
  }

  const { error } = await supabase
    .from('cotizaciones_proyectos')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('[DELETE Cotizacion Error]:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};