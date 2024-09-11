import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      boxShadow: {
        mdl: "0px 2px 10px 0px rgba(0, 89, 154, 0.10)",
      },
      fontFamily: {
        body: ["Microsoft Sans Serif"],
      },
      colors: {
        cp: {
          blsck: "#333",
          red: "#EE152E",
          blue: "#194EA9",
          green: "#20A14D",
          yellow: "#F5AB54",
          lightBlue: "#229ED2",
          gray: "#F8F8F8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
