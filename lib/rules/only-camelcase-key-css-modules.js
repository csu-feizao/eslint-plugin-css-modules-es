/**
 * @fileoverview only use camelcase key of css modules object
 * @author csu-feizao
 */
"use strict";
const {
  isCssModulesFile,
  isIdentifier,
  isMemberExpression,
  isLiteral,
  isCamelCase
} = require('../utils/assert')

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "only use camelcase key of css modules object",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      onlyCamelcaseProperty: 'Property of css modules object mast be camelcase'
    }
  },

  create(context) {
    return {
      ImportSpecifier(node) {
        const isCssModule = isCssModulesFile(context, node.parent.source.value)
        if (!isCssModule) {
          return
        }
        if (!isCamelCase(node.imported.name)) {
          context.report({
            node,
            messageId: 'onlyCamelcaseProperty'
          })
        }
      },
      ImportNamespaceSpecifier(node) {
        const isCssModule = isCssModulesFile(context, node.parent.source.value)
        if (!isCssModule) {
          return
        }
        for (const variable of context.getDeclaredVariables(node)) {
          for (const reference of variable.references) {
            const idNode = reference.identifier
            const parentNode = idNode.parent
            if (!isMemberExpression(parentNode.type)) {
              return
            }
            const isObjectIdentifier = isIdentifier(parentNode.object.type)
            if (!isObjectIdentifier) {
              return
            }

            const propNode = parentNode.property

            // 处理 style.a_b 的场景
            const isPropIdentifier = isIdentifier(propNode.type)
            const propIdentifier = propNode.name

            // 处理 style['a-b'] 的场景
            const isPropLiteral = isLiteral(propNode.type)
            const propLiteral = propNode.value

            const isCamelcaseProp = (isPropIdentifier && isCamelCase(propIdentifier)) ||
             (isPropLiteral && isCamelCase(propLiteral))

            if ((isPropIdentifier || isPropLiteral) && !isCamelcaseProp) {
              context.report({
                loc: propNode.loc,
                messageId: 'onlyCamelcaseProperty'
              })
            }
          }
        }
      }
    }
  },
}
