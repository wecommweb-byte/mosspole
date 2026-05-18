import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#1e3a2f",
        sage: {
          DEFAULT: "#5a7a5c",
          light: "#8aab8c",
          pale: "#d4e4d5",
        },
        cream: "#f6f1ea",
        earth: "#c49a6c",
        dark: "#1e2a1f",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        serif: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
};
export default config;
