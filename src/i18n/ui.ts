// 多語系設定與共用工具
// 預設語言 zh 位於網址根目錄（/），其他語言加前綴（/en/、/ja/）

export const languages = {
  zh: '繁體中文',
  en: 'English',
  ja: '日本語',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'zh';
export const langList = Object.keys(languages) as Lang[];

/** 多語系文字。en / ja 沒填時會自動退回中文。 */
export type L = { zh: string; en?: string; ja?: string };

/** 取出對應語言的文字 */
export function t(text: L | string | undefined, lang: Lang): string {
  if (text === undefined) return '';
  if (typeof text === 'string') return text;
  return text[lang] ?? text.zh;
}

/** HTML lang 屬性 */
export const htmlLang: Record<Lang, string> = { zh: 'zh-Hant-TW', en: 'en', ja: 'ja' };

/** 給每個頁面的 getStaticPaths 使用 */
export function langPaths() {
  return langList.map((lang) => ({
    params: { lang: lang === defaultLang ? undefined : lang },
    props: { lang },
  }));
}

/** 加上 base（GitHub Pages 子路徑） */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

/** 產生指定語言的頁面連結，page 例如 '' 或 'about' */
export function pageUrl(lang: Lang, page = ''): string {
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  const tail = page ? `/${page}/` : '/';
  return withBase(`${prefix}${tail}`);
}

/** 產生包含正式網域的絕對網址（符合 Google hreflang 規範） */
export function absolutePageUrl(siteUrl: URL | string | undefined, lang: Lang, page = ''): string {
  const baseSite = (siteUrl ? (typeof siteUrl === 'string' ? siteUrl : siteUrl.origin) : 'https://nfu-emlab.netlify.app').replace(/\/$/, '');
  const path = pageUrl(lang, page);
  return `${baseSite}${path}`;
}

export const nav: { page: string; label: L }[] = [
  { page: '', label: { zh: '首頁', en: 'Home', ja: 'ホーム' } },
  { page: 'about', label: { zh: '關於我們', en: 'About', ja: '研究室紹介' } },
  { page: 'research', label: { zh: '研究領域', en: 'Research', ja: '研究分野' } },
  { page: 'members', label: { zh: '成員', en: 'Members', ja: 'メンバー' } },
  { page: 'achievements', label: { zh: '研究成果', en: 'Achievements', ja: '研究成果' } },
  { page: 'facilities', label: { zh: '設備與規範', en: 'Facilities', ja: '設備・規則' } },
  { page: 'news', label: { zh: '最新消息', en: 'News', ja: 'お知らせ' } },
  { page: 'contact', label: { zh: '聯絡我們', en: 'Contact', ja: 'お問い合わせ' } },
];

/** 介面上的固定字串 */
export const ui = {
  siteName: { zh: '電子量測實驗室 LED_LAB', en: 'Electronic Measurement Lab LED_LAB', ja: '電子計測研究室 LED_LAB' },
  univ: {
    zh: '國立虎尾科技大學 電子工程系',
    en: 'Dept. of Electronic Engineering, National Formosa University',
    ja: '国立虎尾科技大学 電子工学科',
  },
  imgPending: { zh: '圖片待補', en: 'Image coming soon', ja: '画像準備中' },
  learnMore: { zh: '了解更多', en: 'Learn more', ja: '詳しく見る' },
  joinUs: { zh: '加入我們', en: 'Join Us', ja: '研究室に参加' },
  collab: { zh: '產學合作洽詢', en: 'Industry Collaboration', ja: '産学連携のご相談' },
  latestNews: { zh: '最新消息', en: 'Latest News', ja: '最新情報' },
  allNews: { zh: '查看全部', en: 'View all', ja: 'すべて見る' },
  toBeConfirmed: { zh: '資料待確認', en: 'To be confirmed', ja: '確認中' },
  themeToggle: { zh: '切換深色／淺色模式', en: 'Toggle dark/light mode', ja: 'ダーク／ライトモード切替' },
  viewProfile: { zh: '點擊查看詳細介紹', en: 'Click for details', ja: '詳細プロフィールを見る' },
  closeModal: { zh: '關閉', en: 'Close', ja: '閉じる' },
  navMenu: { zh: '導覽選單', en: 'Navigation Menu', ja: 'ナビゲーションメニュー' },
  langAutoTitle: { zh: '本機語言自動偵測', en: 'Device Language Detection', ja: 'デバイス言語の自動検出' },
  langDetecting: { zh: '偵測中…', en: 'Detecting…', ja: '検出中…' },
  langAutoMode: { zh: '自動偵測模式', en: 'Auto Detect Mode', ja: '自動検出モード' },
  langAutoDesc: {
    zh: '依本機系統／瀏覽器語言切換',
    en: 'Sync with device/browser language',
    ja: '端末／ブラウザの言語設定に連動',
  },
  langAutoBadgeTitle: {
    zh: '本機語言自動偵測已啟用',
    en: 'Auto language detection active',
    ja: '言語の自動検出が有効です',
  },
  langSwitchToDetected: {
    zh: '使用瀏覽器語言切換',
    en: 'Switch to Browser Language',
    ja: 'ブラウザの言語に切り替え',
  },
  langAlreadyCurrent: {
    zh: '（已是目前頁面語言）',
    en: '(Current language)',
    ja: '（現在の言語です）',
  },
  langMenuAria: { zh: '語言設定 / Language Selection', en: 'Language Selection', ja: '言語設定' },
  langMenuRole: { zh: '選擇語言', en: 'Select Language', ja: '言語を選択' },
  imgProtected: {
    zh: '實驗室圖片受版權保護，暫不提供下載',
    en: 'Images are copyright protected and cannot be downloaded.',
    ja: '画像の著作権は保護されており、保存・ダウンロードはできません。',
  },
  footerRights: {
    zh: '國立虎尾科技大學 電子工程系 電子量測實驗室 LED_LAB',
    en: 'Electronic Measurement Lab LED_LAB, NFU',
    ja: '国立虎尾科技大学 電子計測研究室 LED_LAB',
  },
  maintainer: { zh: '網站維護', en: 'Website maintained by', ja: 'サイト管理' },
} satisfies Record<string, L>;
