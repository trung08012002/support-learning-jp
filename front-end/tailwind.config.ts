import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      height: {
        navbarHeight: "54px",
        contentHeight: `calc( 100vh - 54px)`,
      },
      backgroundSize: {},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        table:
          "linear-gradient(90deg,#e2e2e2 1px,transparent 0),linear-gradient(180deg,#e2e2e2 1px,#fff 0)",
      },
      colors: {
        danger: "#dc3545",
        linkSecondary: "#6c757d",
        blueText: "#0d6efd",
        success: "#198754",
        borderChoosing: "#c6d6ef",
        borderNomal: "#dee2e6",
        grayBackground: "#f7f9fb",
        brown: "#b97a87",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
