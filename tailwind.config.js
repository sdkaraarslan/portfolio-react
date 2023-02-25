/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#43a2cb",
        secondary: "#B2B2B2",
        third: "#f5a962",
        bg: "#3C4048",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
