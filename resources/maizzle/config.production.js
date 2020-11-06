module.exports = {
  build: {
    destination: {
      path: '../views/emails/dist',
      extension: 'blade.php',
    },
  },

  inlineCSS: {
    enabled: true,
  },

  removeUnusedCSS: {
    enabled: true,
  },

  prettify: {
    enabled: true,
  },
}
