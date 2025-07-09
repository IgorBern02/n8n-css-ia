import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/n8n-css-ia/", // ✅ Adicione essa linha
  plugins: [react()],
});
