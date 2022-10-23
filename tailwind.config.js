/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./helpers/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#337D7E",
          "primary-content": "#ffffff",
          "primary-focus": "#0D0630",
          secondary: "#0D0630",
          "secondary-content": "#ffffff",
          "secondary-focus": "#0D0630D9",
          accent: "#F5F0E3",
          "accent-content": "#0D0630",
          "accent-focus": "#FDF9EE",
          warning: "#FF6F5E",
          "warning-content": "#ffffff",
          "warning-focus": "#FF6F5EBF",
        },
      },
    ],
  },
};
