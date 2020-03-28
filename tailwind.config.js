const darkMode = require('tailwindcss-dark-mode')()

module.exports = {
  plugins: [darkMode],
  theme: {
    extend: {
      colors: {
        accent: '#8bc34a',
        primary: '#4caf50'
      },
      fontFamily: {
        sans: [
          'Inter var',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji'
        ]
      },
      width: {
        screenshot: '30rem'
      }
    }
  },
  variants: {
    backgroundColor: ['dark'],
    display: ['dark'],
    textColor: ['dark']
  }
}
