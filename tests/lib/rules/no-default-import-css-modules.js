/**
 * @fileoverview no use default import of css modules
 * @author csu-feizao
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-default-import-css-modules"),
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
ruleTester.run("no-default-import-css-modules", rule, {
  valid: [
    "import * as style from './style.module.css'",
    "import { deleteIcon, createIcon } from './style.module.css'"
  ],

  invalid: [
    {
      code: "import style from './style.module.css'",
      errors: [{ message: "Do not use default import of css modules" }],
    },
  ],
});
