import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(218, 100, 61%)",
        secondary: "hsl(0, 0, 15%)",
        accent: "hsl(204, 81, 74%)",
        shadow: "hsl(0, 0, 0%)",
        misc: "hsl(69, 100, 96%)",
      },
    },
  },
  plugins: [],
};
export default config;
