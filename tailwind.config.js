/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yt-dark": "#212121",
        "yt-red": "#f00",
        "yt-red-2": "#c00",
        "yt-black": "#030303",
        "yt-black-2": "hsl(0, 0%, 7%)",
        "yt-dark-2": "hsl(0, 0%, 18.82%)",
        "yt-link": "#3ea6ff"
      }
    },
  },
  plugins: [],
}
