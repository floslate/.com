module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./@/**/*.{ts,tsx}",
  ],
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
