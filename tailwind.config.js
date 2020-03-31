const darkMode = require('tailwindcss-dark-mode')()

module.exports = {
  plugins: [darkMode],
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      colors: {
        accent: '#8bc34a',
        primary: '#4caf50'
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
        sans: [
          'Inter',
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
        screenshot: '24rem'
      }
    }
  },
  variants: {
    backgroundColor: ['dark'],
    display: ['dark'],
    textColor: ['dark']
  }
}
