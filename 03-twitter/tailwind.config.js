module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'class',
  theme: {
    extend: {
      margin: {
        '392px': '392px',
        '506px': '506px',
      },
      width: {
        '392px': '392px',
        '506px': '506px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: '#1DA1F2',
      lb: '#BBDFEA',
      black: '#14171A',
      tb: '#000000',
      white: '#FFFFFF',
      dg: '#657786',
      'light-gray': '#AAB8C2',
      elg: '#E1E8ED',
      eelg: '#F5F8FA',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
