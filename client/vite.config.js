import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    chunkSizeWarningLimit: 1000,

    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "react-vendor",
              test: /node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
            },
            {
              name: "firebase-vendor",
              test: /node_modules[\\/]firebase[\\/]/,
            },
            {
              name: "pdf-vendor",
              test: /node_modules[\\/](jspdf|html2canvas|jspdf-autotable)[\\/]/,
            },
            {
              name: "ui-vendor",
              test: /node_modules[\\/](motion|framer-motion|react-icons)[\\/]/,
            },
            {
              name: "vendor",
              test: /node_modules[\\/]/,
            },
          ],
        },
      },
    },
  },
});