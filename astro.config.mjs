

// import { defineConfig } from 'astro/config';
// import tailwind from '@astrojs/tailwind';
// import vercel from '@astrojs/vercel/serverless';

// // https://astro.build/config
// export default defineConfig({
//   integrations: [tailwind()],
//   output: 'hybrid', // Mantiene tu web comercial estática
//   adapter: vercel({
//     // Forzamos quirúrgicamente a que las Serverless Functions se compilen para Node 20
//     runtime: 'nodejs20.x'
//   }),
// });

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
  
  // Agregamos esta sección para ganarle la batalla a Vite y Vercel
  vite: {
    ssr: {
      external: ['ws'] // Le dice a Vite que no toque 'ws' en el cliente, y a Vercel que lo instale en Node 20
    }
  }
});