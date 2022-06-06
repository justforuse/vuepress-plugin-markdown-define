const CONSTS = {
  __VERSION__: require('../../package.json').version
}

module.exports = {
  // ...
  title: 'Markdown Define',
  themeConfig: {
    logo: '/logo.png',
    nav: [{ text: 'Guide', link: '/guide/quick-start' }],
    repo: 'https://github.com/justforuse/vuepress-plugin-markdown-define',
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        sidebarDepth: 0,
        children: ['/guide/quick-start']
      }
    ]
  },
  plugins: [
    [
      require('../../index.js'),
      CONSTS
    ]
  ]
}