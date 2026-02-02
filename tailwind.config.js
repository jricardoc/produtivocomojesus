/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#FAF8F0',
          100: '#F5EED5',
          200: '#EAD9A4',
          300: '#DFC473',
          400: '#D4AF42',
          500: '#C89A1B', // Darker base gold for better visibility
          600: '#A07B16',
          700: '#785C10',
          800: '#503D0B',
          900: '#281F05',
        }
      }
    },
  },
  plugins: [],
};
