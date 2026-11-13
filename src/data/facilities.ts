// 設備、安全規範、最新消息
import type { L } from '../i18n/ui';

export type Equipment = { name: L; desc: L; image: string };

// 儀器設備列表（更新實體照片與代表性系統）
export const equipment: Equipment[] = [
  {
    name: { zh: '快速熱退火系統 (RTA)', en: 'Rapid Thermal Annealing (RTA)', ja: '急速熱アニール装置（RTA）' },
    desc: {
      zh: '鈣鈦礦/量子點薄膜之氬氣環境熱處理，可精密控溫並降低薄膜缺陷與熱劣化。',
      en: 'Ar-ambient thermal annealing of perovskite/QD thin films with precise temperature profiling to reduce defect density.',
      ja: 'ペロブスカイト・量子ドット薄膜のAr雰囲気精密熱処理。欠陥低減と熱劣化抑制を実現。',
    },
    image: '/images/equipment/rta.webp',
  },
  {
    name: { zh: '表面電漿共振 (SPR) 量測系統', en: 'SPR Measurement System', ja: 'SPR計測システム' },
    desc: {
      zh: '非接觸式高靈敏度折射率量測，應用於工業潤滑油水混合度與微量水分光學監控。',
      en: 'High-sensitivity refractive-index and water-content optical sensing for industrial lubricant monitoring.',
      ja: '非接触・高感度な屈折率計測。工業用潤滑油の含水量および乳化度モニタリングに応用。',
    },
    image: '/images/equipment/spr.webp',
  },
  {
    name: { zh: '自動化數據擷取平台 (DAQ)', en: 'Automated DAQ Platform', ja: '自動データ収集プラットフォーム' },
    desc: {
      zh: 'Cypress FX2 微控制器整合高速數位示波器與多功能電表，全自動數據擷取與分析。',
      en: 'Fully automated measurement platform integrating Cypress FX2, digital oscilloscopes, DMMs and LabVIEW.',
      ja: 'Cypress FX2マイコンと高速デジタルオシロスコープ・マルチメータを統合した全自動データ収集システム。',
    },
    image: '/images/equipment/daq.webp',
  },
  {
    name: { zh: '積分球光電量測系統', en: 'Integrating Sphere Photometric System', ja: '積分球光度計測システム' },
    desc: {
      zh: '高精度 LED 發光光譜、光通量、發光效率與色度座標全光譜分析儀器。',
      en: 'High-precision LED spectral analysis, total luminous flux, luminous efficacy and chromaticity coordinates.',
      ja: '高精度LED発光スペクトル、全光束、発光効率および色度座標の全波長光度解析。',
    },
    image: '/images/equipment/integrating-sphere.webp',
  },
  {
    name: { zh: '半導體微探針量測平台', en: 'Micro-Probe Measurement Station', ja: 'マイクロプローブ計測ステーション' },
    desc: {
      zh: '微米級晶圓、光電薄膜元件之微探針微細接觸量測與電氣特性 (I-V) 掃描。',
      en: 'Micron-level wafer and thin-film micro-probe electrical I-V parameter characterization.',
      ja: 'マイクロメートル級ウェハ・薄膜光電子素子の微細プローブ接触計測と電気特性（I-V）評価。',
    },
    image: '/images/equipment/probe-station.webp',
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
    title: {
      zh: '實驗室全新網站啟動建置',
      en: 'New Lab Website Project Started',
      ja: '研究室ウェブサイトの新規構築を開始',
    },
    body: {
      zh: '電子量測實驗室全新官方網站於 2026-11-07 正式啟動規劃與建置，全面支援繁體中文、English、日本語三語切換與深色模式，目前持續開發與微調測試中。',
      en: 'Planning and development of the new Electronic Measurement Lab official website commenced on 2026-11-07, supporting Chinese, English, Japanese, and dark mode, currently in active development.',
      ja: '電子計測研究室の新しい公式ウェブサイトの企画・構築を2026-11-07より開始しました。中国語・英語・日本語の3言語切替やダークモードに対応し、現在公開に向けて開発・調整中です。',
    },
    image: '/images/news/website-launch.webp',
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
    image: '/images/news/admissions-2026.webp',
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
    image: '/images/news/icct-pacific-2026.webp',
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
    image: '/images/news/innovation-2025.webp',
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
    image: '/images/news/innovation-2024.webp',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/恭賀-本系陳文瑞老師指導參加『2024全國大專院校產學創新實作競賽』-榮獲手工具創新設計獎-電子系全體師生恭賀-43444169',
  },
];
