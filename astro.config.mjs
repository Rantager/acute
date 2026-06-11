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
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid', // Mantiene tu web comercial estática
  adapter: vercel({
    // Forzamos quirúrgicamente a que las Serverless Functions se compilen para Node 20
    runtime: 'nodejs20.x'
  }),
});