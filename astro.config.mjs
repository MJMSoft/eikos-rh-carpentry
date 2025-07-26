import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    server: {
      fs: {
        allow: [
          // Permite el directorio del proyecto
          '/Users/mariajosepa/Desktop/my-projects/website-demos/categories/generated/eikos-rh-carpentry',
          // Permite el directorio de node_modules
          '/Users/mariajosepa/Desktop/my-projects/website-demos/categories/node_modules'
        ]
      }
    }
  }
});