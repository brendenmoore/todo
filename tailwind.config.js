module.exports = {
  content: ['./src/**/*.{jsx, js}'],
  theme: {
    container: {
      padding: '2rem',
      center: true
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
