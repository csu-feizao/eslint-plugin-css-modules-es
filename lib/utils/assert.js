const { getSettings } = require('./settings')

function isCssModulesFile(context, fileName) {
  const settings = getSettings(context)
  const extensions = settings.extensions || []
  return extensions.some(ext => fileName.endsWith(ext))
}

function isCamelCase(name) {
  if (typeof name !== 'string' ) {
    return false
  }
  const firstCharCode = name.charCodeAt(0)
  return !name.includes('_') && !name.includes('-') && !(firstCharCode >= 65 && firstCharCode <= 90)
}

function isIdentifier(type) {
  return type === 'Identifier'
}

function isMemberExpression(type) {
  return type === 'MemberExpression'
}

function isLiteral(type) {
  return type === 'Literal'
}

module.exports = {
  isCssModulesFile,
  isCamelCase,
  isIdentifier,
  isMemberExpression,
  isLiteral
}