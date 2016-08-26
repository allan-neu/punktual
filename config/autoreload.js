module.exports.autoreload = {
  active: true,
  usePolling: false,
  dirs: [
    "api/models",
    "api/controllers",
    "api/services",
    "assets",
    "config/locales",
    "views"
  ],
  ignored: [
    // Ignore all files with .ts extension
    "**.ts"
  ]
};