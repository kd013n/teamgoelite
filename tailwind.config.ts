import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import flowbite from "flowbite/plugin";
import forms from "@tailwindcss/forms";

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
        darkText: "var(--dark-text)",
        darkestText: "var(--darkest-text)",
        links: "var(--links)",
        hoverLinks: "var(--hover-links)",
        buttons: "var(--buttons)",
        hoverButtons: "var(--hover-buttons)",
        outlines: "var(--outlines)",
        hoverOutlines: "var(--hover-outlines)",
        accent2: "var(--accent2)",
        accent3: "var(--accent3)",
        footerBg: "var(--footer-bg)",
        footerBg2: "var(--footer-bg2)",
      },
      keyframes: {
        bouncePath1: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-5%, 5%)" },
          "50%": { transform: "translate(-40%, 40%)" },
          "75%": { transform: "translate(-5%, 5%)" },
          "100%": { transform: "translate(0, 0)" },
        },
        bouncePath2: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-15%, 15%)" },
          "50%": { transform: "translate(-60%, 60%)" },
          "75%": { transform: "translate(-15%, 15%)" },
          "100%": { transform: "translate(0, 0)" },
        },
        bouncePath3: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-10%, 10%)" },
          "50%": { transform: "translate(-50%, 50%)" },
          "75%": { transform: "translate(-10%, 10%)" },
          "100%": { transform: "translate(0, 0)" },
        },
        moveBackground: {
          "0%": { transform: "translate(0, 0) rotate(30deg)" },
          "50%": { transform: "translate(-50px, -50px) rotate(45deg)" },
          "100%": { transform: "translate(0, 0) rotate(60deg)" },
        },
        moveBackground2: {
          "0%": { transform: "translate(0, 0) rotate(-5deg)" },
          "50%": { transform: "translate(80px, -50px) rotate(10deg)" },
          "100%": { transform: "translate(0, 0) rotate(-25deg)" },
        },
        moveBackground3: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-60px, 80px) scale(1.1)" },
          "100%": { transform: "translate(0, 0) scale(2)" },
        },
      },
      animation: {
        bouncePath1: "bouncePath1 8s ease-in-out infinite",
        bouncePath2: "bouncePath2 10s ease-in-out infinite",
        bouncePath3: "bouncePath3 12s ease-in-out infinite",
        moveBackground: "moveBackground 5s ease-in-out infinite",
        moveBackground2: "moveBackground2 8s ease-in-out infinite",
        moveBackground3: "moveBackground3 10s ease-in-out infinite",
      },
    },
  },
  fontFamily: {
    sans: ["Raleway", "sans-serif"],
    plugins: [daisyui, flowbite, forms],
  },
};

export default config;
