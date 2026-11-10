// 實驗室基本資料與指導教授
// 圖片放在 public/images/ 底下，把 image 欄位改成檔名即可（例如 '/images/pi.jpg'）
// image 留空字串 '' 時，網站會顯示「圖片待補」的佔位框
import type { L } from '../i18n/ui';

export const lab = {
  name: { zh: '電子量測實驗室 LED_LAB', en: 'Electronic Measurement Laboratory LED_LAB', ja: '電子計測研究室 LED_LAB' } as L,
  room: 'ATC 0102',
  location: {
    zh: '綜合三館（第三教學大樓）1 樓 ATC 0102',
    en: 'Room ATC 0102, 1F, Academic Building III',
    ja: '総合第三館 1階 ATC 0102',
  } as L,
  address: {
    zh: '632301 雲林縣虎尾鎮文化路 64 號 國立虎尾科技大學',
    en: 'No. 64, Wenhua Rd., Huwei, Yunlin 632301, Taiwan',
    ja: '〒632301 台湾 雲林県虎尾鎮文化路64号 国立虎尾科技大学',
  } as L,
  tagline: {
    zh: '從半導體材料到智慧感測，打造下一代光電量測技術',
    en: 'From semiconductor materials to smart sensing — building next-generation optoelectronic measurement.',
    ja: '半導体材料からスマートセンシングまで、次世代の光電子計測技術を創る',
  } as L,
  intro: {
    zh: '電子量測實驗室隸屬於國立虎尾科技大學電機資訊學院電子工程系，為系上核心研究實驗室。本實驗室專注於微電子元件特性分析、光學引擎開發以及前瞻光電封裝技術研究，研發脈絡由基礎半導體材料物理延伸至高階元件封裝、熱傳管理、光電檢測系統，以及終端智慧感測器與自動化設備，並結合中台灣科學園區產業資源，肩負培育半導體與高科技電子工程人才之使命。',
    en: 'The Electronic Measurement Laboratory is a core research lab of the Department of Electronic Engineering, National Formosa University (NFU). We focus on microelectronic device characterization, optical engine development, and advanced optoelectronic packaging. Our work spans from semiconductor material physics to device packaging, thermal management, optoelectronic inspection systems, and smart sensors and automation — training engineering talent for the semiconductor and high-tech industries of central Taiwan.',
    ja: '電子計測研究室は国立虎尾科技大学 電子工学科の中核研究室です。微小電子デバイスの特性評価、光学エンジン開発、先端光電子パッケージング技術を中心に、半導体材料物性からデバイス実装、熱マネジメント、光電子検査システム、スマートセンサー・自動化装置まで幅広く研究し、中部台湾のサイエンスパーク産業と連携しながら半導体・ハイテク分野の人材を育成しています。',
  } as L,
  mission: [
    {
      title: { zh: '基礎教學', en: 'Fundamentals', ja: '基礎教育' },
      desc: {
        zh: '電子量測與儀器操作的紮實訓練',
        en: 'Solid training in electronic measurement and instrumentation',
        ja: '電子計測と計測機器操作の確かな基礎訓練',
      },
    },
    {
      title: { zh: '專題實作', en: 'Hands-on Projects', ja: 'プロジェクト実習' },
      desc: {
        zh: '大學部專題生參與實際研究題目',
        en: 'Undergraduates join real research projects',
        ja: '学部生が実際の研究テーマに参加',
      },
    },
    {
      title: { zh: '前瞻研發', en: 'Advanced R&D', ja: '先端研究開発' },
      desc: {
        zh: '碩士生投入半導體薄膜分析與產學合作',
        en: 'Graduate students work on thin-film analysis and industry projects',
        ja: '大学院生が薄膜解析や産学連携プロジェクトに従事',
      },
    },
  ],
  heroImage: '', // 首頁主視覺
  labImage: '/images/lab-environment.svg', // 實驗室環境示意圖
};

