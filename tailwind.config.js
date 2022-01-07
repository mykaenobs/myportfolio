module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        header: 'linear-gradient(to right, #FF8F73 50%, #FF734E 50%)',
        hero: 'url(\'/images/skater.png\')',
      }
    },
    fontFamily: {
      'sans': ['Poppins'],
      'jet': ['JetBrains Mono']
    },
    colors: {
      red: {
        100: '#FF8DF3',
        200: '#CF5AF0',
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
      },
      brick: '#ff1a1a'
    },
    maxWidth: {
      container: '1200px',
      wrapper: '1100px',
      head: '346px',
      text: '434px'
    },
    minWidth: {
      testy: '4rem'
    }
  },
  variants: {
    extend: {
      flexDirection: ['even', 'odd'],
      block: ['after'],
      invisible: ['first-child']
    },
  },
  plugins: [],
}
