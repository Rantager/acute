import { s as supabase } from '../../chunks/supabase_Xf0PX1h3.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, softwareType, message } = data;
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Faltan campos requeridos: name, email, message" }),
        { status: 400 }
      );
    }
    const detallesCompletos = `[Tipo: ${softwareType || "No especificado"}] ${message}`;
    const { error } = await supabase.from("cotizaciones").insert([{
      nombre: name,
      correo: email,
      telefono: phone || "No especificado",
      detalles_proyecto: detallesCompletos
    }]);
    if (error) {
      console.error("[API Error POST] Supabase:", error.message);
      return new Response(
        JSON.stringify({ error: `Error al guardar: ${error.message}` }),
        { status: 500 }
      );
    }
    return new Response(
      JSON.stringify({ message: "Cotización guardada exitosamente", success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("[API Error POST] Excepción:", error?.message || error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500 }
    );
  }
};
const PATCH = async ({ request }) => {
  try {
    const body = await request.json();
    const { id, leido } = body;
    if (!id) {
      return new Response(
        JSON.stringify({ error: 'Campo "id" requerido en el body' }),
        { status: 400 }
      );
    }
    if (typeof leido !== "boolean") {
      return new Response(
        JSON.stringify({ error: 'Campo "leido" debe ser boolean' }),
        { status: 400 }
      );
    }
    const { data, error } = await supabase.from("cotizaciones").update({ leido }).eq("id", String(id)).select();
    if (error) {
      console.error("[API Error PATCH] Supabase:", error.message);
      return new Response(
        JSON.stringify({ error: `Error al actualizar: ${error.message}` }),
        { status: 500 }
      );
    }
    return new Response(
      JSON.stringify({ success: true, data, message: "Cotización actualizada" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("[API Error PATCH] Excepción:", error?.message || error);
    return new Response(
      JSON.stringify({ error: error?.message || "Error interno del servidor" }),
      { status: 500 }
    );
  }
};
const DELETE = async ({ request }) => {
  try {
    const body = await request.json();
    const { id } = body;
    if (!id) {
      return new Response(
        JSON.stringify({ error: 'Campo "id" requerido en el body' }),
        { status: 400 }
      );
    }
    const { error } = await supabase.from("cotizaciones").delete().eq("id", String(id));
    if (error) {
      console.error("[API Error DELETE] Supabase:", error.message);
      return new Response(
        JSON.stringify({ error: `Error al eliminar: ${error.message}` }),
        { status: 500 }
      );
    }
    return new Response(
      JSON.stringify({ success: true, message: "Cotización eliminada exitosamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("[API Error DELETE] Excepción:", error?.message || error);
    return new Response(
      JSON.stringify({ error: error?.message || "Error interno del servidor" }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  PATCH,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
