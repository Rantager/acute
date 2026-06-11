import { s as supabase } from '../../chunks/supabase_Xf0PX1h3.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const PATCH = async ({ request }) => {
  try {
    const body = await request.json();
    const { id, leido } = body;
    if (!id) {
      return new Response(JSON.stringify({ error: "Falta el ID" }), { status: 400 });
    }
    const { data, error } = await supabase.from("cotizaciones").update({ leido }).eq("id", String(id)).select();
    if (error) throw error;
    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    console.error("Error en API PATCH:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
const DELETE = async ({ request }) => {
  try {
    const body = await request.json();
    const { id } = body;
    if (!id) {
      return new Response(JSON.stringify({ error: "Falta el ID" }), { status: 400 });
    }
    const { error } = await supabase.from("cotizaciones").delete().eq("id", String(id));
    if (error) throw error;
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error en API DELETE:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  PATCH,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
