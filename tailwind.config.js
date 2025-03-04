/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Neue Machina", "sans-serif"],
        display: ["Monument Extended", "sans-serif"],
        futuristic: ["Clash Display", "Orbitron", "sans-serif"],
      },
      colors: {
        background: "#121212",
        text: "#E0E0E0",
        primary: "#00AEEF",
        secondary: "#8E44AD",
        accent: "#2ECC71",
        highlight: "#FF007F",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out",
        slideUp: "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
