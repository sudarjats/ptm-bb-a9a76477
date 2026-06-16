import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  cloudflare: false,
  plugins: [
    tanstackStart({ server: { entry: "server" } }),
    cloudflare({ viteEnvironment: { name: "ssr" } }),
  ],
});
