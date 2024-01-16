/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'text': '#e3e0f6',
        'background': '#06040e',
        'primary': '#9b8dde',
        'secondary': '#7a8928',
        'accent': '#39c657',
       },
       screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      extend: {
        fontFamily: {
          sans: ['Josefin Sans', 'sans-serif'],
          alata: ['Alata'],
        },
        letterSpacing: {
          widest: '.3em',
        },
      },
    },
  },
  plugins: [],
}

