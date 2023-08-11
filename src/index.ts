import type { PluginOption } from "vite";
import JitEnv, { JitEnvOptions } from "./jit-env";

export default function jitEnv(options: JitEnvOptions): PluginOption {
  // Tmp noop until restart can be set
  let reload = () => {};

  // Create the JitEnv instance to transform HTML files
  const jitEnv = new JitEnv(options, () => {
    reload();
  });

  return {
    name: "vite-plugin-jit-env",
    version: "1.0",

    // HTML transform hook
    transformIndexHtml(html) {
      return jitEnv.transform(html);
    },

    configureServer(server) {
      reload = server.restart;
    }
  };
}
