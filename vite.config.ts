import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  vite: {
    plugins: [
      tanstackStart({
        server: { entry: "server" },
      }),
    ],
  },
});
