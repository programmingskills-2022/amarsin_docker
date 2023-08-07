/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueGray: {
          light: "#BFC5CA",
        },
      },
      fontFamily: {
        sans: ["var(--font-vazir)"],
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.4s ease-in-out forwards ",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
