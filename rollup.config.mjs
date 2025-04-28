import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import  terser  from "@rollup/plugin-terser";

export default {
  input: "src/index.js", // entry point
  output: [
    {
      file: "dist/index.js",
      format: "cjs", // CommonJS
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm", // ES Modules
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    babel({ 
      babelHelpers: "bundled", 
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"]
    }),
    postcss({
      extract: false, // We don't extract CSS separately
      modules: false,
      use: ["sass"],
    }),
    terser(), // minify
  ],
};
