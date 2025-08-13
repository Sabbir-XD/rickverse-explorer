import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tt: ["TT Travels", "sans-serif"],
      },
      colors: {
        neonGreen: "#00FF9F",
        darkBg: "#0B0D17",
      },
    },
  },
  plugins: [],
};
export default config;
