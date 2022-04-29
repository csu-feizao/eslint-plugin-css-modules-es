# only use camelcase key of css module object (only-camelcase-key-css-module)

The css modules option `camelCaseOnly` has been the only choice when use `namedExport` option is `css-loader` after upgrade webpack 5. Therefore, only camelcase key exist in css modules object, no origin key any more. 

## Rule Details

This rule aims to ensure only use the camelcase key of css modules object.

Examples of **incorrect** code for this rule:

```jsx
import * as style from './style.module.css'

export default function() {
    return (
        <>
            <div class={style.delete_icon}>demo</div>
            <div class={style['create-icon']}>demo1</div>
        </>
    )
}
```

Examples of **correct** code for this rule:

```jsx
import * as style from './style.module.css'

export default function() {
    return (
        <>
            <div class={style.deleteIcon}>demo</div>
            <div class={style['createIcon']}>demo1</div>
        </>
    )
}
```

## When Not To Use It

Didn't use `namedExport` or `camelCaseOnly` option

## Further Reading

See in this [blog](https://github.com/csu-feizao/blog/issues/1)
