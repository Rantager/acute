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

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'hybrid', // Mantiene tu web comercial estática
  adapter: vercel({
    // Forzamos quirúrgicamente a que las Serverless Functions se compilen para Node 20
    runtime: 'nodejs20.x'
  }),
  
  vite: {
    build: {
      rollupOptions: {
        // Esto le dice a Rollup de forma global (exactamente lo que pide el error en tu log):
        // "Si ves el paquete 'ws', no intentes resolverlo ni meterlo en ningún bundle"
        external: ['ws']
      }
    }
  }
});