/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { mainBg: "#0e0c14", primary: "#f7f4f2", secondary: "#b6b2af" },
    },
  },
  plugins: [],
};
