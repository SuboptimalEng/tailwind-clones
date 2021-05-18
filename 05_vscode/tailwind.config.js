module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      "activity-bg": "var(--activity-bg)",
      "editor-fg": "var(--editor-fg)",
      "editor-bg": "var(--editor-bg)",
      "explorer-fg": "var(--explorer-fg)",
      "explorer-bg": "var(--explorer-bg)",
      "sidebar-fg": "var(--sidebar-fg)",
      "sidebar-bg": "var(--sidebar-bg)",
      "off-white": "var(--off-white)"
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
