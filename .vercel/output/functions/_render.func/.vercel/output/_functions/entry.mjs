import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BVkL7QS5.mjs';
import { manifest } from './manifest_Fv5SKa4m.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/cotizaciones.astro.mjs');
const _page2 = () => import('./pages/admin/login.astro.mjs');
const _page3 = () => import('./pages/admin.astro.mjs');
const _page4 = () => import('./pages/api/auth/callback.astro.mjs');
const _page5 = () => import('./pages/api/cotizaciones.astro.mjs');
const _page6 = () => import('./pages/api/cotizaciones-status.astro.mjs');
const _page7 = () => import('./pages/cotizar.astro.mjs');
const _page8 = () => import('./pages/privacidad.astro.mjs');
const _page9 = () => import('./pages/proyectos.astro.mjs');
const _page10 = () => import('./pages/servicios.astro.mjs');
const _page11 = () => import('./pages/terminos.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/cotizaciones.astro", _page1],
    ["src/pages/admin/login.astro", _page2],
    ["src/pages/admin/index.astro", _page3],
    ["src/pages/api/auth/callback.ts", _page4],
    ["src/pages/api/cotizaciones.ts", _page5],
    ["src/pages/api/cotizaciones-status.ts", _page6],
    ["src/pages/cotizar.astro", _page7],
    ["src/pages/privacidad.astro", _page8],
    ["src/pages/proyectos.astro", _page9],
    ["src/pages/servicios.astro", _page10],
    ["src/pages/terminos.astro", _page11],
    ["src/pages/index.astro", _page12]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "cd055a35-92ef-4f46-a22b-3814c511cf0a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
