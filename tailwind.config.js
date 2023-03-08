/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fullSpin: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        fullSpin: "fullSpin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
