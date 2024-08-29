import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient":
          "linear-gradient(204deg, rgba(2,0,36,1) 0%, rgba(255,133,2,1) 30%, rgba(255,133,2,1) 70%, rgba(0,0,0,1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
