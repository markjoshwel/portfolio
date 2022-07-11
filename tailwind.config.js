const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Public Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}