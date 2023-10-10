/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#E8E9EB",
        secondary: "#006D77",
        tertiary: "#151030",
        peacockTeal: "#1EAE98",
        peacockGold: "#DAA520",
        peacockPurple: "#2B2D42",
        peacockMagenta: "#8A1C7C",
        peacockGreen: "#379392",
        heroColor: "#EF9F67",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#ffffff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/feathers5.png')",
      },
    },
  },
  plugins: [],
};


