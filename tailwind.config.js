/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#c79d34",
        secondary: "#929292",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
};
