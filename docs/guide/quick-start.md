# Quick start <Badge text="__VERSION__" />


## Install

```sh
npm install vuepress-plugin-markdown-define
```

## Usage

in `config.js`

:::tip
The below variables is not start with `.`, just for page show to skip render
:::

```js
const CONSTS = {
  __.VERSION__: require('../../package.json').version
}

module.exports = {
  // ...
  plugins: [
    [
      'markdown-define',
      CONSTS
    ]
  ]
}

```

Define the version:

```md
## Vuepress-plugin-markdown-define <Badge text="__.VERSION__" />
```

## Vuepress-plugin-markdown-define <Badge text="__VERSION__" />