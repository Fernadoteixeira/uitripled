import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: false,
  clean: false,
  sourcemap: false,
  external: ["react", "react-dom"],
  silent: true,
});
