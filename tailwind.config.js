/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
      },
      textUnderlineOffset: {
        3: "3px",
        5: "5px",
      },
    },
  },
  plugins: [],
};
