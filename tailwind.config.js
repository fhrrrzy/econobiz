/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
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
      textShadow: {
        custom: '-1px 6px 14px -5px rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [],
};
