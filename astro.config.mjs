// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 自動偵測 Netlify / GitHub Pages 部署環境：
// 1. Netlify 建置時會自動注入 process.env.URL（正式網域）與 process.env.DEPLOY_PRIME_URL（預覽網域），並部署於根目錄 '/'
// 2. 若需部署至子路徑（如 GitHub Pages），可設定環境變數 BASE_PATH='/nfu-emlab'
const SITE =
  process.env.SITE_URL ||
  process.env.URL ||
  process.env.DEPLOY_PRIME_URL ||
  'https://nfu-emlab.netlify.app';

const BASE = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: {
          zh: 'zh-TW',
          en: 'en',
          ja: 'ja',
        },
      },
      filter: (page) => !page.includes('/404'),
    }),
  ],
  server: {
    host: true, // 監聽 0.0.0.0，開放區域網路（LAN）所有裝置連線造訪
    port: 4321,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
