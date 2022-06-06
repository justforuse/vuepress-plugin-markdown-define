# Vuepress-plugin-markdown-define

## Install

```
npm install vuepress-plugin-markdown-define
```

## Usage

in `config.js`

```js
const CONSTS = {
  __VERSION__: require('../../package.json').version
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

Your `.md` file source code:

```md
Current version is __VERSION__
```

will rendered as:

```md
Current version is 1.0.0
```