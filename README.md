# 電子量測實驗室網站

國立虎尾科技大學 電子工程系 電子量測實驗室 (ATC 0102) 官方網站。
使用 [Astro](https://astro.build) 建置，支援 **繁體中文 / English / 日本語** 與 **深色／淺色模式切換**，支援一鍵部署於 **Netlify**（或 GitHub Pages）。

## 快速開始

```bash
npm install      # 第一次安裝套件
npm run dev      # 本機預覽 http://localhost:4321/
npm run build    # 打包到 dist/
```

## 🚀 部署至 Netlify（透過 GitHub）

本專案已內建 [`netlify.toml`](./netlify.toml)、[`.nvmrc`](./.nvmrc) 與自訂 404 頁面，推上 GitHub 後即可零設定自動部署：

1. 將本資料夾推送至您的 GitHub 儲存庫（Repository）。
2. 登入 [Netlify](https://app.netlify.com/) → 點選 **Add new site** → **Import an existing project** → 選擇 **GitHub**。
3. 選擇該儲存庫後，Netlify 會自動讀取 `netlify.toml` 套用以下設定：
   - **Build command**：`npm run build`
   - **Publish directory**：`dist`
   - **Node.js version**：`24`
   - *(備註：若您是將整個母資料夾推送至 GitHub，只需在 Netlify 的 **Base directory** 填入 `nfu-emlab` 即可)*
4. 點選 **Deploy site**，每次 `git push` 至 GitHub 時 Netlify 即會自動重新建置並發布。

## 📝 如何更新內容（不用改版面）

所有文字資料都在 `src/data/`：

| 檔案 | 內容 |
|---|---|
| `lab.ts` | 實驗室簡介、指導教授資料 |
| `research.ts` | 三大研究領域 |
| `members.ts` | 成員（含點擊彈窗詳細介紹）、歷屆校友（2008–2026） |
| `achievements.ts` | 競賽獲獎（2010–2026）、專利、論文 |
| `facilities.ts` | 儀器設備、安全規範、**最新消息** |

多語系文字格式：

```ts
{ zh: '中文', en: 'English', ja: '日本語' }
```

`en`、`ja` 沒填時會自動顯示中文。

### 新增或編輯成員（支援點擊彈出詳細介紹）

在 `src/data/members.ts` 的 `memberGroups` 中，每位成員都可以填寫基本資料與彈窗詳細欄位：

```ts
{
  id: 'wang-xiao-ming', // 彈窗識別 ID（英文小寫與連字號）
  name: '王小明',
  nameEn: 'Xiao-Ming Wang',
  role: { zh: '碩士班一年級研究生', en: '1st-Year M.S. Student', ja: '修士課程1年' },
  topic: { zh: 'AIoT 感測・光電量測' },
  email: 'example@nfu.edu.tw',
  image: '/images/members/wang.jpg',
  // === 以下為點擊卡片後在彈窗顯示的詳細介紹（選填） ===
  quote: { zh: '「一句話座右銘」' },
  bio: { zh: '詳細自我介紹...' },
  skills: [{ zh: '嵌入式系統' }, { zh: 'LabVIEW' }],
  education: [{ zh: '國立虎尾科技大學 電子工程系 碩士班' }],
  projects: [
    {
      title: { zh: '專案或論文名稱' },
      badge: { zh: '獲獎或類別標籤' },
      desc: { zh: '專案說明...' },
    },
  ],
  links: [
    { label: { zh: '個人網站' }, url: 'https://...', icon: 'globe' },
    { label: { zh: 'GitHub' }, url: 'https://github.com/...', icon: 'github' },
  ],
}
```

### 新增最新消息

在 `facilities.ts` 的 `news` 陣列**最上面**加一筆：

```ts
{ date: '2026-12-01', title: { zh: '標題', en: 'Title', ja: 'タイトル' }, body: { zh: '內文' }, image: '' },
```

## 🌓 深色模式

- 導覽列右上角提供 ☀️ / 🌙 按鈕，點擊即可切換深色／淺色模式。
- 初次造訪會自動依據作業系統偏好 (`prefers-color-scheme`) 顯示，切換後會記憶在瀏覽器 `localStorage`。

## 🖼 圖片

1. 把圖片放到 `public/images/`（子資料夾：`members/`、`research/`、`equipment/`、`news/`）
2. 在資料檔把 `image: ''` 改成 `image: '/images/xxx.jpg'`
3. 留空字串會顯示「圖片待補」佔位框

---
網站維護：[劉峻瑋](https://xn--bfry6vtzs.tw/)
