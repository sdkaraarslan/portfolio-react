/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6f6767",
        secondary: "#B2B2B2",
        third: "#f5a962",
        bg: "#EAEAEA",
        text: "#6f6767",
        navicon: "#6f6767",
        "profile-text": "#fff",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("flowbite/plugin")],
};
