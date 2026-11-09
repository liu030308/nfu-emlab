// 設備、安全規範、最新消息
import type { L } from '../i18n/ui';

export type Equipment = { name: L; desc: L; image: string };

// 目前只列出研究資料中提到的系統，其他儀器請自行補上
export const equipment: Equipment[] = [
  {
    name: { zh: '快速熱退火系統 (RTA)', en: 'Rapid Thermal Annealing (RTA)', ja: '急速熱アニール装置（RTA）' },
    desc: {
      zh: '鈣鈦礦/量子點薄膜之氬氣環境熱處理',
      en: 'Ar-ambient annealing of perovskite / QD films',
      ja: 'ペロブスカイト・量子ドット薄膜のAr雰囲気熱処理',
    },
    image: '/images/equipment/rta.svg',
  },
  {
    name: { zh: '表面電漿共振 (SPR) 量測系統', en: 'SPR Measurement System', ja: 'SPR計測システム' },
    desc: {
      zh: '高靈敏度折射率與液體含水量量測',
      en: 'High-sensitivity refractive-index and water-content measurement',
      ja: '高感度な屈折率・含水量計測',
    },
    image: '/images/equipment/spr.svg',
  },
  {
    name: { zh: '自動化數據擷取平台 (DAQ)', en: 'Automated DAQ Platform', ja: '自動データ収集プラットフォーム' },
    desc: {
      zh: 'Cypress FX2 + LabVIEW 全自動量測與微控制器整合',
      en: 'Fully automated measurement with Cypress FX2, LabVIEW & microcontrollers',
      ja: 'Cypress FX2＋LabVIEWによる全自動計測・マイコン統合',
    },
    image: '/images/equipment/daq.svg',
  },
];

export const safetyRules: { icon: string; title: L; desc: L }[] = [
  {
    icon: '⚡',
    title: { zh: '接地與靜態測試', en: 'Grounding & Pre-checks', ja: '接地と事前点検' },
    desc: {
      zh: '所有儀器必須具備標準接地保護，通電前務必進行靜態測試與線路檢查，未經指導老師允許嚴禁擅自送電。',
      en: 'All instruments must be properly grounded. Perform static tests and wiring checks before powering on; never energize without the advisor’s permission.',
      ja: 'すべての機器は適切に接地すること。通電前に静的試験と配線確認を行い、指導教員の許可なく通電しないこと。',
    },
  },
  {
    icon: '💧',
    title: { zh: '禁止濕手操作', en: 'No Wet Hands', ja: '濡れた手での操作禁止' },
    desc: {
      zh: '嚴禁以沾濕的雙手操作電氣設備。',
      en: 'Never operate electrical equipment with wet hands.',
      ja: '濡れた手で電気機器を操作しないこと。',
    },
  },
  {
    icon: '🚫',
    title: { zh: '禁止飲食', en: 'No Food or Drink', ja: '飲食禁止' },
    desc: {
      zh: '實驗室內全面禁止攜帶食物與飲料。',
      en: 'Food and drinks are strictly prohibited in the lab.',
      ja: '研究室内への飲食物の持ち込みは禁止。',
    },
  },
  {
    icon: '👟',
    title: { zh: '服裝規定', en: 'Dress Code', ja: '服装規定' },
    desc: {
      zh: '嚴禁穿著拖鞋、涼鞋或短褲進入實驗室。',
      en: 'No slippers, sandals, or shorts in the lab.',
      ja: 'スリッパ・サンダル・短パンでの入室禁止。',
    },
  },
  {
    icon: '🧯',
    title: { zh: '不導電滅火設備', en: 'Non-conductive Extinguishers', ja: '非導電性消火設備' },
    desc: {
      zh: '實驗室配有不導電滅火設備，以因應電氣火災。',
      en: 'Non-conductive extinguishers are provided for electrical fires.',
      ja: '電気火災に備え、非導電性の消火器を設置。',
    },
  },
];

export const electricShockSOP: L[] = [
  { zh: '立即切斷電源', en: 'Cut off the power immediately', ja: 'ただちに電源を遮断する' },
  {
    zh: '以乾燥不導電棒移開電線',
    en: 'Move the wire away with a dry, non-conductive rod',
    ja: '乾いた非導電性の棒で電線を離す',
  },
  { zh: '保持患者呼吸道暢通', en: 'Keep the victim’s airway clear', ja: '傷病者の気道を確保する' },
  { zh: '撥打 119 緊急送醫', en: 'Call 119 and seek medical help', ja: '119番通報し救急搬送する' },
];

export type News = { date: string; title: L; body?: L; image?: string; url?: string };

