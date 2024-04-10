import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xlp: "1350px",
      },
      colors: {
        "dark-choco": "#4e3931",
        "extra-dark-choco": "#322824",
        "light-choco": "#f4d9c4",
        cappuccino: "#7b5a4e",
        accent: "#d97706",
      },
      backgroundImage: {
        "hero-image": "url('/public/hero_image.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
