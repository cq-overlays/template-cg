import { defineConfig } from "vite"
import { resolve } from "path"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "graphics",
    sourcemap: true,
    rollupOptions: {
      input: {
        break: resolve(__dirname, "break.html"),
        game: resolve(__dirname, "game.html"),
      },
    },
  },
})
