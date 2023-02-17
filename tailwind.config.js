module.exports = {
  content: ['layouts/**/*.html'],
  theme: {
    fontFamily: {
      serif: ['Public Sans', 'sans'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
