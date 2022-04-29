const DEFAULT_SETTINGS = {
  extensions: ['.module.css']
}

function getSettings(context) {
  return Object.assign({}, DEFAULT_SETTINGS, context.settings['css-modules-es'])
}

module.exports = {
    getSettings
}