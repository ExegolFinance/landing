/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('../images/landing.jpg')",
      },
      fontFamily: {
        sans: ["Avenir"],
        logo: ["Recoleta"],
      },
      colors: {
        "egg-white": "#f7f7f2",
      },
      spacing: {
        "1/7": "14%",
      },
    },
  },
  plugins: [],
};
