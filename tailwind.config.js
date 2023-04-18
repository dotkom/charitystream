/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        regalblue: "#264653",
        darkblue: "#22333B",
        turquise: "#2A9D8F",
        beige: "#EAE0D5",
        yellow: "#E9C46A",
        orange: "#F4A261",
        terracotta: "#E76F51",
      },
    },
  },
  plugins: [],
};