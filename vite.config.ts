import { defineConfig } from "vite";
import path from "path";
import fs from "fs";

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

export default defineConfig({
    // Root is the current directory
    root: ".",

    // Public directory for static assets
    publicDir: "assets",

    // Build output configuration
    build: {
        outDir: ".",
        emptyOutDir: false, // Don't empty root since we're building to it
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "index.html"),
            },
            output: {
                entryFileNames: "assets/js/[name].[hash].bundle.js",
                chunkFileNames: "assets/js/[name].[hash].bundle.js",
                assetFileNames: "assets/[ext]/[name].[hash].[ext]",
            },
        },
        // Generate sourcemaps for production debugging
        sourcemap: false,
    },

    // Development server configuration
    server: {
        port: 3000,
        host: "localhost",
        open: true,
        strictPort: false,
    },

    // Define environment variables
    define: {
        __APP_VERSION__: JSON.stringify(pkg.version),
    },

    // Resolve configuration
    resolve: {
        extensions: [".ts", ".js", ".json"],
    },
});
