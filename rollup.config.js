import { defineConfig } from "rollup"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import json from "@rollup/plugin-json"

export default defineConfig({
    input: "./index.ts",
    output: {
        dir: "./dist",
        format: "es"
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            declaration: true,
            declarationDir: "./dist"
        }),
        json(),
    ]
})