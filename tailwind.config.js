module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mainBlue': '#2aa2ff'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
		    'lato': ['Lato', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
