/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#EF5148",
        secondary: "#3E318C",
        "light-primary": "#524796",
        "light-secondary": "#FDFEFF",
      },
    },
    
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#EF5148",
      "light-primary": "#524796",
      secondary: "#FDFEFF",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#EF5148",
      secondary: "#3E318C",
      "light-primary": "#524796",
    }),
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    
  },
  plugins: [],
}