export const pi = {
  name: { zh: '陳文瑞', en: 'Wen-Ray Chen', ja: '陳文瑞（チン・ブンズイ）' } as L,
  title: {
    zh: '電子工程系 教授 兼 系主任',
    en: 'Professor & Chair, Dept. of Electronic Engineering',
    ja: '電子工学科 教授 兼 学科長',
  } as L,
  education: {
    zh: '國立成功大學 微電子工程研究所 博士',
    en: 'Ph.D., Institute of Microelectronics, National Cheng Kung University',
    ja: '国立成功大学 微小電子工学研究所 博士',
  } as L,
  expertise: [
    { zh: '微電子元件', en: 'Microelectronic devices', ja: '微小電子デバイス' },
    { zh: '光學引擎開發', en: 'Optical engine development', ja: '光学エンジン開発' },
    { zh: 'LED 封裝與熱管理', en: 'LED packaging & thermal management', ja: 'LEDパッケージングと熱管理' },
    { zh: '光電半導體薄膜', en: 'Optoelectronic thin films', ja: '光電子半導体薄膜' },
    { zh: '固態電子與半導體物理', en: 'Solid-state electronics & semiconductor physics', ja: '固体電子・半導体物性' },
    { zh: '智慧感測與電子量測系統', en: 'Smart sensing & electronic measurement', ja: 'スマートセンシング・電子計測' },
  ] as L[],
  experience: [
    {
      zh: '國立虎尾科技大學 電子工程系 系主任（2026/02 ～ 迄今）',
      en: 'Chair, Dept. of Electronic Engineering, National Formosa University (2026/02 – Present)',
      ja: '国立虎尾科技大学 電子工学科 学科長（2026/02 ～ 現在）',
    },
    {
      zh: '國立虎尾科技大學 電子工程系 教授（2019/08 ～ 迄今）',
      en: 'Professor, Dept. of Electronic Engineering, National Formosa University (2019/08 – Present)',
      ja: '国立虎尾科技大学 電子工学科 教授（2019/08 ～ 現在）',
    },
    {
      zh: '國立虎尾科技大學 電子工程系 副教授（2007/08 ～ 2019/08）',
      en: 'Associate Professor, Dept. of Electronic Engineering, National Formosa University (2007/08 – 2019/08)',
      ja: '国立虎尾科技大学 電子工学科 准教授（2007/08 ～ 2019/08）',
    },
    {
      zh: '國立虎尾科技大學 電子工程系 助理教授（2006/02 ～ 2007/07）',
      en: 'Assistant Professor, Dept. of Electronic Engineering, National Formosa University (2006/02 – 2007/07)',
      ja: '国立虎尾科技大学 電子工学科 助教（2006/02 ～ 2007/07）',
    },
    {
      zh: '大葉大學 電機工程系 助理教授（2005/08 ～ 2006/01）',
      en: 'Assistant Professor, Dept. of Electrical Engineering, Da-Yeh University (2005/08 – 2006/01)',
      ja: '大葉大学 電機工学科 助教（2005/08 ～ 2006/01）',
    },
    {
      zh: '國立嘉義大學 應用物理系 兼任助理教授（2005/08 ～ 2006/01）',
      en: 'Adjunct Assistant Professor, Dept. of Applied Physics, National Chiayi University (2005/08 – 2006/01)',
      ja: '国立嘉義大学 応用物理学科 兼任助教（2005/08 ～ 2006/01）',
    },
    {
      zh: '南臺科技大學 電機工程系 助理教授（2002/08 ～ 2005/07）',
      en: 'Assistant Professor, Dept. of Electrical Engineering, Southern Taiwan University of Science and Technology (2002/08 – 2005/07)',
      ja: '南台科技大学 電機工学科 助教（2002/08 ～ 2005/07）',
    },
  ] as L[],
  courses: [
    { zh: '電子學／應用電子學與實習', en: 'Electronics / Applied Electronics & Lab', ja: '電子工学・応用電子工学および実習' },
    { zh: '半導體物理與元件', en: 'Semiconductor Physics & Devices', ja: '半導体物理・デバイス' },
    { zh: '微電子元件與製程技術', en: 'Microelectronic Devices & Process Technology', ja: '微小電子デバイス・プロセス技術' },
    { zh: '光電元件與電子量測技術', en: 'Optoelectronic Devices & Electronic Measurement', ja: '光電子デバイス・電子計測技術' },
  ] as L[],
  patents: [
    { zh: '智慧型紅外線拔罐器（中華民國發明專利，第一發明人，2018）', en: 'Smart Infrared Cupping Device (R.O.C. Invention Patent, 2018)', ja: 'スマート赤外線カッピング器（中華民国発明特許、2018）' },
    { zh: '主動吸附式的承載裝置（中華民國新型專利，第一發明人，2017）', en: 'Active Suction Carrier Device (R.O.C. Utility Model Patent, 2017)', ja: '能動吸着式キャリア装置（中華民国実用新案、2017）' },
    { zh: '以光穿透率面積監控潤滑油含水量之檢測方法（中華民國發明專利，2016／2017）', en: 'Method for Monitoring Water Content in Lubricating Oil via Optical Transmittance Area (R.O.C. Invention Patent, 2016/2017)', ja: '光透過率面積による潤滑油水分量監視・検出方法（中華民国発明特許、2016/2017）' },
    { zh: '蒸鍍機送料器、高效率球泡燈、便攜式母乳保冷保鮮器（中華民國新型專利，第一發明人，2016）', en: 'Evaporator Feeder, High-Efficiency LED Bulb & Breast Milk Cooler (R.O.C. Utility Model Patents, 2016)', ja: '蒸着機フィーダー・高効率LED電球・母乳保冷器（中華民国実用新案、2016）' },
    { zh: '發光二極體優化照明裝置（中華民國發明專利，第一發明人，2014）', en: 'Optimized LED Lighting Apparatus (R.O.C. Invention Patent, 2014)', ja: 'LED最適化照明装置（中華民国発明特許、2014）' },
    { zh: '紫外線發光二極體自我主動封裝方法及其製備技術（中華民國發明專利，第一發明人，2014）', en: 'Self-Active Packaging Method for UV-LED and Fabricated UV-LED (R.O.C. Invention Patent, 2014)', ja: '紫外線LED自己能動パッケージング方法および素子（中華民国発明特許、2014）' },
    { zh: '具有溫度調節功能之行動寵物箱（中華民國新型專利，第一發明人，2014）', en: 'Mobile Pet Carrier with Temperature Regulation (R.O.C. Utility Model Patent, 2014)', ja: '温度調節機能付きポータブルペットケージ（中華民国実用新案、2014）' },
    { zh: '發光二極體食品溫熱器（中華民國發明專利，第一發明人，2013）', en: 'LED Food Warmer (R.O.C. Invention Patent, 2013)', ja: 'LED食品保温器（中華民国発明特許、2013）' },
    { zh: '電池履歷系統（中華民國新型專利 TWM617006U）', en: 'Battery Lifecycle History System (R.O.C. Utility Model Patent TWM617006U)', ja: 'バッテリー履歴管理システム（中華民国実用新案 TWM617006U）' },
    { zh: '聚蚊裝置（中華民國發明專利 I301748，2008）', en: 'Mosquito Attracting Apparatus (R.O.C. Invention Patent I301748, 2008)', ja: '蚊誘引・捕獲装置（中華民国発明特許 I301748、2008）' },
  ] as L[],
  phoneLab: '05-631-5648',
  phoneOffice: '05-631-5642',
  fax: '05-631-5643',
  email: 'chenwr@nfu.edu.tw',
  profileUrl: 'https://dee.nfu.edu.tw/zh_tw/members/professor/Wen_Ray_Chen',
  office: {
    zh: '個人研究室：綜合三館 3 樓 ATC0303-2｜系主任辦公室：綜合三館 2 樓 ATC0204-2｜研究實驗室：ATC0102',
    en: 'Office: ATC0303-2 (3F) | Chair’s Office: ATC0204-2 (2F) | Research Lab: ATC0102, Academic Building III',
    ja: '個人研究室：総合第三館 3階 ATC0303-2｜学科長室：2階 ATC0204-2｜研究実験室：ATC0102',
  } as L,
  image: '/images/pi-chen.jpg',
};

