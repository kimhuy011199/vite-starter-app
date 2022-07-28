module.exports = {
  content: ['./dist/*.html', './*.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['FiraMono', 'mono'],
    },
    extend: {
      colors: {
        primary: '#ffd32b',
        secondary: '#50bfff',
        ternary: '#ba38fe',
        dark: '#242525',
        dark2: '#2f2f2f',
        gray1: '#e4e4e4',
        gray2: '#a0a09f',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
