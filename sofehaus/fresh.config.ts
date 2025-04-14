import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

// Configure the Tailwind plugin to process CSS
export default defineConfig({
  plugins: [
    tailwind(),
  ],
  server: {
    port: 8000,
  },
});
