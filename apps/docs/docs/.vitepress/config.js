export default {
  base: '/',
  title: 'The Mentes',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }
    ]
  ],
  themeConfig: {
    repo: '',
    logo: '',
    nav: [
      { text: 'API', link: 'api/introduccion' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      { icon: 'discord', link: '...' }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: true,
        items: [
          {
            text: 'Introducción',
            link: '/introduccion'
          },
          {
            text: 'Desarrollo',
            link: '/desarrollo'
          },
          {
            text: 'Producción',
            link: '/produccion'
          }
        ]
      },
      {
        text: 'API',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Introducción',
            link: 'api/introduccion'
          }
        ]
      },
      {
        text: 'Frontend',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Introducción',
            link: 'frontent/introduccion'
          }
        ]
      }
    ]
  }
}
