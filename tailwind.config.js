module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: {
          text: '#888',
          minusTwo: '#2e2e2e',
          minusOne: '#252525',
          main: '#212121',
        },
      },
      letterSpacing: {
        titleSP: '4px',
        titlePC: '7px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