// 最新消息：新的放最上面
export const news: News[] = [
  {
    date: '2026-11-07',
    title: { zh: '實驗室網站正式上線！', en: 'Our new lab website is live!', ja: '研究室ウェブサイトを公開しました！' },
    body: {
      zh: '電子量測實驗室全新網站上線，支援繁體中文、English、日本語三語切換與深色模式。',
      en: 'The new website of the Electronic Measurement Lab is now available in Chinese, English, and Japanese with dark mode support.',
      ja: '電子計測研究室の新しいウェブサイトを公開しました。中国語・英語・日本語およびダークモードに対応しています。',
    },
    image: '/images/news/website-launch.svg',
  },
  {
    date: '2026-09-01',
    title: {
      zh: '歡迎 115 學年度碩一新生加入實驗室',
      en: 'Welcome to our new M.S. students',
      ja: '新入修士生を歓迎します',
    },
    body: {
      zh: '歡迎劉峻瑋、洪梓瑜、許育人加入電子量測實驗室！',
      en: 'Welcome Jun Wei Liu, Zi-Yu Hong, and Yu-Jen Hsu to the Electronic Measurement Lab!',
      ja: '劉峻瑋さん、洪梓瑜さん、許育人さん、電子計測研究室へようこそ！',
    },
    image: '/images/news/admissions-2026.svg',
  },
  {
    date: '2026-03-31',
    title: {
      zh: '恭賀！本實驗室團隊榮獲 IEEE ICCT-Pacific 2026 最佳學生海報獎',
      en: 'Congrats! Best Student Poster Award at IEEE ICCT-Pacific 2026',
      ja: '祝！IEEE ICCT-Pacific 2026 最優秀学生ポスター賞を受賞',
    },
    body: {
      zh: '陳文瑞教授指導本實驗室劉峻瑋、洪梓瑜、潘昱澤前往日本山口大學發表論文「AIoT Base Smart Consumables Drying Cabinet」，榮獲 Best Student Poster Award！',
      en: 'Prof. Wen-Ray Chen and lab members Jun Wei Liu, Zi-Yu Hong, and Yu-Zan Pan won the Best Student Poster Award at IEEE ICCT-Pacific 2026 in Yamaguchi, Japan.',
      ja: '陳文瑞教授の指導のもと、当研究室の劉峻瑋・洪梓瑜・潘昱澤が日本・山口大学で開催されたIEEE ICCT-Pacific 2026にて「AIoT Base Smart Consumables Drying Cabinet」を発表し、最優秀学生ポスター賞を受賞しました。',
    },
    image: '/images/news/icct-pacific-2026.svg',
    url: 'https://2026.icct-pacific.org/awards/',
  },
  {
    date: '2025-11-20',
    title: {
      zh: '恭賀！榮獲 2025 全國大專院校產學創新實作競賽「第三名」',
      en: 'Congrats! 3rd Place at 2025 National Intercollegiate Innovation Competition',
      ja: '祝！2025 全国大学産学イノベーション実装コンテスト「第3位」受賞',
    },
    body: {
      zh: '陳文瑞教授指導本實驗室陳昱琮、潘昱澤、許育人以「智慧型即時跌倒偵測系統之開發與應用」榮獲機械自動化及手工具創新組全國第三名！',
      en: 'Advised by Prof. Wen-Ray Chen, lab members Yu-Cong Chen, Yu-Zan Pan, and Yu-Jen Hsu won 3rd Place with "Smart Real-Time Fall Detection System".',
      ja: '陳文瑞教授の指導のもと、当研究室の陳昱琮・潘昱澤・許育人が「スマートリアルタイム転倒検知システムの開発と応用」で第3位を受賞しました。',
    },
    image: '/images/news/innovation-2025.svg',
    url: 'https://eedept.ncue.edu.tw/innovation2025/s2.html#winning-list',
  },
  {
    date: '2024-11-15',
    title: {
      zh: '恭賀！榮獲 2024 全國大專院校產學創新實作競賽「手工具創新設計獎」',
      en: 'Hand-Tool Innovation Design Award at 2024 National Innovation Competition',
      ja: '2024 全国大学産学イノベーション実装コンテスト「ハンドツール革新デザイン賞」受賞',
    },
    body: {
      zh: '陳文瑞教授指導學生團隊以「踏板發電在智慧老年健康復健系統的應用」榮獲手工具創新設計獎。',
      en: 'Awarded for "Pedal Power Generation in Smart Elderly Rehabilitation Systems" advised by Prof. Wen-Ray Chen.',
      ja: '陳文瑞教授が指導する学生チームが「ペダル発電を用いた高齢者スマート健康リハビリシステム」で受賞しました。',
    },
    image: '/images/news/innovation-2024.svg',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/恭賀-本系陳文瑞老師指導參加『2024全國大專院校產學創新實作競賽』-榮獲手工具創新設計獎-電子系全體師生恭賀-43444169',
  },
];
