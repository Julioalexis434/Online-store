/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EB7C69",
        secundary: "#1F1D2B",
        tercero:'#2C2F3E',
        background: "#252837",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1000px",
      xl: "1200px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
