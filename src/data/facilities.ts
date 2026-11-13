// 設備、安全規範、最新消息
import type { L } from '../i18n/ui';

export type Equipment = { name: L; desc: L; image: string };

// 儀器設備列表（全面採用實驗室學長姐親自拍攝之實體機台照片）
export const equipment: Equipment[] = [
  {
    name: {
      zh: '半導體微探針量測平台',
      en: 'Micro-Probe Measurement Station',
      ja: 'マイクロプローブ計測ステーション',
    },
    desc: {
      zh: '高倍率顯微鏡結合微米級探針位移平台與溫控載台，專門進行微電子晶片、薄膜元件微接觸量測與電氣特性 (I-V) 分析。',
      en: 'High-magnification microscope integrated with micron-level probe positioners and thermal stage for microelectronic chip and thin-film I-V characterization.',
      ja: '高倍率光学顕微鏡とマイクロプローブ移動機構、温度制御ステージを統合し、微小電子素子や薄膜の電気特性（I-V）を精密測定。',
    },
    image: '/images/equipment/probe-station.webp',
  },
  {
    name: {
      zh: '高速數位存儲示波器 (BK Precision 2565B)',
      en: 'BK Precision 2565B Digital Storage Oscilloscope',
      ja: 'BK Precision 2565B デジタルストレージオシロスコープ',
    },
    desc: {
      zh: '100 MHz 頻寬雙通道數位示波器，提供高速即時波形取樣、微弱信號捕捉、雜訊濾波與自動化頻率參數分析。',
      en: '100 MHz dual-channel digital oscilloscope for high-speed waveform acquisition, weak-signal capture, noise filtering and automated parametric analysis.',
      ja: '100MHz帯域のデジタルストレージオシロスコープ。高速波形サンプリング、微弱信号捕捉、ノイズ除去および自動パラメータ測定に対応。',
    },
    image: '/images/equipment/daq.webp',
  },
  {
    name: {
      zh: '真空熱退火與精密溫控系統',
      en: 'Vacuum Thermal Annealing & Temperature Control System',
      ja: '真空熱アニール・精密温度制御システム',
    },
    desc: {
      zh: '高真空不鏽鋼退火腔體搭配數位觸控監控介面，專用於鈣鈦礦薄膜、量子點發光層之受控氣氛退火與熱穩定性改善。',
      en: 'Stainless steel high-vacuum annealing chamber with digital touch controller for controlled-ambient thermal processing of perovskites and quantum dots.',
      ja: '高真空ステンレス製チャンバーとデジタルタッチパネル制御を備え、ペロブスカイト薄膜や量子ドットの精密熱処理と安定性向上を実現。',
    },
    image: '/images/equipment/rta.webp',
  },
  {
    name: {
      zh: '真空電漿鍍膜與沉積機台',
      en: 'Plasma Deposition & Thin-Film Vacuum System',
      ja: 'プラズマ成膜・真空薄膜蒸着システム',
    },
    desc: {
      zh: '配備 Advanced Energy MDX-1K 磁控驅動電源與 KYKY 複合真空監控計，執行高真空半導體薄膜鍍膜與電漿表面改質。',
      en: 'Equipped with Advanced Energy MDX-1K magnetron drive and KYKY vacuum gauges for high-vacuum thin-film deposition and plasma processing.',
      ja: 'Advanced Energy MDX-1KマグネトロンドライブとKYKY真空計を装備し、高真空薄膜成膜およびプラズマ表面改質を実施。',
    },
    image: '/images/equipment/deposition-system.webp',
  },
  {
    name: {
      zh: '精密量測工作台（信號源・電表・程控電源）',
      en: 'Precision Multi-Instrument Test Bench',
      ja: '精密計測ベンチ（信号発生器・マルチメータ・直流電源）',
    },
    desc: {
      zh: '整合 BK Precision 4055 任意波形產生器、5491B 雙顯示五位半數位電表及 MOTECH 可程控直流電源，提供全方位電路激勵與精密量測。',
      en: 'Integrated BK Precision 4055 arbitrary waveform generator, 5491B 50,000-count DMM, and MOTECH programmable DC power supply.',
      ja: 'BK Precision 4055任意波形発生器、5491B高精度デジタルマルチメータおよびMOTECHプログラマブル直流電源を統合した総合計測ベンチ。',
    },
    image: '/images/equipment/instruments-rack-card.webp',
  },
  {
    name: {
      zh: '光固化 3D 快速成型與機構研發工作站',
      en: 'Phrozen 3D Prototyping & Curing Station',
      ja: '光造形3Dプリンティング・試作開発ステーション',
    },
    desc: {
      zh: 'Phrozen 3D 高解析光固化快速成型系統與恆溫保護箱，用於實驗治具、光學模組固定件、感測器外殼與競賽原型樣機製作。',
      en: 'Phrozen high-resolution resin 3D printing and temperature-controlled curing enclosure for experimental fixtures, optical mounts, and prototype casings.',
      ja: 'Phrozen高精細光造形3Dプリンタと温湿度保護ブース。実験用治具、光学系固定具、センサー外装および試作プロトタイプの迅速製作に使用。',
    },
    image: '/images/equipment/3d-printer-card.webp',
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
