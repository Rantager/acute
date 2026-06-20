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

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const {
      mensaje_id,
      titulo_proyecto,
      descripcion_proyecto,
      alcances,
      exclusiones,
      tiempos_desarrollo,
      inversion_total,
      forma_pago,
      vigencia,
      estado
    } = body;

    if (!mensaje_id || !titulo_proyecto || inversion_total === undefined) {
      return new Response(JSON.stringify({ error: 'Faltan campos requeridos.' }), { status: 400 });
    }

    const folio = await generateNextFolio();

    const { data, error } = await supabase
      .from('cotizaciones_proyectos')
      .insert([{
        mensaje_id,
        folio,
        titulo_proyecto,
        descripcion_proyecto,
        alcances: alcances || [],
        exclusiones: exclusiones || [],
        tiempos_desarrollo: tiempos_desarrollo || [],
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
        tiempos_desarrollo: tiempos_desarrollo || [],
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