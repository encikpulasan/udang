import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        sofehaus: {
          primary: "#3563E9", // Main brand color - vibrant blue
          secondary: "#26C6DA", // Secondary color - teal blue
          accent: "#FF7043", // Accent color - soft orange
          dark: "#1E293B", // Dark color for text and backgrounds
          light: "#F8FAFC", // Light color for backgrounds
          gray: {
            100: "#F1F5F9",
            200: "#E2E8F0",
            300: "#CBD5E1",
            400: "#94A3B8",
            500: "#64748B",
            600: "#475569",
            700: "#334155",
            800: "#1E293B",
            900: "#0F172A",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern":
          "url('https://placehold.co/1920x1080/3563E9/FFFFFF?text=')",
      },
    },
  },
} satisfies Config;
