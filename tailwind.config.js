/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '24px'
      }
    },
    backgroundImage: {
      'back-image': "url('/background.jpg')"
    },
    extend: {
      fontFamily: {
        righteous: ['Righteous']
      }
    }
  },
  plugins: []
}
