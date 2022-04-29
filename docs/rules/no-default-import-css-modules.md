# no use default import of css modules (no-default-import-css-module)

Setting the option `esModule` and `namedExport` to `true` of `css-loader` will never has default export any more

## Rule Details

This rule aims to disable using default import of css modules

Examples of **incorrect** code for this rule:

```js

import style from './style.module.css'

```

Examples of **correct** code for this rule:

```js

import { deleteIcon, createIcon } from './style.module.css'

// or

import * from style from './style.module.css'

```

## When Not To Use It

The option `esModule` of `css-loader` been set `false`

## Further Reading

See in this [blog](https://github.com/csu-feizao/blog/issues/1)
