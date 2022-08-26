module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  
  theme: {
    fontSize: {
      '5xs': '.5rem',
      '4xs': '.5375rem',
      '3xs': '.625rem',
      '2xs': '.6875rem', 
      'xs': '.75rem',
      'sm': '.875rem',
      'reg': '.9375rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },

  theme: {
    extend: {
      fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Source Serif Pro', 'ui-serif', 'Georgia', 'serif'],
          display: ['jura', 'Inter', 'sans-serif',],
          euroext: ['Eurostile-Extended', 'jura', 'Inter', 'sans-serif'],
          euro: ['Euro', 'jura', 'Inter', 'sans-serif'],
          jura: ['jura', 'Inter', 'sans-serif',],
        },
      colors: {
        ecogreen: {
          50: '#F9FCF5',
          100: '#EDF7E1',
          200: '#C1E39F',
          300: '#9DD265',
          400: '#93CB4C',
          500: '#92c83e',
          600: '#83B438',
          700: '#73A132',
          800: '#436620',
          900: '#142B0F',
        },
      }
    },
  },
  plugins: [],
};

// theme: {
  // fontSize: {
//       'sm': '.875rem',
//       'tiny': '.875rem',
//       'base': '1rem',
//       'lg': '1.125rem',
//       'xl': '1.25rem',
//       '2xl': '1.5rem',
//       '3xl': '1.875rem',
//       '4xl': '2.25rem',
//       '5xl': '3rem',
//       '6xl': '4rem',
//       '7xl': '5rem',
//     }