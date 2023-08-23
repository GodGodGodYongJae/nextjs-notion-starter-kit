import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '990fd1c590f643549c80d916e161d8dd',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '2a0770f3cad64c4781732f9f21372b65',

  // basic site info (required)
  name: 'Kyeonghoon Blog',
  domain: 'Kyeonghoon.kr',
  author: 'Kyeong hoon',

  // open graph metadata (optional)
  description: 'Kyeonghoon Notion Blog Site',

  // social usernames (optional)
  youtube: 'channel/UCtZO0omXa1yCIF0Nt73W7pw',
  github: 'GodGodGodYongJae',
  blog: 'zhaqj12',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  includeNotionIdInUrls : true,
  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/learn': 'ae9f1dae7e6248ac93482aa42cb04af0',
  },
  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '990fd1c590f643549c80d916e161d8dd'
    },
    {
      title: 'Learn',
      pageId: 'ae9f1dae7e6248ac93482aa42cb04af0',
      url: 'ae9f1dae7e6248ac93482aa42cb04af0'
    }
  ]
})
