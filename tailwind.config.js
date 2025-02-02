/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#444444",
        secondary: "#CDAF6D",
      },
    },
  },
  plugins: [],
};
