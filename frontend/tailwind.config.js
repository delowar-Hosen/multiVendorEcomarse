/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1600px",
      },
      colors: {
        primary: "#fff",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  screens: {
    sm: "414px",
    // => @media (min-width: 640px) { ... }

    md: "768px",
    // => @media (min-width: 1024px) { ... }

    lg: "1024px",
    // => @media (min-width: 1280px) { ... }
  },
  plugins: [],
};
