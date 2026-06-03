import tailwind from '@astrojs/tailwind';

export default {
  integrations: [tailwind()],
  site: 'https://www.acute.dev',
  markdown: {
    syntaxHighlight: 'shiki'
  }
};
