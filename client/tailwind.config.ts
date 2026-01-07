import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#ffffff",
        border: "#e5e7eb",
        muted: "#6b7280",
        header: "#f9fafb",
        gain: "#16a34a",
        loss: "#dc2626",
      },
      fontSize: {
        table: "0.875rem",
      },
    },
  },
  plugins: [],
};

export default config;
