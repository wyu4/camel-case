import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = resolve(__dirname, "src");

// https://vite.dev/config/
export default defineConfig({
    root,
    plugins: [react()],
    build: {
        outDir: resolve(__dirname, "dist"),
        emptyOutDir: true,
        // rollupOptions: {
        //     input: {
        //         main: resolve(root, "index.html"),
        //         placeholder: resolve(
        //             root,
        //             "pages",
        //             "placeholder",
        //             "index.html"
        //         ),
        //     },
        // },
    },
});
