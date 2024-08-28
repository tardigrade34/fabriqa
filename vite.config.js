import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/fabriqa/", // Bu, GitHub Pages'deki repository adınıza göre ayarlanmalı
  plugins: [react()],
});
