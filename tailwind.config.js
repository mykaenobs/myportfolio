module.exports = {
  purge: [
    './pages/**/*.{jsx, js}',
    './components/**/*.{jsx, js}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        header: 'linear-gradient(to right, #FF8F73 50%, #FF734E 50%)',
      }
    },
    fontFamily: {
      'sans': ['Poppins'],
      'jet': ['JetBrains Mono']
    },
    colors: {
      red: {
        100: '#FF8F73',
        200: '#FF734E',
      },
      grey: {
        400: '#F6F6F6',
        300: '#EEEEEE',
        100: '#EBEBEB',
        200: '#C8C8C8',
        800: '#6E6E6E',
        900: '#555555'
      },
      white: '#FFFFFF',
      purple: {
        900: '#292635'
      }
    },
    maxWidth: {
      'container': '1200px',
      'wrapper': '1100px',
      'head': '346px',
      'text': '434px'
    },
    // borderWidth: {
    //   1: '1px',
    // }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
