# eslint-plugin-css-modules-es

Check no default import and camelCaseOnly use of css modules, visit this [blog](https://github.com/csu-feizao/blog/issues/1) for more details.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-css-modules-es`:

```sh
npm install eslint-plugin-css-modules-es --save-dev
```

## Usage

Add `css-modules-es` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "css-modules-es"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "css-modules-es/rule-name": 2
    }
}
```

## Specifying file extensions

You can specify a list of file extensions to validate css modules via plugin settings in .eslintrc.

```json
{
  "settings": {
    "css-modules-es": {
      "extensions": [".modules.css", ".modules.less"]
    }
  }
}
```

The default extensions is `[".modules.css"]`

## Supported Rules

* no-default-import-css-modules
* only-camelcase-key-css-modules

## 📄 License

MIT license


