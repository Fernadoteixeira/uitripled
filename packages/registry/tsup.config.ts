import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["esm"],
  dts: false,
  clean: false,
  sourcemap: false,
  external: ["react", "framer-motion"],
  silent: true,
});
