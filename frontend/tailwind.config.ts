import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

      },

      colors: {
        'harrods-green': '#122717',
        'harrods-gold': '#AB8E66',
      }
    },
  },
  plugins: [],
};
export default config;
