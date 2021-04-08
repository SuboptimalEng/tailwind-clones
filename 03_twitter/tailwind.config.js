module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: '#1DA1F2',
      lb: '#BBDFEA',
      black: '#14171A',
      tb: '#000000',
      dg: '#657786',
      lg: '#AAB8C2',
      elg: '#E1E8ED',
      eelg: '#F5F8FA',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
