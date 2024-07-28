import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/harrsann/',  // beddel magaca_kaydkaaga magaca kaydkaaga dhabta ah
  server: {
    // port: 8001,
  },
});
