/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/', icon: 'material-symbols:home-outline'},
  { text: '博客', link: 'https://slinjing.github.io/', icon: 'material-symbols:article-outline' },
  { text: '文档', link: '/notes/README.md', icon: 'ic:baseline-post-add'},
  {
    text: '更多', icon: 'material-symbols-light:code-blocks-outline-rounded',
    items: [{ text: '站点导航', link: '/link/README.md' }]
  },
])


