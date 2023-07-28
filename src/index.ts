import type { PluginOption } from "vite";
import JitEnv, { JitEnvOptions } from "./jit-env";

export default function pluginJitEnv(options: JitEnvOptions): PluginOption {
  // TODO: pass the proper requestUpdate function
  const jitEnv = new JitEnv(options, () => null);
  return {
    name: "vite-plugin-jit-env",
    version: "1.0",
    transformIndexHtml(html) {
      return jitEnv.transform(html);
    },
  };
}
