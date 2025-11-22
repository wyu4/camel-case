import { dirname, resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const root = resolve(__dirname, "src");

// https://vite.dev/config/
export default defineConfig({
    root,
    plugins: [react()],
    build: {
        outDir: resolve(__dirname, "dist"),
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, "index.html"),
                placeholderer: resolve(root, "placeholder", "index.html"),
                sponsorship: resolve(root, "sponsorship", "index.html"),
                signup: resolve(root, "signup", "index.html"),
            },
        },
    },
});
