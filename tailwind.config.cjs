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
 
  },
  plugins: [require("tailwind-scrollbar")],
};
