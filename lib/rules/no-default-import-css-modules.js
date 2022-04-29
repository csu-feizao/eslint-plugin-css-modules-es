/**
 * @fileoverview no use default import of css modules
 * @author csu-feizao
 */
"use strict";
const { isCssModulesFile } = require('../utils/assert')

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
      description: "no use default import of css modules",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      noDefaultImport: 'Do not use default import of css modules'
    }
  },

  create(context) {
    return {
      ImportDefaultSpecifier (node) {
        const isCssModule = isCssModulesFile(context, node.parent.source.value)
        if (isCssModule) {
          context.report({
            node,
            messageId: 'noDefaultImport'
          })
        }
      }
    }
  }
};
