/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/templates/index.html',
    './node_modules/flowbite/**/*.js',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'font-family': ['Nunito', 'sans-serif'],
      },
      colors: {
        ecn: '#F8FAF5',
        greenbase: '#4ECB71',
        greenbgimage: '#0FA958',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

