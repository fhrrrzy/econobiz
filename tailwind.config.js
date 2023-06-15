/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
    './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'font-family': ['Nunito', 'sans-serif'],
      },
      keyframes: {
        'scale-up-down': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'scale-up-down': 'scale-up-down 5s ease-in-out infinite',
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
  plugins: [
    require('flowbite/plugin'),
  ],
};
