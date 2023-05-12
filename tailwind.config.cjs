/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primary: '#008C71',
        primaryLight: '#00C9A2',
        primaryDark: '#00695C'
      }
    }
  },
  plugins: []
};
