module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: {
          text: '#888',
          minusOne: '#252525',
          main: '#212121',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
