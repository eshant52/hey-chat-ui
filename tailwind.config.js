/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f6fff8",
          dark: "",
        },
        secondary: {
          DEFAULT: "#eaf4f4",
          dark: "",
        },
        accent1: {
          DEFAULT: "#cce3de",
          dark: "",
        },
        accent2: {
          DEFAULT: "#a4c3b2",
          dark: "",
        },
        accent3: {
          DEFAULT: "#a4c3b2",
          dark: "",
        },
        font: {
          primary: {
            DEFAULT: "#590d22",
            dark: "",
          },
          secondary: {
            DEFAULT: "#a4133c",
            dark: "",
          },
        },
        disabled: {
          DEFAULT: "",
          dark: "",
        },
        inverse: {
          DEFAULT: "",
          dark: "",
        },
        selected: {
          DEFAULT: "",
          dark: "",
        },
        danger: {
          DEFAULT: colors.red[700],
          dark: colors.red[300],
        },
        warning: {
          DEFAULT: "",
          dark: "",
        },
        success: {
          DEFAULT: "",
          dark: "",
        },
        discovery: {
          DEFAULT: "",
          dark: "",
        },
        info: {
          DEFAULT: "",
          dark: "",
        },
        subtle: {
          DEFAULT: "",
          dark: "",
        },
        subtlest: {
          DEFAULT: "",
          dark: "",
        },
      },
    },
  },
  plugins: [],
};
