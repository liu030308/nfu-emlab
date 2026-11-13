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
      zh: '真空熱蒸鍍沉積機台',
      en: 'Vacuum Thermal Evaporation Deposition System',
      ja: '真空熱蒸着成膜システム',
    },
    desc: {
      zh: '配備 VD-7071 專用蒸鍍沉積電源供應器、精密切換電錶與高真空不鏽鋼腔體，專用於半導體電極金屬化（如 Al、Ag、Au）及光電薄膜熱蒸鍍製程。',
      en: 'Equipped with VD-7071 deposition power supply, precision AC meters, and stainless steel high-vacuum chamber for semiconductor electrode metallization and thin-film thermal evaporation.',
      ja: 'VD-7071蒸着用電源、高精度計器、ステンレス製高真空チャンバーを備え、半導体電極金属化（Al、Ag、Au）および光電子薄膜の熱蒸着製程に使用。',
    },
    image: '/images/equipment/rta.webp',
  },
  {
    name: {
      zh: '射頻／直流磁控濺鍍與電漿鍍膜機台',
      en: 'RF/DC Magnetron Sputtering & Plasma Coating System',
      ja: '高周波・直流マグネトロンスパッタリング＆プラズマ成膜装置',
    },
    desc: {
      zh: '配備 Advanced Energy MDX-1K 磁控直流驅動電源、KYKY 複合真空監控計與氣體流量控制，執行高品質光電半導體薄膜濺鍍沉積與電漿表面改質。',
      en: 'Equipped with Advanced Energy MDX-1K DC magnetron drive, KYKY composite vacuum gauge, and gas flow control for high-quality semiconductor sputtering and plasma surface treatment.',
      ja: 'Advanced Energy MDX-1K DCドライブ、KYKY複合真空計、ガス流量制御を備え、高品質な半導体薄膜スパッタリング成膜およびプラズマ表面処理を実施。',
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
      zh: '普羅森 Phrozen FDM 3D 列印機',
      en: 'Phrozen FDM 3D Printer',
      ja: 'Phrozen FDM 3Dプリンター',
    },
    desc: {
      zh: '普羅森（Phrozen）高速封閉式 FDM 3D 列印機，配備封閉保溫機箱與頂部耗材防潮烘乾加熱盒，專門用於實驗量測治具、感測器外殼、結構構件與專案實作樣機之快速成型。',
      en: 'Phrozen high-speed enclosed FDM 3D printer with temperature-retaining chamber and top filament dry-box heater for rapid fabrication of test fixtures, sensor enclosures, and prototypes.',
      ja: 'Phrozen高速密閉型FDM 3Dプリンター。保温チャンバーと上部フィラメント防潮乾燥加熱ボックスを備え、計測用治具・センサーケース・プロトタイプ機構部品の迅速な試作造形に使用。',
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
      zh: '實驗室全新網站啟動建置（持續微調校對中）',
      en: 'New Lab Website Development in Progress',
      ja: '研究室ウェブサイトの新規構築中',
    },
    body: {
      zh: '電子量測實驗室官方網站於 2026-11-07 正式啟動規劃與建置，全面支援繁體中文、English、日本語三語切換與深色模式。目前網站內容正持續校對更新與微調測試中，尚未正式上線對外發布。',
      en: 'Planning and development of the new Electronic Measurement Lab official website commenced on 2026-11-07 with multilingual and dark mode support, currently in active development prior to official launch.',
      ja: '電子計測研究室の公式ウェブサイトの企画・構築を2026-11-07より開始しました。3言語対応およびダークモードを備え、正式公開に向けて現在内容の校正・微調整を行っています。',
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
    date: '2026-03-30',
    title: {
      zh: '恭賀！本實驗室團隊榮獲 IEEE ICCT-Pacific 2026 最佳學生壁報論文獎',
      en: 'Congrats! Best Student Poster Award at IEEE ICCT-Pacific 2026',
      ja: '祝！IEEE ICCT-Pacific 2026 最優秀学生ポスター賞を受賞',
    },
    body: {
      zh: '陳文瑞教授指導本實驗室劉峻瑋、洪梓瑜、潘昱澤、盧暐竑前往日本山口大學參加 ICCT-Pacific 2026 國際會議，發表論文「AIoT Base Smart Consumables Drying Cabinet」，榮獲 Best Student Poster Award！',
      en: 'Prof. Wen-Ray Chen and lab members Jun Wei Liu, Zi-Yu Hong, Yu-Zan Pan, and Wei-Hung Lu won the Best Student Poster Award at IEEE ICCT-Pacific 2026 in Yamaguchi, Japan.',
      ja: '陳文瑞教授の指導のもと、当研究室の劉峻瑋・洪梓瑜・潘昱澤・盧暐竑が日本・山口大学で開催されたIEEE ICCT-Pacific 2026にて「AIoT Base Smart Consumables Drying Cabinet」を発表し、最優秀学生ポスター賞を受賞しました。',
    },
    image: '/images/seniors/icct-2026-award.webp',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/Announcements/%E6%81%AD%E8%B3%80-%E9%9B%BB%E5%AD%90%E7%B3%BB%E9%99%B3%E6%96%87%E7%91%9E%E8%80%81%E5%B8%AB%E6%8C%87%E5%B0%8E%E5%AD%B8%E7%94%9F%E5%8A%89%E5%B3%BB%E7%91%8B-%E6%B4%AA%E6%A2%93%E7%91%9C-%E6%BD%98%E6%98%B1%E6%BE%A4-%E7%9B%A7%E6%9A%90%E7%AB%91%E5%8F%83%E5%8A%A0-ICCT-Pacific-2026-2026-03-29-Yamaguchi-Japan-%E5%9C%8B%E9%9A%9B%E6%9C%83%E8%AD%B0-%E7%8D%B2%E5%BE%97%E6%9C%80%E4%BD%B3%E5%AD%B8%E7%94%9F%E5%A3%81%E5%A0%B1%E8%AB%96%E6%96%87%E7%8D%8EBest-Student-Poster-Award-%E8%AB%96%E6%96%87%E4%B8%BB%E9%A1%8C-AIoT-Base-Smart-Consumables-Drying-Cabinet-69367103',
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
    date: '2024-11-26',
    title: {
      zh: '恭賀！榮獲 2024 全國大專院校產學創新實作競賽「手工具創新設計獎」',
      en: 'Hand-Tool Innovation Design Award at 2024 National Innovation Competition',
      ja: '2024 全国大学産学イノベーション実装コンテスト「ハンドツール革新デザイン賞」受賞',
    },
    body: {
      zh: '陳文瑞教授指導學生團隊朱囿儒、林學澤、張翔袁、陳昱琮、潘昱澤參加 2024 全國大專院校產學創新實作競賽，以「踏板發電在智慧老年健康復健系統的應用」榮獲手工具創新設計獎。',
      en: 'Awarded for "Pedal Power Generation in Smart Elderly Rehabilitation Systems" advised by Prof. Wen-Ray Chen, team: Yu-Ru Zhu, Xue-Ze Lin, Xiang-Yuan Zhang, Yu-Cong Chen, Yu-Zan Pan.',
      ja: '陳文瑞教授が指導する学生チーム（朱囿儒、林學澤、張翔袁、陳昱琮、潘昱澤）が「ペダル発電を用いた高齢者スマート健康リハビリシステム」で受賞しました。',
    },
    image: '/images/seniors/innovation-2024-team.webp',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/Announcements/%E6%81%AD%E8%B3%80-%E6%9C%AC%E7%B3%BB%E9%99%B3%E6%96%87%E7%91%9E%E8%80%81%E5%B8%AB%E6%8C%87%E5%B0%8E%E5%8F%83%E5%8A%A0%E3%80%8E2024%E5%85%A8%E5%9C%8B%E5%A4%A7%E5%B0%88%E9%99%A2%E6%A0%A1%E7%94%A2%E5%AD%B8%E5%89%B5%E6%96%B0%E5%AF%A6%E4%BD%9C%E7%AB%B6%E8%B3%BD%E3%80%8F-%E6%A6%AE%E7%8D%B2%E6%89%8B%E5%B7%A5%E5%85%B7%E5%89%B5%E6%96%B0%E8%A8%AD%E8%A8%88%E7%8D%8E-%E9%9B%BB%E5%AD%90%E7%B3%BB%E5%85%A8%E9%AB%94%E5%B8%AB%E7%94%9F%E6%81%AD%E8%B3%80-43444169',
  },
  {
    date: '2023-12-01',
    title: {
      zh: '恭賀！榮獲 2023 全國大專院校產學創新實作競賽「佳作獎」',
      en: 'Honorable Mention at 2023 National Innovation Competition',
      ja: '祝！2023 全国大学産学イノベーション実装コンテスト「佳作」受賞',
    },
    body: {
      zh: '陳文瑞教授指導學生團隊林揚恩、陳靖中、林學澤、朱囿儒、張翔袁參加 2023 全國大專院校產學創新實作競賽，以「應用於金屬加工液的 IOT 落球式油濃度量測系統」榮獲佳作獎！',
      en: 'Advised by Prof. Wen-Ray Chen, students Yang-En Lin, Jing-Zhong Chen, Xue-Ze Lin, Yu-Ru Zhu, and Xiang-Yuan Zhang won Honorable Mention for IoT Falling-Ball Oil Concentration Measurement System.',
      ja: '陳文瑞教授の指導のもと、林揚恩・陳靖中・林學澤・朱囿儒・張翔袁が「金属加工液向けIoT落球式油濃度計測システム」で佳作を受賞しました。',
    },
    image: '/images/seniors/innovation-2023-team.webp',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/Announcements/%E6%81%AD%E8%B3%80-%E6%9C%AC%E7%B3%BB%E9%99%B3%E6%96%87%E7%91%9E%E8%80%81%E5%B8%AB%E6%8C%87%E5%B0%8E%E5%AD%B8%E7%94%9F%E6%9E%97%E6%8F%9A%E6%81%A9-%E9%99%B3%E9%9D%96%E4%B8%AD-%E6%9E%97%E5%AD%B8%E6%BE%A4-%E6%9C%B1%E5%9B%BF%E5%84%92-%E5%BC%B5%E7%BF%94%E8%A2%81%E5%8F%83%E5%8A%A0%E3%80%8E2023%E5%85%A8%E5%9C%8B%E5%A4%A7%E5%B0%88%E9%99%A2%E6%A0%A1%E7%94%A2%E5%AD%B8%E5%89%B5%E6%96%B0%E5%AF%A6%E4%BD%9C%E7%AB%B6%E8%B3%BD%E3%80%8F%E6%A6%AE%E7%8D%B2%E4%BD%B3%E4%BD%9C%E7%8D%8E-%E9%9B%BB%E5%AD%90%E7%B3%BB%E5%85%A8%E9%AB%94%E5%B8%AB%E7%94%9F%E6%81%AD%E8%B3%80-70098888',
  },
  {
    date: '2021-10-27',
    title: {
      zh: '恭賀！榮獲 2021 台灣創新技術博覽會 (TIE) 發明競賽「銅牌獎」',
      en: 'Bronze Medal at 2021 Taiwan Innotech Expo (TIE)',
      ja: '祝！2021 台湾イノテックエキスポ「銅賞」受賞',
    },
    body: {
      zh: '陳文瑞教授指導學生團隊蕭宇良、陳彰、張日星、葉佩欣參加 2021 台灣創新技術博覽會 (TIE)，以「電池履歷系統」榮獲發明競賽銅牌獎！',
      en: 'Advised by Prof. Wen-Ray Chen, students Yu-Liang Xiao, Zhang Chen, Ri-Xing Zhang, and Pei-Xin Ye won the Bronze Medal for Battery History System at 2021 Taiwan Innotech Expo.',
      ja: '陳文瑞教授の指導のもと、蕭宇良・陳彰・張日星・葉佩欣が「バッテリー履歴管理システム」で2021 台湾イノテックエキスポ銅賞を受賞しました。',
    },
    image: '/images/seniors/tie-2021-team.webp',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/Announcements/%E6%81%AD%E8%B3%80-%E6%9C%AC%E7%B3%BB%E9%99%B3%E6%96%87%E7%91%9E%E8%80%81%E5%B8%AB%E6%8C%87%E5%B0%8E%E5%AD%B8%E7%94%9F%E8%95%AD%E5%AE%87%E8%89%AF-%E9%99%B3%E5%BD%B0-%E5%BC%B5%E6%97%A5%E6%98%9F-%E8%91%89%E4%BD%A9%E6%AC%A3%E5%8F%83%E5%8A%A0%E3%80%8E2021%E5%8F%B0%E7%81%A3%E5%89%B5%E6%96%B0%E6%8A%80%E8%A1%93%E5%8D%9A%E8%A6%BD%E6%9C%83%E3%80%8F%E6%9C%9F%E9%96%93110-10-14-110-10-16-%E4%BB%A5%E3%80%8E%E9%9B%BB%E6%B1%A0%E5%B1%A5%E6%AD%B7%E7%B3%BB%E7%B5%B1%E3%80%8F-%E6%A6%AE%E7%8D%B2%E9%8A%85%E7%89%8C-%E9%9B%BB%E5%AD%90%E7%B3%BB%E5%85%A8%E9%AB%94%E5%B8%AB%E7%94%9F%E6%81%AD%E8%B3%80-38391016',
  },
];
