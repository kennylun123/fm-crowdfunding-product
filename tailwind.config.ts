import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: "#7a7a7a",
      cyan: {
        400: "#3cb4ac",
        500: "#147b74",
        600: "#115b56",
      },
    },
  },
  plugins: [],
};
export default config;
