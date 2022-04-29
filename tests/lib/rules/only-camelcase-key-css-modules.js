/**
 * @fileoverview only use camelcase key of css modules object
 * @author csu-feizao
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/only-camelcase-key-css-modules"),
  RuleTester = require("eslint").RuleTester


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module'
  }
})
ruleTester.run("only-camelcase-key-css-modules", rule, {
  valid: [
    `
    import { deleteIcon } from './style.module.css'
    `,
    `
    import * as style from './style.module.css'
    console.log(style.deleteIcon)
    `,
    `
    import * as style from './style.module.css'
    console.log(style['deleteIcon'])
    `
  ],

  invalid: [
    {
      code: `
      import { delete_icon } from './style.module.css'
      `,
      errors: [{ message: "Property of css modules object mast be camelcase" }],
    },
    {
      code: `
      import * as style from './style.module.css'
      console.log(style.delete_icon)
      `,
      errors: [{ message: "Property of css modules object mast be camelcase" }],
    },
    {
      code: `
      import * as style from './style.module.css'
      console.log(style['delete_icon'])
      `,
      errors: [{ message: "Property of css modules object mast be camelcase" }],
    },
    {
      code: `
      import * as style from './style.module.css'
      console.log(style['delete-icon'])
      `,
      errors: [{ message: "Property of css modules object mast be camelcase" }],
    },
  ],
})
