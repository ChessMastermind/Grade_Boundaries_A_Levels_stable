/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./*.js",
    "./*.html",
    "./CIE/**/*.html",
    "./Edexcel/**/*.html",
    "./OCR/**/*.html",
    "./OxfordAqa/**/*.html",
    "./Privacy/**/*.html",
    "./Disclaimer/**/*.html",
    "./Contact/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

