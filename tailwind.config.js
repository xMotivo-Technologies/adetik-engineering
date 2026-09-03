/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: "#00923F",
        customBlue: "#0097D8",
        customYellow: "#F6C607"
      }
    },
  },
  plugins: [],
}