/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#e8f1fb",
          100: "#c5d9f5",
          200: "#9abfee",
          300: "#6ea5e8",
          400: "#4490e3",
          500: "#1a6ec9",   // primary blue
          600: "#155ab0",
          700: "#104598",
          800: "#0b3175",
          900: "#071e52",
        },
        steel: {
          50:  "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#102a43",
        },
        accent: "#f59e0b",     // amber accent
        surface: "#0f1923",    // dark background
        "surface-2": "#162032",
        "surface-3": "#1e2d40",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Barlow Condensed'", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
      },
      backgroundSize: {
        "grid-pattern": "60px 60px",
      },
    },
  },
  plugins: [],
};
