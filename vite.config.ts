import { defineConfig as baseDefineConfig } from "@lovable.dev/vite-tanstack-config";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default async (env: any) => {
  const configFn = baseDefineConfig({
    tanstackStart: {
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      // nitro/vite builds from this
      server: { entry: "server" },
    },
    plugins: [],
  });

  const resolvedConfig = await configFn(env);

  // Ensure plugins array exists
  resolvedConfig.plugins = resolvedConfig.plugins || [];

  // Flatten plugins to look for existing tanstack plugins (since Vite plugins can be nested arrays)
  const flatPlugins = resolvedConfig.plugins.flat(Infinity).filter(Boolean);

  const hasTanStack = flatPlugins.some(
    (p: any) => p && typeof p === "object" && p.name && p.name.startsWith("tanstack-")
  );

  if (!hasTanStack) {
    resolvedConfig.plugins.push(
      tanstackStart({
        server: { entry: "server" },
      })
    );
  }

  return resolvedConfig;
};

