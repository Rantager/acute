/* empty css                                        */
import { c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, e as createAstro, r as renderComponent, d as renderHead } from '../chunks/astro/server_DJgsl6UK.mjs';
import 'kleur/colors';
import { s as supabase } from '../chunks/supabase_Xf0PX1h3.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { seccionActiva } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-slate-900 border-b border-slate-800 sticky top-0 z-40 backdrop-blur-md bg-opacity-80"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-16"> <div class="flex items-center gap-8"> <div class="flex items-center gap-2"> <div class="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-lg tracking-wider">A</div> <span class="font-bold text-xl text-white tracking-tight">Acute <span class="text-blue-500 text-xs font-mono">Control</span></span> </div> <div class="hidden md:flex space-x-1"> <a href="?tab=clientes"${addAttribute(`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${seccionActiva === "clientes" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`, "class")}>
Clientes
</a> <a href="?tab=proyectos"${addAttribute(`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${seccionActiva === "proyectos" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`, "class")}>
Proyectos y Finanzas
</a> <a href="?tab=cotizaciones"${addAttribute(`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${seccionActiva === "cotizaciones" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`, "class")}>
Gestionar Cotizaciones
</a> </div> </div> <span class="bg-slate-800 text-slate-400 text-xs font-mono px-3 py-1 rounded-full border border-slate-700">Enterprise CRM</span> </div> </div> </nav>`;
}, "C:/Users/User/Documents/acute/src/components/admin/Navbar.astro", void 0);

const $$Astro$3 = createAstro();
const $$Kpis = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Kpis;
  const { ingresosTotales, dineroEnMano, cuentasPorCobrar } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="grid grid-cols-1 md:grid-cols-3 gap-5"> <div class="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl shadow-xl"> <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Volumen Contratado</p> <p class="text-3xl font-bold text-white font-mono mt-2">$${ingresosTotales.toLocaleString("en-US")} <span class="text-xs text-slate-500 font-sans font-normal">USD</span></p> </div> <div class="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl shadow-xl border-l-emerald-500/40 border-l-4"> <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Capital Cobrado</p> <p class="text-3xl font-bold text-emerald-400 font-mono mt-2">$${dineroEnMano.toLocaleString("en-US")} <span class="text-xs text-slate-500 font-sans font-normal">USD</span></p> </div> <div class="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl shadow-xl border-l-amber-500/40 border-l-4"> <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Por Cobrar</p> <p class="text-3xl font-bold text-amber-400 font-mono mt-2">$${cuentasPorCobrar.toLocaleString("en-US")} <span class="text-xs text-slate-500 font-sans font-normal">USD</span></p> </div> </section>`;
}, "C:/Users/User/Documents/acute/src/components/admin/Kpis.astro", void 0);

