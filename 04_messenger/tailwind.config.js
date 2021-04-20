module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // messenger colors
      blue: '#0078FF',
      lb: '#00C6FF',
      white: "#FFFFFF",
      black: "#000000",
      gray: '#E5E7EB',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
