import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://renatozuniga2405.github.io',
  base: '/AppEcomerce',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
