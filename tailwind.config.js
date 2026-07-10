/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta derivada del logo de Julio Joyas (negro + degrade dorado/ambar)
        brand: {
          black: "#0a0a0a",
          panel: "#141210",
          panel2: "#1c1815",
          line: "rgba(227, 167, 59, 0.18)",
          gold: "#e3a73b",
          goldLight: "#f5c97a",
          goldDark: "#b9711e",
          ivory: "#f4ede0",
          muted: "#a89c8a",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Manrope'", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(180deg, #f5c97a 0%, #e3a73b 45%, #b9711e 100%)",
      },
    },
  },
  plugins: [],
};