const $$Astro$2 = createAstro();
const $$TabClientes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TabClientes;
  const { listaClientes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"> <section class="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl shadow-xl"> <h2 class="text-lg font-bold text-white mb-4">Alta de Cliente</h2> <form method="POST" class="space-y-4"> <input type="hidden" name="accion" value="crear_cliente"> <div> <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Empresa / Cliente</label> <input type="text" name="nombre_empresa" required placeholder="Ej. Chelino's Cars" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"> </div> <div> <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Nombre de Contacto</label> <input type="text" name="nombre_contacto" required placeholder="Ej. Jose Chelino" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"> </div> <div> <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Correo Electrónico</label> <input type="email" name="correo" placeholder="correo@empresa.com" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"> </div> <div> <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Teléfono</label> <input type="text" name="telefono" placeholder="+1..." class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"> </div> <button type="submit" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-2 px-4 rounded-xl transition-colors">
Guardar Cliente
</button> </form> </section> <section class="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl lg:col-span-2"> <h2 class="text-lg font-semibold mb-4 text-slate-200">Directorio de Clientes Registrados</h2> <div class="overflow-x-auto"> <table class="w-full text-left text-sm text-slate-300"> <thead class="text-xs uppercase bg-[#0b1120] text-slate-400 border-b border-slate-800"> <tr> <th class="px-4 py-3">Empresa</th> <th class="px-4 py-3">Contacto</th> <th class="px-4 py-3">Canales de Comunicación</th> <th class="px-4 py-3 text-center">Acción</th> </tr> </thead> <tbody class="divide-y divide-slate-800/60"> ${listaClientes.map((c) => renderTemplate`<tr class="hover:bg-slate-800/10 transition-colors"> <td class="px-4 py-4 font-bold text-white tracking-wide">${c.nombre_empresa}</td> <td class="px-4 py-4 text-slate-300">${c.nombre_contacto}</td> <td class="px-4 py-4 space-y-0.5 text-xs text-slate-400"> <div>${c.correo || "Sin correo"}</div> <div class="font-mono text-slate-500">${c.telefono || "Sin tel\xE9fono"}</div> </td> <td class="px-4 py-4 text-center"> <form method="POST" onsubmit="return confirm('¿Estás seguro de eliminar este cliente? Se borrarán todos sus proyectos asignados de forma automática.');"> <input type="hidden" name="accion" value="eliminar_cliente"> <input type="hidden" name="id"${addAttribute(c.id, "value")}> <button type="submit" class="text-slate-500 hover:text-red-400 p-2 rounded-xl hover:bg-red-500/10 transition-colors" title="Eliminar cliente y proyectos"> <svg class="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path> </svg> </button> </form> </td> </tr>`)} </tbody> </table> </div> </section> </div>`;
}, "C:/Users/User/Documents/acute/src/components/admin/TabClientes.astro", void 0);

const $$Astro$1 = createAstro();
const $$TabProyectos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TabProyectos;
  const { proyectosConCalculo, listaClientes = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"> <section class="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl shadow-xl lg:col-span-1"> <h2 class="text-lg font-bold text-white mb-4">Nueva Especificación</h2> <form method="POST" class="space-y-4"> <input type="hidden" name="accion" value="crear_proyecto"> <div> <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Asignar a Cliente</label> <select name="cliente_id" required class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-300 focus:outline-none focus:border-blue-500"> <option value="">-- Selecciona un Cliente --</option> ${listaClientes.map((cl) => renderTemplate`<option${addAttribute(cl.id, "value")}>${cl.nombre_empresa}</option>`)} </select> </div> <div> <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Nombre del Software/App</label> <input type="text" name="nombre_app" required placeholder="Ej. StockFlow" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"> </div> <div> <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">¿De qué va? (Descripción)</label> <textarea name="descripcion" rows="3" placeholder="Ej. Sistema para control de cobros e inventarios..." class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 resize-none"></textarea> </div> <div> <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Stack Tecnológico</label> <input type="text" name="tecnologias" placeholder="Ej. React, Tailwind, Supabase" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"> </div> <div class="grid grid-cols-2 gap-2"> <div> <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Costo ($)</label> <input type="number" name="costo_total" required min="0" placeholder="1200" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 font-mono"> </div> <div> <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Abono ($)</label> <input type="number" name="total_abonado" min="0" placeholder="400" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 font-mono"> </div> </div> <div class="grid grid-cols-2 gap-2"> <div> <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">F. Inicio</label> <input type="date" name="fecha_inicio" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-2 py-2 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"> </div> <div> <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">F. Entrega Est.</label> <input type="date" name="fecha_entrega_estimada" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-2 py-2 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"> </div> </div> <div> <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Estatus Operativo</label> <select name="estatus" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"> <option value="En Desarrollo">En Desarrollo</option> <option value="En Pruebas">En Pruebas</option> <option value="Terminado">Terminado</option> </select> </div> <button type="submit" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-2.5 px-4 rounded-xl shadow-lg transition-colors">
Asignar Proyecto
</button> </form> </section> <section class="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl lg:col-span-2 overflow-hidden"> <div class="mb-4"> <h2 class="text-lg font-semibold text-slate-200">Agenda Operativa Finanzas</h2> <p class="text-xs text-slate-500 mt-0.5">Da clic sobre la fila de cualquier proyecto para abrir sus especificaciones en el panel derecho.</p> </div> <div class="overflow-x-auto"> <table class="w-full text-left text-sm text-slate-300"> <thead class="text-xs uppercase bg-[#0b1120] text-slate-400 border-b border-slate-800"> <tr> <th class="px-4 py-3">Proyecto / Cliente</th> <th class="px-4 py-3">Estatus</th> <th class="px-4 py-3">Finanzas ($)</th> <th class="px-4 py-3">Registrar Abono</th> <th class="px-4 py-3 text-center">Eliminar</th> </tr> </thead> <tbody class="divide-y divide-slate-800/60"> ${proyectosConCalculo.map((p) => renderTemplate`<tr class="hover:bg-slate-800/30 cursor-pointer transition-all btn-detalles"${addAttribute(p.nombre_app, "data-nombre")}${addAttribute(p.nombreEmpresa, "data-empresa")}${addAttribute(p.contactoNombre, "data-contacto")}${addAttribute(p.contactoCorreo, "data-correo")}${addAttribute(p.contactoTelefono, "data-telefono")}${addAttribute(p.descripcion || "Sin descripci\xF3n detallada registrada.", "data-descripcion")}${addAttribute(p.tecnologias || "No declaradas.", "data-tecnologias")}${addAttribute(p.total.toLocaleString("en-US"), "data-total")}${addAttribute(p.abonado.toLocaleString("en-US"), "data-abonado")}${addAttribute(p.saldo.toLocaleString("en-US"), "data-saldo")}${addAttribute(p.estatus, "data-estatus")}${addAttribute(p.fecha_inicio, "data-inicio")}${addAttribute(p.fecha_entrega_estimada || "Indefinida", "data-entrega")}> <td class="px-4 py-4"> <div class="font-bold text-white text-sm tracking-wide">${p.nombre_app}</div> <div class="text-xs text-slate-400 mt-0.5">${p.nombreEmpresa}</div> </td> <td class="px-4 py-4" onclick="event.stopPropagation()"> <form method="POST"> <input type="hidden" name="accion" value="cambiar_estatus"> <input type="hidden" name="id"${addAttribute(p.id, "value")}> <select name="nuevo_estatus" onchange="this.form.submit()" class="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-slate-300 focus:outline-none cursor-pointer"> <option value="En Desarrollo"${addAttribute(p.estatus === "En Desarrollo", "selected")}>En Desarrollo</option> <option value="En Pruebas"${addAttribute(p.estatus === "En Pruebas", "selected")}>En Pruebas</option> <option value="Terminado"${addAttribute(p.estatus === "Terminado", "selected")}>Terminado</option> </select> </form> </td> <td class="px-4 py-4 font-mono text-xs space-y-0.5"> <div><span class="text-slate-500">Saldo:</span> <span${addAttribute(`font-bold ${p.esLiquidado ? "text-slate-500" : "text-amber-500"}`, "class")}>$${p.saldo.toLocaleString("en-US")}</span></div> <div class="text-[10px] text-slate-500">de $${p.total.toLocaleString("en-US")} total</div> </td> <td class="px-4 py-4" onclick="event.stopPropagation()"> ${!p.esLiquidado ? renderTemplate`<form method="POST" class="flex items-center gap-1 max-w-[110px]"> <input type="hidden" name="accion" value="abonar"> <input type="hidden" name="id"${addAttribute(p.id, "value")}> <input type="hidden" name="abono_actual"${addAttribute(p.abonado, "value")}> <input type="number" name="nuevo_abono" required min="1"${addAttribute(p.saldo, "max")} placeholder="+" class="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-white focus:outline-none text-center font-mono"> <button type="submit" class="bg-emerald-600/20 text-emerald-400 p-1 rounded border border-emerald-500/30 hover:bg-emerald-600 hover:text-white transition-colors"> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> </button> </form>` : renderTemplate`<span class="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Liquidado</span>`} </td> <td class="px-4 py-4 text-center" onclick="event.stopPropagation()"> <form method="POST" onsubmit="return confirm('¿Eliminar este proyecto?');"> <input type="hidden" name="accion" value="eliminar_proyecto"> <input type="hidden" name="id"${addAttribute(p.id, "value")}> <button type="submit" class="text-slate-500 hover:text-red-400 p-1.5 rounded-lg hover:bg-red-500/10 transition-colors"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg> </button> </form> </td> </tr>`)} </tbody> </table> </div> </section> </div>`;
}, "C:/Users/User/Documents/acute/src/components/admin/TabProyectos.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$TabCotizaciones = createComponent(async ($$result, $$props, $$slots) => {
  const { data: cotizaciones, error } = await supabase.from("cotizaciones").select("*").order("creado_at", { ascending: false });
  if (error) {
    console.error("Error cargando cotizaciones:", error.message);
  }
  const listaCotizaciones = cotizaciones || [];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="space-y-6"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"> <div> <h2 class="text-2xl font-bold text-white tracking-tight">Gesti\xF3n de Cotizaciones</h2> <p class="text-slate-400 text-sm mt-1">Revisa, contacta y convierte las solicitudes de tus clientes potenciales.</p> </div> <div class="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 flex items-center gap-3 self-start"> <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> <span class="text-xs font-medium text-slate-300"> ', ' Pendientes\n</span> </div> </div> <div class="space-y-4" id="buzon-container"> ', " ", " </div> </div> <script>\n  function setupBuzon() {\n    const buzonContainer = document.getElementById('buzon-container');\n    if (!buzonContainer) return;\n\n    buzonContainer.replaceWith(buzonContainer.cloneNode(true));\n    const activeContainer = document.getElementById('buzon-container');\n    if (!activeContainer) return;\n\n    activeContainer.addEventListener('click', async (e) => {\n      const target = e.target;\n      const button = target.closest('button');\n      \n      if (!button) return;\n      if (button.type === 'submit') return;\n\n      const id = button.getAttribute('data-id');\n      const action = button.getAttribute('data-action');\n      \n      // Correcci\xF3n de Nodo: Buscamos expl\xEDcitamente la tarjeta con la clase de cotizaci\xF3n\n      const card = button.closest('.tarjeta-cotizacion');\n\n      if (!id || !card) return;\n\n      // ACCI\xD3N: MARCAR COMO LE\xCDDO\n      if (action === 'read') {\n        button.setAttribute('disabled', 'true');\n        const originalContent = button.innerHTML;\n        button.textContent = 'Actualizando...';\n\n        try {\n          const res = await fetch('/api/cotizaciones', {\n            method: 'PATCH',\n            headers: { 'Content-Type': 'application/json' },\n            body: JSON.stringify({ id: String(id), leido: true })\n          });\n          \n          if (res.ok) {\n            window.location.reload();\n          } else {\n            const errData = await res.json().catch(() => ({}));\n            alert(`Error del servidor: ${errData.error || 'No se pudo actualizar'}`);\n            button.removeAttribute('disabled');\n            button.innerHTML = originalContent;\n          }\n        } catch (err) {\n          alert('Error de red al conectar con el servidor.');\n          button.removeAttribute('disabled');\n          button.innerHTML = originalContent;\n        }\n      }\n\n      // ACCI\xD3N: ELIMINAR COTIZACI\xD3N\n      if (action === 'delete') {\n        if (!confirm('\xBFEliminar esta cotizaci\xF3n permanentemente?')) return;\n        \n        button.setAttribute('disabled', 'true');\n        const originalContent = button.innerHTML;\n        button.textContent = 'Eliminando...';\n\n        try {\n          const res = await fetch('/api/cotizaciones', {\n            method: 'DELETE',\n            headers: { 'Content-Type': 'application/json' },\n            body: JSON.stringify({ id: String(id) })\n          });\n          \n          if (res.ok) {\n            // Remueve la tarjeta completa de la interfaz de forma limpia\n            card.remove();\n            if (activeContainer.getElementsByClassName('tarjeta-cotizacion').length === 0) {\n              window.location.reload();\n            }\n          } else {\n            const errData = await res.json().catch(() => ({}));\n            alert(`Error al eliminar: ${errData.error || 'No se pudo borrar el registro'}`);\n            button.removeAttribute('disabled');\n            button.innerHTML = originalContent;\n          }\n        } catch (err) {\n          alert('Error de red al intentar eliminar.');\n          button.removeAttribute('disabled');\n          button.innerHTML = originalContent;\n        }\n      }\n    });\n  }\n\n  setupBuzon();\n  document.addEventListener('astro:page-load', setupBuzon);\n<\/script>"], ["", '<div class="space-y-6"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"> <div> <h2 class="text-2xl font-bold text-white tracking-tight">Gesti\xF3n de Cotizaciones</h2> <p class="text-slate-400 text-sm mt-1">Revisa, contacta y convierte las solicitudes de tus clientes potenciales.</p> </div> <div class="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 flex items-center gap-3 self-start"> <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> <span class="text-xs font-medium text-slate-300"> ', ' Pendientes\n</span> </div> </div> <div class="space-y-4" id="buzon-container"> ', " ", " </div> </div> <script>\n  function setupBuzon() {\n    const buzonContainer = document.getElementById('buzon-container');\n    if (!buzonContainer) return;\n\n    buzonContainer.replaceWith(buzonContainer.cloneNode(true));\n    const activeContainer = document.getElementById('buzon-container');\n    if (!activeContainer) return;\n\n    activeContainer.addEventListener('click', async (e) => {\n      const target = e.target;\n      const button = target.closest('button');\n      \n      if (!button) return;\n      if (button.type === 'submit') return;\n\n      const id = button.getAttribute('data-id');\n      const action = button.getAttribute('data-action');\n      \n      // Correcci\xF3n de Nodo: Buscamos expl\xEDcitamente la tarjeta con la clase de cotizaci\xF3n\n      const card = button.closest('.tarjeta-cotizacion');\n\n      if (!id || !card) return;\n\n      // ACCI\xD3N: MARCAR COMO LE\xCDDO\n      if (action === 'read') {\n        button.setAttribute('disabled', 'true');\n        const originalContent = button.innerHTML;\n        button.textContent = 'Actualizando...';\n\n        try {\n          const res = await fetch('/api/cotizaciones', {\n            method: 'PATCH',\n            headers: { 'Content-Type': 'application/json' },\n            body: JSON.stringify({ id: String(id), leido: true })\n          });\n          \n          if (res.ok) {\n            window.location.reload();\n          } else {\n            const errData = await res.json().catch(() => ({}));\n            alert(\\`Error del servidor: \\${errData.error || 'No se pudo actualizar'}\\`);\n            button.removeAttribute('disabled');\n            button.innerHTML = originalContent;\n          }\n        } catch (err) {\n          alert('Error de red al conectar con el servidor.');\n          button.removeAttribute('disabled');\n          button.innerHTML = originalContent;\n        }\n      }\n\n      // ACCI\xD3N: ELIMINAR COTIZACI\xD3N\n      if (action === 'delete') {\n        if (!confirm('\xBFEliminar esta cotizaci\xF3n permanentemente?')) return;\n        \n        button.setAttribute('disabled', 'true');\n        const originalContent = button.innerHTML;\n        button.textContent = 'Eliminando...';\n\n        try {\n          const res = await fetch('/api/cotizaciones', {\n            method: 'DELETE',\n            headers: { 'Content-Type': 'application/json' },\n            body: JSON.stringify({ id: String(id) })\n          });\n          \n          if (res.ok) {\n            // Remueve la tarjeta completa de la interfaz de forma limpia\n            card.remove();\n            if (activeContainer.getElementsByClassName('tarjeta-cotizacion').length === 0) {\n              window.location.reload();\n            }\n          } else {\n            const errData = await res.json().catch(() => ({}));\n            alert(\\`Error al eliminar: \\${errData.error || 'No se pudo borrar el registro'}\\`);\n            button.removeAttribute('disabled');\n            button.innerHTML = originalContent;\n          }\n        } catch (err) {\n          alert('Error de red al intentar eliminar.');\n          button.removeAttribute('disabled');\n          button.innerHTML = originalContent;\n        }\n      }\n    });\n  }\n\n  setupBuzon();\n  document.addEventListener('astro:page-load', setupBuzon);\n<\/script>"])), maybeRenderHead(), listaCotizaciones.filter((c) => !c.leido).length, listaCotizaciones.map((item) => {
    const itemId = item.id ? String(item.id) : "";
    if (!itemId) return null;
    const detalles = item.detalles_proyecto || "";
    const matchSoftware = detalles.match(/^\[Tipo:\s*([^\]]+)\]/);
    const tipoSoftware = matchSoftware ? matchSoftware[1] : "No especificado";
    const mensajeLimpio = detalles.replace(/^\[Tipo:\s*[^\]]+\]\s*/, "") || "Sin descripci\xF3n detallada";
    const fechaFormateada = item.creado_at ? new Date(item.creado_at).toLocaleDateString("es-MX", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit"
    }) : "Fecha no registrada";
    const subjectMail = "Respuesta de Cotizaci\xF3n - Acute";
    const bodyMail = `Hola ${item.nombre},

Muchas gracias por escribirnos. Analizamos los detalles de tu requerimiento para el proyecto de tipo ${tipoSoftware} y nos gustar\xEDa agendar una breve reuni\xF3n para detallar la propuesta comercial.

Quedamos a tus \xF3rdenes.
Atentamente,
Equipo Acute`;
    return (
      /* Tarjeta principal con identificador único de clase para el borrado */
      renderTemplate`<div${addAttribute(itemId, "data-id")}${addAttribute(`tarjeta-cotizacion group relative rounded-2xl border transition-all duration-300 bg-slate-950/40 p-6 ${item.leido ? "border-slate-800/60 opacity-75" : "border-slate-800 bg-gradient-to-r from-blue-950/10 to-transparent border-l-2 border-l-blue-500"}`, "class")}> <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4"> <div> <div class="flex items-center gap-3 flex-wrap"> <h3 class="text-lg font-semibold text-white">${item.nombre || "Cliente sin nombre"}</h3> <span${addAttribute(`text-xs uppercase tracking-wider px-2.5 py-0.5 rounded-md font-medium ${tipoSoftware === "web" ? "bg-blue-500/10 text-blue-400" : tipoSoftware === "mobile" ? "bg-purple-500/10 text-purple-400" : tipoSoftware === "saas" ? "bg-amber-500/10 text-amber-400" : "bg-slate-800 text-slate-400"}`, "class")}> ${tipoSoftware} </span> ${!item.leido && renderTemplate`<span class="bg-blue-500/10 text-blue-400 text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded animate-pulse">
Nuevo
</span>`} </div> <div class="flex items-center gap-4 text-xs text-slate-400 mt-1.5 flex-wrap"> <span class="flex items-center gap-1.5"> <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> ${item.correo} </span> ${item.telefono && item.telefono !== "No especificado" && renderTemplate`<span class="flex items-center gap-1.5"> <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> ${item.telefono} </span>`} </div> </div> <span class="text-xs text-slate-500 bg-slate-900/60 px-3 py-1 rounded-lg border border-slate-800/40 font-mono whitespace-nowrap"> ${fechaFormateada} </span> </div> <div class="bg-slate-900/50 rounded-xl p-4 border border-slate-800/40 text-sm text-slate-300 leading-relaxed mb-5"> <p class="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1.5">Requerimiento de software:</p> ${mensajeLimpio} </div> <div class="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-900"> <div class="flex items-center gap-2 flex-wrap"> <a${addAttribute(`https://wa.me/${item.telefono?.replace(/\D/g, "")}?text=${encodeURIComponent(`Hola ${item.nombre}, gracias por contactar a Acute. He revisado tu solicitud sobre el software (${tipoSoftware}) y...`)}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 px-4 py-2 text-xs font-semibold text-emerald-400 hover:text-white transition-all duration-300"> <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4 0 12.008 0c3.202.001 6.212 1.246 8.477 3.513 2.263 2.268 3.507 5.28 3.503 8.487-.008 6.652-5.34 12-11.958 12-2.005-.001-3.973-.503-5.729-1.457L0 24zm6.59-4.046c1.654.982 3.511 1.5 5.409 1.5 5.315 0 9.642-4.327 9.648-9.647.003-2.577-1-5.002-2.82-6.825C17.06 3.16 14.636 2.16 12.01 2.16c-5.322 0-9.65 4.327-9.656 9.648-.001 2.02.527 3.991 1.53 5.733L2.895 21.19l3.752-1.236zM17.93 15.3c-.322-.16-1.905-.94-2.197-1.047-.294-.108-.507-.16-.72.16-.214.32-.828 1.047-1.014 1.26-.187.214-.373.24-.696.08-.322-.16-1.36-.5-2.59-1.6c-.957-.852-1.602-1.905-1.79-2.225-.186-.32-.02-.493.14-.654.146-.144.323-.374.484-.56.16-.188.214-.32.32-.534.108-.214.054-.4-.026-.56-.08-.16-.72-1.734-.987-2.374-.26-.625-.526-.54-.72-.55-.187-.01-.4-.01-.614-.01-.214 0-.56.08-.854.4-.294.32-1.12 1.1-1.12 2.678 0 1.578 1.147 3.1 1.307 3.32.16.214 2.257 3.447 5.467 4.837.763.33 1.357.527 1.82.674.766.244 1.463.21 2.013.127.614-.093 1.905-.78 2.172-1.496.267-.713.267-1.325.187-1.453-.08-.126-.294-.213-.615-.373z"></path> </svg>
Responder por WhatsApp
</a> <a${addAttribute(`mailto:${item.correo}?subject=${encodeURIComponent(subjectMail)}&body=${encodeURIComponent(bodyMail)}`, "href")} class="inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-all duration-300 border border-slate-800"> <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path> </svg>
Responder por Correo
</a> <form method="POST" class="inline m-0"> <input type="hidden" name="accion" value="crear_cliente"> <input type="hidden" name="nombre_empresa"${addAttribute(item.nombre || "Prospecto Web", "value")}> <input type="hidden" name="nombre_contacto"${addAttribute(item.nombre || "Sin Nombre", "value")}> <input type="hidden" name="correo"${addAttribute(item.correo || "", "value")}> <input type="hidden" name="telefono"${addAttribute(item.telefono || "", "value")}> <button type="submit" class="inline-flex items-center gap-2 rounded-xl bg-blue-500/10 hover:bg-blue-600 px-4 py-2 text-xs font-semibold text-blue-400 hover:text-white transition-all duration-300 border border-blue-500/20"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path> </svg>
Convertir en Cliente
</button> </form> </div> <div class="flex items-center gap-2"> ${!item.leido && renderTemplate`<button type="button" data-action="read"${addAttribute(itemId, "data-id")} class="inline-flex items-center gap-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-600 px-3 py-2 text-xs font-medium text-blue-400 hover:text-white transition-all duration-300"> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>
Marcar leído
</button>`} <button type="button" data-action="delete"${addAttribute(itemId, "data-id")} class="inline-flex items-center gap-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-600 px-3 py-2 text-xs font-medium text-rose-400 hover:text-white transition-all duration-300"> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-16v4M4 7h16"></path> </svg>
Eliminar
</button> </div> </div> </div>`
    );
  }), listaCotizaciones.length === 0 && renderTemplate`<div class="text-center py-16 bg-slate-900/20 rounded-2xl border border-slate-800/50"> <p class="text-slate-400 text-sm">El buzón está vacío de momento.</p> </div>`);
}, "C:/Users/User/Documents/acute/src/components/admin/TabCotizaciones.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const tokenSesion = Astro2.cookies.get("acute_admin_session");
  if (!tokenSesion) {
    console.log("[AdminGuard] No hay cookie de sesi\xF3n detectada. Redirigiendo a login.");
    return Astro2.redirect("/admin/login");
  }
  const correoUsuarioLogueado = tokenSesion.value;
  console.log(`[AdminGuard] Validando permisos en DB para: ${correoUsuarioLogueado}`);
  const { data: usuarioAutorizado, error: errorAutorizacion } = await supabase.from("usuarios_autorizados").select("correo").eq("correo", correoUsuarioLogueado).maybeSingle();
  if (errorAutorizacion || !usuarioAutorizado) {
    console.warn(`[Acceso Denegado]: El correo ${correoUsuarioLogueado} no est\xE1 autorizado en la lista blanca.`);
    Astro2.cookies.delete("acute_admin_session", { path: "/" });
    return Astro2.redirect("/admin/login?error=no_autorizado");
  }
  const tituloPanel = "CRM & Control Operativo | Acute";
  let mensajeFeedBack = "";
  const url = new URL(Astro2.request.url);
  const seccionActiva = url.searchParams.get("tab") || "clientes";
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const accion = formData.get("accion");
      if (accion === "crear_cliente") {
        const nombre_empresa = formData.get("nombre_empresa")?.toString() || "";
        const nombre_contacto = formData.get("nombre_contacto")?.toString() || "";
        const correo = formData.get("correo")?.toString() || "";
        const telefono = formData.get("telefono")?.toString() || "";
        if (nombre_empresa && nombre_contacto) {
          const { error } = await supabase.from("clientes").insert([{ nombre_empresa, nombre_contacto, correo, telefono }]);
          if (error) throw error;
          mensajeFeedBack = "Cliente registrado con \xE9xito.";
        }
      }
      if (accion === "eliminar_cliente") {
        const id = formData.get("id")?.toString();
        if (id) {
          const { error } = await supabase.from("clientes").delete().eq("id", id);
          if (error) throw error;
          mensajeFeedBack = "Cliente eliminado.";
        }
      }
      if (accion === "crear_proyecto") {
        const cliente_id = Number(formData.get("cliente_id"));
        const nombre_app = formData.get("nombre_app")?.toString() || "";
        const descripcion = formData.get("descripcion")?.toString() || "";
        const tecnologias = formData.get("tecnologias")?.toString() || "";
        const costo_total = Number(formData.get("costo_total")) || 0;
        const total_abonado = Number(formData.get("total_abonado")) || 0;
        const estatus = formData.get("estatus")?.toString() || "En Desarrollo";
        const fecha_inicio = formData.get("fecha_inicio")?.toString() || void 0;
        const fecha_entrega_estimada = formData.get("fecha_entrega_estimada")?.toString() || void 0;
        if (cliente_id && nombre_app) {
          const { error } = await supabase.from("proyectos").insert([{
            cliente_id,
            nombre_app,
            descripcion,
            tecnologias,
            costo_total,
            total_abonado,
            estatus,
            fecha_inicio,
            fecha_entrega_estimada
          }]);
          if (error) throw error;
          mensajeFeedBack = "Proyecto detallado asignado con \xE9xito.";
        }
      }
      if (accion === "abonar") {
        const id = formData.get("id")?.toString();
        const nuevoAbono = Number(formData.get("nuevo_abono")) || 0;
        const abonoActual = Number(formData.get("abono_actual")) || 0;
        if (id && nuevoAbono > 0) {
          const { error } = await supabase.from("proyectos").update({ total_abonado: abonoActual + nuevoAbono }).eq("id", id);
          if (error) throw error;
          mensajeFeedBack = "Abono aplicado.";
        }
      }
      if (accion === "cambiar_estatus") {
        const id = formData.get("id")?.toString();
        const nuevoEstatus = formData.get("nuevo_estatus")?.toString();
        if (id && nuevoEstatus) {
          const { error } = await supabase.from("proyectos").update({ estatus: nuevoEstatus }).eq("id", id);
          if (error) throw error;
          mensajeFeedBack = "Estatus del software modificado.";
        }
      }
      if (accion === "eliminar_proyecto") {
        const id = formData.get("id")?.toString();
        if (id) {
          const { error } = await supabase.from("proyectos").delete().eq("id", id);
          if (error) throw error;
          mensajeFeedBack = "Proyecto eliminado.";
        }
      }
    } catch (err) {
      mensajeFeedBack = `Error: ${err.message}`;
    }
  }
  const { data: dbClientes } = await supabase.from("clientes").select("*").order("id", { ascending: true });
  const listaClientes = dbClientes || [];
  const { data: dbProyectos } = await supabase.from("proyectos").select("*, clientes(nombre_empresa, nombre_contacto, correo, telefono)").order("id", { ascending: true });
  const dbProyectosValidos = dbProyectos || [];
  const proyectosConCalculo = dbProyectosValidos.map((p) => {
    const total = Number(p.costo_total) || 0;
    const abonado = Number(p.total_abonado) || 0;
    const diff = total - abonado;
    const saldo = Math.max(0, diff);
    const esLiquidado = Math.sign(diff) !== 1;
    return {
      ...p,
      total,
      abonado,
      saldo,
      esLiquidado,
      nombreEmpresa: p.clientes?.nombre_empresa || "Cliente Desconocido",
      contactoNombre: p.clientes?.nombre_contacto || "Sin contacto",
      contactoCorreo: p.clientes?.correo || "Sin correo",
      contactoTelefono: p.clientes?.telefono || "Sin tel\xE9fono"
    };
  });
  const ingresosTotales = proyectosConCalculo.reduce((sum, p) => sum + p.total, 0);
  const dineroEnMano = proyectosConCalculo.reduce((sum, p) => sum + p.abonado, 0);
  const cuentasPorCobrar = ingresosTotales - dineroEnMano;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', "</title>", '</head> <body class="bg-[#0b1120] text-[#f8fafc] font-sans antialiased overflow-x-hidden"> ', ' <main class="max-w-7xl mx-auto p-4 sm:p-8 space-y-6"> ', " ", " ", " ", ` </main> <div id="backdrop-panel" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden opacity-0 transition-opacity duration-300"> <div id="drawer-panel" class="absolute right-0 top-0 bottom-0 w-full max-w-md sm:max-w-lg bg-slate-900 border-l border-slate-800 h-full p-6 sm:p-8 shadow-2xl flex flex-col justify-between transform translate-x-full transition-transform duration-300 ease-out overflow-y-auto"> <div class="space-y-6"> <div class="flex justify-between items-start border-b border-slate-800 pb-4"> <div> <span id="det-estatus" class="bg-blue-500/10 text-blue-400 text-[10px] uppercase font-mono px-2 py-0.5 rounded border border-blue-500/20 font-bold"></span> <h3 id="det-nombre" class="text-xl font-bold text-white mt-2 tracking-tight"></h3> <p id="det-empresa" class="text-sm text-slate-400 font-medium"></p> </div> <button id="cerrar-panel" class="text-slate-500 hover:text-slate-300 p-1.5 rounded-lg hover:bg-slate-800 transition-colors"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> </button> </div> <div class="space-y-2"> <h4 class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Descripci\xF3n del Desarrollo</h4> <p id="det-descripcion" class="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800/60"></p> </div> <div class="space-y-2"> <h4 class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tecnolog\xEDas Clave</h4> <div id="det-tecnologias" class="text-sm font-mono text-blue-400 bg-slate-950/60 border border-slate-800/40 px-3 py-2 rounded-xl"></div> </div> <div class="grid grid-cols-2 gap-4 bg-slate-950/40 border border-slate-800/40 p-4 rounded-xl text-xs font-mono"> <div><span class="text-slate-600 block mb-0.5">Fecha Inicio:</span><span id="det-inicio" class="text-slate-300 font-medium"></span></div> <div><span class="text-slate-600 block mb-0.5">Entrega Estimada:</span><span id="det-entrega" class="text-slate-300 font-medium"></span></div> </div> <div class="space-y-2 border-t border-slate-800 pt-4"> <h4 class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Contacto del Cliente</h4> <div class="bg-slate-950 p-4 rounded-xl border border-slate-800/60 space-y-2 text-xs"> <div><span class="text-slate-500">Representante:</span> <span id="det-contacto" class="text-slate-200 font-medium"></span></div> <div><span class="text-slate-500">Correo:</span> <span id="det-correo" class="text-slate-300 font-mono"></span></div> <div><span class="text-slate-500">Tel\xE9fono:</span> <span id="det-telefono" class="text-slate-300 font-mono"></span></div> </div> </div> </div> <div class="border-t border-slate-800 pt-5 mt-6 bg-slate-900 sticky bottom-0 space-y-4"> <h4 class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Desglose Monetario ($ USD)</h4> <div class="grid grid-cols-3 gap-3 text-center text-xs"> <div class="bg-slate-950 p-2.5 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[10px]">Total</span><span id="det-total" class="font-mono text-white font-bold text-sm block mt-1"></span></div> <div class="bg-slate-950 p-2.5 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[10px]">Cobrado</span><span id="det-emerald-400 font-bold text-sm block mt-1"></span></div> <div class="bg-slate-950 p-2.5 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[10px]">Restante</span><span id="det-saldo" class="font-mono text-amber-500 font-bold text-sm block mt-1"></span></div> </div> </div> </div> </div> <script>
    const backdrop = document.getElementById('backdrop-panel');
    const drawer = document.getElementById('drawer-panel');
    const btnCerrar = document.getElementById('cerrar-panel');

    const detNombre = document.getElementById('det-nombre');
    const detEmpresa = document.getElementById('det-empresa');
    const detEstatus = document.getElementById('det-estatus');
    const detDescripcion = document.getElementById('det-descripcion');
    const detTecnologias = document.getElementById('det-tecnologias');
    const detInicio = document.getElementById('det-inicio');
    const detEntrega = document.getElementById('det-entrega');
    const detContacto = document.getElementById('det-contacto');
    const detCorreo = document.getElementById('det-correo');
    const detTelefono = document.getElementById('det-telefono');
    const detTotal = document.getElementById('det-total');
    const detAbonado = document.getElementById('det-abonado');
    const detSaldo = document.getElementById('det-saldo');

    document.addEventListener('click', (e) => {
      const fila = e.target.closest('.btn-detalles');
      if (!fila) return;

      if (detNombre) detNombre.textContent = fila.getAttribute('data-nombre');
      if (detEmpresa) detEmpresa.textContent = fila.getAttribute('data-empresa');
      if (detEstatus) detEstatus.textContent = fila.getAttribute('data-estatus');
      if (detDescripcion) detDescripcion.textContent = fila.getAttribute('data-descripcion');
      if (detTecnologias) detTecnologias.textContent = fila.getAttribute('data-tecnologias');
      if (detInicio) detInicio.textContent = fila.getAttribute('data-inicio');
      if (detEntrega) detEntrega.textContent = fila.getAttribute('data-entrega');
      if (detContacto) detContacto.textContent = fila.getAttribute('data-contacto');
      if (detCorreo) detCorreo.textContent = fila.getAttribute('data-correo');
      if (detTelefono) detTelefono.textContent = fila.getAttribute('data-telefono');
      if (detTotal) detTotal.textContent = \`$\${fila.getAttribute('data-total')}\`;
      if (detAbonado) detAbonado.textContent = \`$\${fila.getAttribute('data-abonado')}\`;
      if (detSaldo) detSaldo.textContent = \`$\${fila.getAttribute('data-saldo')}\`;

      if (backdrop) {
        backdrop.classList.remove('hidden');
        setTimeout(() => backdrop.classList.remove('opacity-0'), 10);
      }
      if (drawer) drawer.classList.remove('translate-x-full');
    });

    function ocultarPanel() {
      if (backdrop) backdrop.classList.add('opacity-0');
      if (drawer) drawer.classList.add('translate-x-full');
      setTimeout(() => { if (backdrop) backdrop.classList.add('hidden'); }, 300);
    }

    if (btnCerrar) btnCerrar.addEventListener('click', ocultarPanel);
    if (backdrop) backdrop.addEventListener('click', (e) => { if (e.target === backdrop) ocultarPanel(); });
  <\/script> </body> </html>`], ['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', "</title>", '</head> <body class="bg-[#0b1120] text-[#f8fafc] font-sans antialiased overflow-x-hidden"> ', ' <main class="max-w-7xl mx-auto p-4 sm:p-8 space-y-6"> ', " ", " ", " ", ` </main> <div id="backdrop-panel" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden opacity-0 transition-opacity duration-300"> <div id="drawer-panel" class="absolute right-0 top-0 bottom-0 w-full max-w-md sm:max-w-lg bg-slate-900 border-l border-slate-800 h-full p-6 sm:p-8 shadow-2xl flex flex-col justify-between transform translate-x-full transition-transform duration-300 ease-out overflow-y-auto"> <div class="space-y-6"> <div class="flex justify-between items-start border-b border-slate-800 pb-4"> <div> <span id="det-estatus" class="bg-blue-500/10 text-blue-400 text-[10px] uppercase font-mono px-2 py-0.5 rounded border border-blue-500/20 font-bold"></span> <h3 id="det-nombre" class="text-xl font-bold text-white mt-2 tracking-tight"></h3> <p id="det-empresa" class="text-sm text-slate-400 font-medium"></p> </div> <button id="cerrar-panel" class="text-slate-500 hover:text-slate-300 p-1.5 rounded-lg hover:bg-slate-800 transition-colors"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> </button> </div> <div class="space-y-2"> <h4 class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Descripci\xF3n del Desarrollo</h4> <p id="det-descripcion" class="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800/60"></p> </div> <div class="space-y-2"> <h4 class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tecnolog\xEDas Clave</h4> <div id="det-tecnologias" class="text-sm font-mono text-blue-400 bg-slate-950/60 border border-slate-800/40 px-3 py-2 rounded-xl"></div> </div> <div class="grid grid-cols-2 gap-4 bg-slate-950/40 border border-slate-800/40 p-4 rounded-xl text-xs font-mono"> <div><span class="text-slate-600 block mb-0.5">Fecha Inicio:</span><span id="det-inicio" class="text-slate-300 font-medium"></span></div> <div><span class="text-slate-600 block mb-0.5">Entrega Estimada:</span><span id="det-entrega" class="text-slate-300 font-medium"></span></div> </div> <div class="space-y-2 border-t border-slate-800 pt-4"> <h4 class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Contacto del Cliente</h4> <div class="bg-slate-950 p-4 rounded-xl border border-slate-800/60 space-y-2 text-xs"> <div><span class="text-slate-500">Representante:</span> <span id="det-contacto" class="text-slate-200 font-medium"></span></div> <div><span class="text-slate-500">Correo:</span> <span id="det-correo" class="text-slate-300 font-mono"></span></div> <div><span class="text-slate-500">Tel\xE9fono:</span> <span id="det-telefono" class="text-slate-300 font-mono"></span></div> </div> </div> </div> <div class="border-t border-slate-800 pt-5 mt-6 bg-slate-900 sticky bottom-0 space-y-4"> <h4 class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Desglose Monetario ($ USD)</h4> <div class="grid grid-cols-3 gap-3 text-center text-xs"> <div class="bg-slate-950 p-2.5 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[10px]">Total</span><span id="det-total" class="font-mono text-white font-bold text-sm block mt-1"></span></div> <div class="bg-slate-950 p-2.5 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[10px]">Cobrado</span><span id="det-emerald-400 font-bold text-sm block mt-1"></span></div> <div class="bg-slate-950 p-2.5 rounded-lg border border-slate-800"><span class="text-slate-500 block text-[10px]">Restante</span><span id="det-saldo" class="font-mono text-amber-500 font-bold text-sm block mt-1"></span></div> </div> </div> </div> </div> <script>
    const backdrop = document.getElementById('backdrop-panel');
    const drawer = document.getElementById('drawer-panel');
    const btnCerrar = document.getElementById('cerrar-panel');

    const detNombre = document.getElementById('det-nombre');
    const detEmpresa = document.getElementById('det-empresa');
    const detEstatus = document.getElementById('det-estatus');
    const detDescripcion = document.getElementById('det-descripcion');
    const detTecnologias = document.getElementById('det-tecnologias');
    const detInicio = document.getElementById('det-inicio');
    const detEntrega = document.getElementById('det-entrega');
    const detContacto = document.getElementById('det-contacto');
    const detCorreo = document.getElementById('det-correo');
    const detTelefono = document.getElementById('det-telefono');
    const detTotal = document.getElementById('det-total');
    const detAbonado = document.getElementById('det-abonado');
    const detSaldo = document.getElementById('det-saldo');

    document.addEventListener('click', (e) => {
      const fila = e.target.closest('.btn-detalles');
      if (!fila) return;

      if (detNombre) detNombre.textContent = fila.getAttribute('data-nombre');
      if (detEmpresa) detEmpresa.textContent = fila.getAttribute('data-empresa');
      if (detEstatus) detEstatus.textContent = fila.getAttribute('data-estatus');
      if (detDescripcion) detDescripcion.textContent = fila.getAttribute('data-descripcion');
      if (detTecnologias) detTecnologias.textContent = fila.getAttribute('data-tecnologias');
      if (detInicio) detInicio.textContent = fila.getAttribute('data-inicio');
      if (detEntrega) detEntrega.textContent = fila.getAttribute('data-entrega');
      if (detContacto) detContacto.textContent = fila.getAttribute('data-contacto');
      if (detCorreo) detCorreo.textContent = fila.getAttribute('data-correo');
      if (detTelefono) detTelefono.textContent = fila.getAttribute('data-telefono');
      if (detTotal) detTotal.textContent = \\\`$\\\${fila.getAttribute('data-total')}\\\`;
      if (detAbonado) detAbonado.textContent = \\\`$\\\${fila.getAttribute('data-abonado')}\\\`;
      if (detSaldo) detSaldo.textContent = \\\`$\\\${fila.getAttribute('data-saldo')}\\\`;

      if (backdrop) {
        backdrop.classList.remove('hidden');
        setTimeout(() => backdrop.classList.remove('opacity-0'), 10);
      }
      if (drawer) drawer.classList.remove('translate-x-full');
    });

    function ocultarPanel() {
      if (backdrop) backdrop.classList.add('opacity-0');
      if (drawer) drawer.classList.add('translate-x-full');
      setTimeout(() => { if (backdrop) backdrop.classList.add('hidden'); }, 300);
    }

    if (btnCerrar) btnCerrar.addEventListener('click', ocultarPanel);
    if (backdrop) backdrop.addEventListener('click', (e) => { if (e.target === backdrop) ocultarPanel(); });
  <\/script> </body> </html>`])), tituloPanel, renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "seccionActiva": seccionActiva }), mensajeFeedBack && renderTemplate`<div class="bg-blue-950/40 border border-blue-800/60 p-4 rounded-xl text-sm text-blue-300 max-w-md"> ${mensajeFeedBack} </div>`, seccionActiva === "clientes" && renderTemplate`${renderComponent($$result, "TabClientes", $$TabClientes, { "listaClientes": listaClientes })}`, seccionActiva === "proyectos" && renderTemplate`<div class="space-y-6"> ${renderComponent($$result, "Kpis", $$Kpis, { "ingresosTotales": ingresosTotales, "dineroEnMano": dineroEnMano, "cuentasPorCobrar": cuentasPorCobrar })} ${renderComponent($$result, "TabProyectos", $$TabProyectos, { "proyectosConCalculo": proyectosConCalculo, "listaClientes": listaClientes })} </div>`, seccionActiva === "cotizaciones" && renderTemplate`${renderComponent($$result, "TabCotizaciones", $$TabCotizaciones, {})}`);
}, "C:/Users/User/Documents/acute/src/pages/admin/index.astro", void 0);

const $$file = "C:/Users/User/Documents/acute/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
