// import tailwind from '@astrojs/tailwind';

// export default {
//   integrations: [tailwind()],
//   site: 'https://www.acute.dev',
//   markdown: {
//     syntaxHighlight: 'shiki'
//   }
// };

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'; // <-- Importación exacta para la versión 7

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid', // <-- Mantiene tu web comercial estática
  adapter: vercel(), // <-- Conecta el backend con Vercel
});