import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "hsl(218, 100, 31%)",
      secndary: "hsl(342, 30, 8%)",
      accent: "hsl(204, 81, 74%)",
      shadow: "hsl(155, 11, 50%)",
      misc: "hsl(69, 100, 96%)",
    }
  },
  plugins: []
};
export default config;
