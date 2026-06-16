import { defineConfig as baseDefineConfig } from "@lovable.dev/vite-tanstack-config";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

function defineConfig(options: any) {
  const configFn = baseDefineConfig(options);
  return async (env: any) => {
    const config = await configFn(env);
    config.plugins = config.plugins || [];

    // Flatten and filter existing plugins
    const flatPlugins = config.plugins.flat(Infinity).filter(Boolean);
    
    // Check if tanstackStart is already registered
    const hasTanStack = flatPlugins.some(
      (p: any) => p && typeof p === "object" && p.name && p.name.startsWith("tanstack-")
    );

    // Check if viteReact is already registered
    const hasReact = flatPlugins.some(
      (p: any) => p && typeof p === "object" && p.name && p.name.startsWith("vite:react")
    );

    // If TanStack Start plugin is missing, load it first (must precede JSX/React plugins)
    if (!hasTanStack) {
      config.plugins.push(
        tanstackStart({
          server: { entry: "server" },
        })
      );
    }

    // If React plugin is missing (e.g. on localhost), dynamically import and load it second
    if (!hasReact) {
      const viteReact = (await import("@vitejs/plugin-react")).default;
      config.plugins.push(viteReact());
    }

    return config;
  };
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  plugins: [],
});


