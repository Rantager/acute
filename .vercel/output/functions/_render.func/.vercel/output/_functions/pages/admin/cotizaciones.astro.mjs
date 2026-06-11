/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DJgsl6UK.mjs';
import 'kleur/colors';
import { s as supabase } from '../../chunks/supabase_Xf0PX1h3.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$Cotizaciones = createComponent(async ($$result, $$props, $$slots) => {
  const { data: cotizaciones, error } = await supabase.from("cotizaciones").select("*").order("creado_at", { ascending: false });
  if (error) {
    console.error("Error cargando cotizaciones:", error.message);
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", AdminLayout, { "title": "Buz\xF3n de Cotizaciones - Acute" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-6xl px-4 py-8"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"> <div> <h1 class="text-3xl font-bold text-white tracking-tight">Gestión de Cotizaciones</h1> <p class="text-slate-400 text-sm mt-1">Revisa, contacta y gestiona las solicitudes de tus clientes potenciales.</p> </div> <div class="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 flex items-center gap-3 self-start"> <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> <span class="text-xs font-medium text-slate-300"> ${cotizaciones?.filter((c) => !c.leido).length || 0} Pendientes
</span> </div> </div> <div class="space-y-4" id="buzon-container"> ${cotizaciones?.map((item) => {
    const matchSoftware = item.detalles_proyecto.match(/^\[Tipo:\s*([^\]]+)\]/);
    const tipoSoftware = matchSoftware ? matchSoftware[1] : "No especificado";
    const mensajeLimpio = item.detalles_proyecto.replace(/^\[Tipo:\s*[^\]]+\]\s*/, "");
    return renderTemplate`<div${addAttribute(item.id, "data-id")}${addAttribute(`group relative rounded-2xl border transition-all duration-300 bg-slate-950/40 p-6 ${item.leido ? "border-slate-800/60 opacity-75" : "border-slate-800 bg-gradient-to-r from-blue-950/10 to-transparent border-l-brand-500 border-l-2"}`, "class")}> <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4"> <div> <div class="flex items-center gap-3 flex-wrap"> <h3 class="text-lg font-semibold text-white">${item.nombre}</h3> <span${addAttribute(`text-xs uppercase tracking-wider px-2.5 py-0.5 rounded-md font-medium ${tipoSoftware === "web" ? "bg-blue-500/10 text-blue-400" : tipoSoftware === "mobile" ? "bg-purple-500/10 text-purple-400" : tipoSoftware === "saas" ? "bg-amber-500/10 text-amber-400" : "bg-slate-800 text-slate-400"}`, "class")}> ${tipoSoftware} </span> ${!item.leido && renderTemplate`<span class="bg-brand-500/10 text-brand-400 text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded animate-pulse">
Nuevo
</span>`} </div> <div class="flex items-center gap-4 text-xs text-slate-400 mt-1.5 flex-wrap"> <span class="flex items-center gap-1.5"> <span class="text-slate-500">📧</span> ${item.correo} </span> ${item.telefono && item.telefono !== "No especificado" && renderTemplate`<span class="flex items-center gap-1.5"> <span class="text-slate-500">📞</span> ${item.telefono} </span>`} </div> </div> <span class="text-xs text-slate-500 whitespace-nowrap bg-slate-900/60 px-3 py-1 rounded-lg border border-slate-800/40"> ${new Date(item.creado_at).toLocaleDateString("es-MX", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit"
    })} </span> </div> <div class="bg-slate-900/50 rounded-xl p-4 border border-slate-800/40 text-sm text-slate-300 leading-relaxed mb-5"> <p class="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1.5">Requerimiento del proyecto:</p> ${mensajeLimpio} </div> <div class="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-900"> <div class="flex items-center gap-2"> <a${addAttribute(`https://wa.me/${item.telefono?.replace(/\D/g, "")}?text=${encodeURIComponent(`Hola ${item.nombre}, gracias por contactar a Acute. Vi tu solicitud sobre el desarrollo de tu proyecto (${tipoSoftware})...`)}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 px-4 py-2 text-xs font-semibold text-emerald-400 hover:text-white transition-all duration-300">
💬 Responder por WhatsApp
</a> <a${addAttribute(`mailto:${item.correo}?subject=${encodeURIComponent(`Respuesta de Cotizaci\xF3n - Acute`)}&body=${encodeURIComponent(`Hola ${item.nombre},

Gracias por escribirnos. Hemos revisado tu idea sobre la plataforma...`)}`, "href")} class="inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-all duration-300 border border-slate-800">
✉️ Enviar Correo
</a> </div> <div class="flex items-center gap-2"> ${!item.leido && renderTemplate`<button data-action="read"${addAttribute(item.id, "data-id")} class="rounded-xl bg-blue-500/10 hover:bg-blue-600 px-3 py-2 text-xs font-medium text-blue-400 hover:text-white transition-all duration-300">
✓ Marcar leído
</button>`} <button data-action="delete"${addAttribute(item.id, "data-id")} class="rounded-xl bg-rose-500/10 hover:bg-rose-600 px-3 py-2 text-xs font-medium text-rose-400 hover:text-white transition-all duration-300">
🗑️ Eliminar
</button> </div> </div> </div>`;
  })} ${cotizaciones?.length === 0 && renderTemplate`<div class="text-center py-16 bg-slate-900/20 rounded-2xl border border-slate-800/50"> <p class="text-slate-400 text-sm">El buzón está vacío. ¡Pronto llegarán nuevas cotizaciones!</p> </div>`} </div> </div>  ` })}`;
}, "C:/Users/User/Documents/acute/src/pages/admin/cotizaciones.astro", void 0);

const $$file = "C:/Users/User/Documents/acute/src/pages/admin/cotizaciones.astro";
const $$url = "/admin/cotizaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cotizaciones,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
