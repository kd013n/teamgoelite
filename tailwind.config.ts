import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import flowbite from "flowbite/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightestText: "var(--lightest-text)",
        lightText: "var(--light-text)",
        midText: "var(--mid-text)",
        darkText: "(--dark-text)",
        darkestText: "var(--darkest-text)",
        links: "var(--links)",
        hoverLinks: "var(--hover-links)",
        buttons: "var(--buttons)",
        hoverButtons: "var(--hover-buttons)",
        outlines: "var(--outlines)",
        hoverOutlines: "var(--hover-outlines)",
        accent2: "var(--accent2)",
        accent3: "var(--accent3)",
      },
    },
  },
  fontFamily: {
    sans: ["Raleway", "sans-serif"],
  },
  plugins: [daisyui, flowbite],
};
export default config;
