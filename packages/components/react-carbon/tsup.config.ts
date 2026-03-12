import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/components/**/*.tsx"],
  format: ["esm"],
  dts: false,
  clean: false,
  sourcemap: false,
  external: [
    "react",
    "react-dom",
    "framer-motion",
    "@uitripled/utils",
    "lucide-react",
    "@uitripled/react-shadcn",
  ],
  silent: true,
});
