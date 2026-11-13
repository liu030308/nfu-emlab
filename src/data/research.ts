// 研究領域（全面依據歷屆畢業碩士生學位論文與學術成果深化更新）
import type { L } from '../i18n/ui';

export type ThesisRef = {
  title: L;
  student: L;
  year?: number;
};

export type ResearchArea = {
  id: string;
  icon: string;
  title: L;
  summary: L;
  points: L[];
  theses?: ThesisRef[];
  applications: L[];
  image: string;
};

export const research: ResearchArea[] = [
  {
    id: 'packaging',
    icon: '💡',
    title: {
      zh: '高功率 LED 覆晶封裝與晶片微接合製程',
      en: 'High-Power LED Flip-Chip Packaging & Micro-Bonding',
      ja: '高出力LEDフリップチップ実装とマイクロ接合プロセス',
    },
    summary: {
      zh: '聚焦車用與高功率光電元件製造：研發無鉛共晶微焊接、覆晶載板固晶與螢光粉封裝防沉澱技術，提升高溫抗疲勞與發光可靠度。',
      en: 'Focusing on automotive and high-power optoelectronic device manufacturing: developing lead-free eutectic bonding, flip-chip submounts, and anti-settling phosphor packaging for high efficiency and reliability.',
      ja: '車載・高出力光電子素子製造に注力：鉛フリー共晶接合、フリップチップ実装基板および蛍光体沈降防止封止技術を開発し、高効率と耐熱信頼性を向上。',
    },
    points: [
      {
        zh: '無鉛暫態液相鍵合 (TLP) 技術：研發鋁鍺錫 (Al-Ge-Sn) 與銦合金微接合層，解決高功率晶片界面高溫疲勞與空洞率問題',
        en: 'Lead-free transient liquid phase (TLP) bonding with Al-Ge-Sn and In alloys to resolve thermal fatigue and voiding in high-power chip joints',
        ja: '鉛フリー過渡液相接合（TLP）技術：Al-Ge-SnおよびIn合金接合層により、高出力素子接合部の熱疲労とボイド発生を抑制',
      },
      {
        zh: '覆晶固晶載板製程：以鋅置換法製備鋁基金錫 (Au-Sn) 共晶微焊點，並整合碳化矽 (SiC) 與氮化鋁 (AlN) 應力緩衝層',
        en: 'Flip-chip bonding on submounts: zincate-processed Al-based Au-Sn eutectic micro-joints integrated with SiC and AlN stress buffer layers',
        ja: 'フリップチップ実装基板工程：ジンケート処理によるAl基Au-Sn共晶微小はんだ接合と、SiC/AlN応力緩衝層の最適化',
      },
      {
        zh: '高散熱封裝副載具開發：圖案化矽副載具 (Silicon Submount) 與高平坦度玻璃覆晶載板微電極線路佈局',
        en: 'High-thermal-dissipation carriers: patterned silicon submounts and planar glass flip-chip substrate micro-electrode routing',
        ja: '高放熱サブマウント開発：パターニングSiサブマウントおよび高平坦度ガラス基板微細電極配線レイアウト',
      },
      {
        zh: '白光 LED 螢光膠體工程：螢光粉點膠抗沉澱技術、連續電泳沉積 (EPD) 與精密壓模封裝，消除黃圈現象並達到發光色度高度均勻',
        en: 'White LED phosphor encapsulation: anti-settling dispensing, continuous electrophoretic deposition (EPD), and molding to eliminate yellow-ring artifacts for uniform emission',
        ja: '白色LED蛍光体封止技術：蛍光体沈降防止ディスペンス、連続電気泳動堆積（EPD）、精密モールドにより黄色リングを抑制し発光均一性を向上',
      },
    ],
    theses: [
      {
        title: { zh: '鋁鍺銦錫暫態液相鍵結接合面之結構分析', en: 'Structural Analysis of Al-Ge-In-Sn TLP Bonding Interface', ja: 'Al-Ge-In-Sn TLP接合界面の構造解析' },
        student: { zh: '吳鴻瑋 碩士', en: 'Hong-Wei Wu, M.S.', ja: '吳鴻瑋 修士' },
        year: 2015,
      },
      {
        title: { zh: '應用鋁鍺錫暫態液相鍵合於低溫覆晶封裝之研究', en: 'Al-Ge-Sn TLP Bonding for Low-Temperature Flip-Chip Packaging', ja: '低温フリップチップ実装向けAl-Ge-Sn TLP接合の研究' },
        student: { zh: '李建霖 碩士', en: 'Jian-Lin Li, M.S.', ja: '李建霖 修士' },
        year: 2014,
      },
      {
        title: { zh: '以鋅置換法製備鋁基金錫共晶堆疊層及應用於覆晶封裝之探討', en: 'Zincate-Processed Al-Based Au-Sn Stacking for Flip-Chip Packaging', ja: 'ジンケート法によるAl基Au-Sn共晶積層の作製とフリップチップ応用' },
        student: { zh: '李嘉家 碩士', en: 'Jia-Jia Li, M.S.', ja: '李嘉家 修士' },
        year: 2012,
      },
      {
        title: { zh: '鋁鍺銅鋅錫合金應用於玻璃覆晶載板', en: 'Al-Ge-Cu-Zn-Sn Alloy for Glass Flip-Chip Substrates', ja: 'ガラスフリップチップ基板用Al-Ge-Cu-Zn-Sn合金' },
        student: { zh: '劉冠岐 碩士', en: 'Guan-Qi Liu, M.S.', ja: '劉冠岐 修士' },
        year: 2014,
      },
      {
        title: { zh: '提升良率之螢光粉點膠抗沉澱技術', en: 'Anti-Settling Phosphor Dispensing Technology for Yield Enhancement', ja: '歩留まり向上のための蛍光体沈降防止ディスペンス技術' },
        student: { zh: '蔡雲棠 碩士', en: 'Yun-Tang Tsai, M.S.', ja: '蔡雲棠 修士' },
        year: 2014,
      },
      {
        title: { zh: '應用電泳連續製程技術於高功率白光發光二極體之開發', en: 'Continuous Electrophoretic Deposition for High-Power White LEDs', ja: '連続電気泳動堆積技術を用いた高出力白色LEDの開発' },
        student: { zh: '楊程宇 碩士', en: 'Cheng-Yu Yang, M.S.', ja: '楊程宇 修士' },
        year: 2010,
      },
    ],
    applications: [
      { zh: '高功率 LED 車燈照明', en: 'High-power automotive LED lamps', ja: '高出力車載LED照明' },
      { zh: '微型投影光學引擎', en: 'Pico-projector optical engines', ja: '小型プロジェクター光学系' },
      { zh: 'Mini / Micro LED 顯示模組', en: 'Mini/Micro LED displays', ja: 'Mini/Micro LEDディスプレイ' },
      { zh: '高可靠度覆晶封裝載板', en: 'High-reliability flip-chip substrates', ja: '高信頼性フリップチップ基板' },
    ],
    image: '/images/research/packaging.webp',
  },
  {
    id: 'healthcare',
    icon: '🩺',
    title: {
      zh: '智慧醫療照護與穿戴式生醫感測',
      en: 'Smart Healthcare & Wearable Biomedical Sensing',
      ja: 'スマートヘルスケアとウェアラブル生体センシング',
    },
    summary: {
      zh: '結合穿戴式感測、動能發電、非侵入式光學頻譜與邊緣運算，打造高齡長照即時預警與智慧復健系統。',
      en: 'Integrating wearable sensing, kinetic energy harvesting, non-invasive optical spectroscopy, and edge AI for elderly long-term care and smart rehabilitation.',
      ja: 'ウェアラブルセンサー、自己発電、非侵襲光スペクトル解析、エッジAIを統合し、高齢者介護とリハビリ支援システムを構築。',
    },
    points: [
      {
        zh: '長照衛浴場域之多軸姿態感測與智慧即時跌倒偵測預警演算法（榮獲 2025 全國大專產學創新實作競賽第三名）',
        en: 'Multi-axis posture sensing and real-time fall detection algorithms for elderly bathrooms (3rd Place, 2025 National Innovation Competition)',
        ja: '介護浴室向けの多軸姿勢センシングとリアルタイム転倒検知アルゴリズム（2025年全国産学イノベーション大会 第3位）',
      },
      {
        zh: '踏板發電結合智慧老年健康復健數據監測之綠能動能收集系統（榮獲 2024 手工具創新設計獎）',
        en: 'Kinetic energy harvesting pedals integrated with rehabilitation telemetry for seniors (Innovation Award, 2024 National Competition)',
        ja: '自己発電ペダルと高齢者リハビリデータ計測を融合したグリーンエネルギー支援システム（2024年革新デザイン賞）',
      },
      {
        zh: '多波長光學吸收頻譜分析，應用於非侵入式人體葡萄糖與生化濃度量測',
        en: 'Multi-wavelength optical absorption spectroscopy for non-invasive glucose and biochemical concentration measurement',
        ja: '多波長光吸収分光法による非侵襲グルコース・生体成分濃度計測',
      },
      {
        zh: '智慧飲食監測系統、藥物雲端管理之智慧便攜藥盒與手機遙控電動輪椅輔具',
        en: 'Smart dietary monitoring systems, cloud-connected portable pillboxes, and mobile-controlled power wheelchair assists',
        ja: 'スマート食事モニタリング、クラウド管理型携帯薬箱、スマホ遠隔操作電動車椅子支援システム',
      },
    ],
    theses: [
      {
        title: { zh: '長照衛浴專用之智慧即時跌倒偵測系統開發', en: 'Smart Real-Time Fall Detection System for Long-Term Care Bathrooms', ja: '介護浴室向けスマートリアルタイム転倒検知システムの開発' },
        student: { zh: '陳昱琮 碩士', en: 'Yu-Cong Chen, M.S.', ja: '陳昱琮 修士' },
        year: 2026,
      },
      {
        title: { zh: '踏板發電在智慧老年健康復健系統的應用', en: 'Pedal Power Generation in Smart Elderly Rehabilitation Systems', ja: '高齢者スマート健康リハビリシステムにおけるペダル発電の応用' },
        student: { zh: '潘昱澤、朱囿儒等 碩士團隊', en: 'Yu-Zan Pan, Yu-Ru Zhu et al.', ja: '潘昱澤・朱囿儒 他' },
        year: 2024,
      },
      {
        title: { zh: '適用於非侵入式血糖感測的多波長光學葡萄糖濃度量測研究', en: 'Multi-Wavelength Optical Glucose Sensing for Non-Invasive Measurement', ja: '非侵襲血糖測定に向けた多波長光学グルコース濃度計測の研究' },
        student: { zh: '張翔袁 碩士', en: 'Hsiang-Yuan Chang, M.S.', ja: '張翔袁 修士' },
        year: 2026,
      },
      {
        title: { zh: '智慧飲食監測系統設計', en: 'Design of Smart Dietary Monitoring System', ja: 'スマート食事モニタリングシステムの設計' },
        student: { zh: '沈芸彤 碩士', en: 'Yun-Tong Shen, M.S.', ja: '沈芸彤 修士' },
        year: 2026,
      },
      {
        title: { zh: '具備雲端功能之手機遙控電動輪椅', en: 'Cloud-Enabled Mobile-Controlled Electric Wheelchair', ja: 'クラウド連携型スマートフォン遠隔操作電動車椅子' },
        student: { zh: '宋克南 碩士', en: 'Ke-Nan Song, M.S.', ja: '宋克南 修士' },
        year: 2018,
      },
      {
        title: { zh: '藥物雲端管理之智慧便攜藥盒系統', en: 'Smart Portable Pillbox with Cloud Medication Management', ja: 'クラウド服薬管理対応スマート携帯薬箱システム' },
        student: { zh: '張日星 碩士', en: 'Ri-Xing Zhang, M.S.', ja: '張日星 修士' },
        year: 2021,
      },
    ],
    applications: [
      { zh: '長照衛浴防跌即時通報', en: 'Bathroom fall detection & instant alert', ja: '高齢者浴室内転倒即時警報' },
      { zh: '銀髮自供電復健輔具', en: 'Self-powered senior rehab devices', ja: '自己発電型高齢者リハビリ機器' },
      { zh: '非侵入式生理數值快篩', en: 'Non-invasive vitals screening', ja: '非侵襲生体パラメータ迅速測定' },
      { zh: '智慧長照遠距關懷平台', en: 'Telehealth & remote care platforms', ja: 'スマート遠隔見守りシステム' },
    ],
    image: '/images/news/innovation-2025.webp',
  },
  {
    id: 'aiot-industry',
    icon: '🤖',
    title: {
      zh: '工業智慧物聯網 (AIoT) 與光電品質檢測',
      en: 'Industrial AIoT & Optoelectronic Quality Inspection',
      ja: '産業用AIoTと光電品質検査システム',
    },
    summary: {
      zh: '整合嵌入式微控制器、邊緣影像辨識與光譜穿透分析，實現工具機切削液線上檢測、耗材控溫與設備預知保養。',
      en: 'Integrating embedded MCUs, edge computer vision, and optical transmittance analysis for real-time machine tool fluid monitoring, smart temperature control, and predictive maintenance.',
      ja: '組込みマイコン、エッジ画像認識、光学透過率解析を統合し、工作機械の加工液リアルタイム監視、温湿度制御および予知保全を実現。',
    },
    points: [
      {
        zh: '落球法自動化感測結合物聯網，應用於金屬加工切削液之精確濃度檢測（榮獲 2023 全國產學創新實作競賽佳作）',
        en: 'Falling-ball IoT sensing for real-time oil concentration monitoring in metalworking fluids (2023 National Competition Honorable Mention)',
        ja: '落球法IoTセンシングによる金属加工切削油の精密濃度リアルタイム測定（2023年全国産学イノベーション大会 佳作）',
      },
      {
        zh: '微控制器結合 YOLO 目標檢測與光學穿透率量測，即時判別切削液髒污程度與油水乳化狀態',
        en: 'MCU integrated with YOLO vision and optical transmittance to detect fluid contamination and emulsification in real time',
        ja: 'マイコンとYOLO物体認識、光学透過率測定を融合した切削油汚染度・乳化状態の即時判定',
      },
      {
        zh: 'ESP32 雙微控制器架構與 SHT40 溫濕度 PID 演算法之智慧防潮烘箱（榮獲 IEEE ICCT-Pacific 2026 國際最佳學生海報獎）',
        en: 'Dual-ESP32 architecture with SHT40 climate sensing and dual-zone PID control for 3D consumables (IEEE ICCT-Pacific 2026 Best Student Poster Award)',
        ja: 'ESP32デュアルマイコンとSHT40センサによる2ゾーンPID温調フィラメント防潮乾燥機（IEEE ICCT-Pacific 2026 最優秀学生ポスター賞）',
      },
      {
        zh: 'Raspberry Pi 結合 OpenCV、OCR 影像字元辨識與 IoT 之水錶數字自動讀錶系統',
        en: 'Raspberry Pi with OpenCV, OCR optical character recognition, and IoT cloud for automated water meter digitization',
        ja: 'Raspberry Pi・OpenCV・OCR文字認識とIoT連携による水道メーター自動検針システム',
      },
      {
        zh: '工業動力電池履歷系統與雲端健全度 (SOH) 智慧管理（榮獲 2021 TIE 台灣創新技術博覽會銅牌獎）',
        en: 'Industrial battery history tracking and state-of-health (SOH) telemetry (Bronze Medal, 2021 Taiwan Innotech Expo)',
        ja: '産業用動力バッテリー履歴追跡とクラウド劣化度（SOH）健全性管理（2021年台湾イノテックエキスポ 銅賞）',
      },
    ],
    theses: [
      {
        title: { zh: '金屬加工液油濃度量測: 採用落球法的感測器系統', en: 'Falling-Ball Sensor System for Metalworking Fluid Oil Concentration', ja: '落球法センサシステムによる金属加工液油濃度測定' },
        student: { zh: '林揚恩 碩士', en: 'Yang-En Lin, M.S.', ja: '林揚恩 修士' },
        year: 2024,
      },
      {
        title: { zh: '基於微控制器和YOLO目標檢測開發的切削液濃度量測系統', en: 'Cutting Fluid Concentration Measurement Based on MCU and YOLO', ja: 'マイコンとYOLO物体認識による切削液濃度計測システム' },
        student: { zh: '林學澤 碩士', en: 'Xue-Ze Lin, M.S.', ja: '林學澤 修士' },
        year: 2024,
      },
      {
        title: { zh: '基於 Raspberry Pi 的傳統水錶數字自動讀錶系統: OpenCV、OCR 和 IoT 的整合', en: 'Automated Water Meter Reading via Raspberry Pi, OpenCV, OCR, and IoT', ja: 'Raspberry Pi・OpenCV・OCR・IoT統合による水道メーター自動検針' },
        student: { zh: '陳靖中 碩士', en: 'Jing-Zhong Chen, M.S.', ja: '陳靖中 修士' },
        year: 2025,
      },
      {
        title: { zh: '切削液光學品質感測器的研究', en: 'Research on Optical Quality Sensors for Cutting Fluids', ja: '切削液光学的品質センサーの研究' },
        student: { zh: '施富棋 碩士', en: 'Fu-Qi Shi, M.S.', ja: '施富棋 修士' },
        year: 2022,
      },
      {
        title: { zh: '以光穿透率面積監控工業潤滑油含水量與油水混合度', en: 'Monitoring Water Content of Industrial Lubricants by Optical Transmittance', ja: '光透過率による工業用潤滑油含水量・油水混合度の評価' },
        student: { zh: '陳彰 碩士', en: 'Zhang Chen, M.S.', ja: '陳彰 修士' },
        year: 2021,
      },
      {
        title: { zh: '工業動力電池履歷系統', en: 'Industrial Power Battery History Management System', ja: '産業用動力バッテリー履歴管理システム' },
        student: { zh: '蕭宇良 碩士', en: 'Yu-Liang Xiao, M.S.', ja: '蕭宇良 修士' },
        year: 2021,
      },
    ],
    applications: [
      { zh: 'CNC 工具機切削液即時監控', en: 'Real-time CNC cutting fluid monitoring', ja: 'CNC工作機械切削液リアルタイム監視' },
      { zh: '工業 4.0 智慧工廠預知保養', en: 'Industry 4.0 predictive maintenance', ja: 'インダストリー4.0予知保全' },
      { zh: '智慧水錶／瓦斯錶遠端抄表', en: 'Smart AMR utility meter reading', ja: 'スマートメーター遠隔自動検針' },
      { zh: '動力電池健康度 (SOH) 追蹤', en: 'Battery state-of-health tracking', ja: '蓄電池SOH劣化診断・履歴管理' },
    ],
    image: '/images/seniors/innovation-2023-demo.webp',
  },
  {
    id: 'metrology',
    icon: '🔬',
    title: {
      zh: '電子量測儀器系統與半導體薄膜物性分析',
      en: 'Electronic Measurement Systems & Thin-Film Characterization',
      ja: '電子計測システムと半導体薄膜物性解析',
    },
    summary: {
      zh: '發揮實驗室「電子量測」核心能量：自主研發自動化光學檢測治具、微探針接面接觸電阻分析與聯網型半導體變溫電性 (I-V-T) 量測機台。',
      en: 'Leveraging our core metrology strengths: custom-built automated optical inspection fixtures, micro-probe contact resistance metrology, and connected semiconductor temperature-dependent (I-V-T) test benches.',
      ja: '「電子計測」の中核技術を発揮：自作自動光学検査治具、マイクロプローブ接触抵抗解析、IoT対応半導体変温電気特性（I-V-T）計測装置を独自開発。',
    },
    points: [
      {
        zh: '非接觸式光學膜厚計量：利用鍺超薄膜反射光學相位與色度學原理，自主設計自動化治具建立「光學反射色度－奈米膜厚」快速精確預測模型',
        en: 'Non-contact optical film metrology: custom automated fixture predicting nanometer-scale film thickness from optical reflection phase and chromaticity of Ge ultra-thin films',
        ja: '非接触光学膜厚計測：Ge超薄膜の反射光位相・色度相関に基づき、自動治具を用いた「反射色度－ナノ膜厚」高速予測モデルを独自構築',
      },
      {
        zh: '微探針電性接面量測：利用圓形傳輸線模型 (CTLM) 搭配微探針平台，精確量測並萃取複合金屬與氧化釩 (VOx) 接面之微歐姆級比接觸電阻',
        en: 'Micro-probe contact metrology: extracting micro-ohm specific contact resistance of composite metal/VOx interfaces via circular transmission line model (CTLM) on probe stations',
        ja: 'マイクロプローブ接触電気計測：円形伝送線路モデル（CTLM）とプローブステーションを用い、複合金属-酸化バナジウム接合面の比接触抵抗を精密計測',
      },
      {
        zh: '自製聯網變溫電性儀 (I-V-T)：整合微控制器與自動化數據擷取，在變溫受控環境下連續掃描半導體載子傳輸行為與電阻溫度係數 (TCR)',
        en: 'Custom connected temperature-dependent I-V analyzer: integrating microcontrollers and automated DAQ to scan carrier transport and TCR under controlled thermal environments',
        ja: '自作IoT対応変温電気特性装置（I-V-T）：マイコンと自動データ収集を統合し、温度制御環境下で半導体キャリア輸送と抵抗温度係数（TCR）を自動解析',
      },
      {
        zh: '熱流物理量測與微感測晶片：自主組建薄膜熱擴散係數自動測試機台，以及應用於微量酸液導電度量測之 IDT 叉指微電極感測系統',
        en: 'Thermal metrology & micro-sensing: custom test bench for thin-film thermal diffusivity and interdigital transducer (IDT) sensors for liquid electrical conductivity',
        ja: '熱物性計測と微小センサー：薄膜熱拡散率自動計測装置の自作構築、および希薄酸液の導電率精密測定用IDT微小電極センサーシステム',
      },
    ],
    theses: [
      {
        title: { zh: '以鍺超薄膜之色度與相位預測超薄膜之厚度', en: 'Thickness Prediction from Chromaticity and Phase of Ge Ultra-Thin Films', ja: 'Ge超薄膜の色度と位相による超薄膜膜厚予測' },
        student: { zh: '張文龍 碩士', en: 'Wen-Long Zhang, M.S.', ja: '張文龍 修士' },
        year: 2019,
      },
      {
        title: { zh: '設計一自動治具系統建立超薄膜厚度與色度關係曲線', en: 'Automated Fixture System for Ultra-Thin Film Thickness-Chromaticity Curves', ja: '超薄膜の膜厚と色度相関曲線作成用自動治具システムの開発' },
        student: { zh: '黃逵鈿 碩士', en: 'Kui-Dian Huang, M.S.', ja: '黃逵鈿 修士' },
        year: 2020,
      },
      {
        title: { zh: '以CTLM法評估複合金屬-氧化釩接面的特徵接觸電阻研究', en: 'Specific Contact Resistance of Metal-VOx Interfaces Evaluated by CTLM', ja: 'CTLM法による複合金属-酸化バナジウム接合面の比接触抵抗評価' },
        student: { zh: '傅聖樺 碩士', en: 'Sheng-Hua Fu, M.S.', ja: '傅聖樺 修士' },
        year: 2019,
      },
      {
        title: { zh: '低溫退火製程對釩與氧化釩接面特性研究', en: 'Low-Temperature Annealing Effects on V/VOx Junction Characteristics', ja: 'バナジウム・酸化バナジウム接合特性における低温アニールの影響' },
        student: { zh: '陳恒孝 碩士', en: 'Heng-Xiao Chen, M.S.', ja: '陳恒孝 修士' },
        year: 2021,
      },
      {
        title: { zh: '可攜式低成本聯網半導體變溫電性分析系統', en: 'Portable Low-Cost Connected Semiconductor Temperature-Dependent I-V Analyzer', ja: '可搬型低コストIoT対応半導体変温電気特性解析システム' },
        student: { zh: '朱囿儒 碩士', en: 'Yu-Ru Zhu, M.S.', ja: '朱囿儒 修士' },
        year: 2024,
      },
      {
        title: { zh: '建立一量測系統分析薄膜熱擴散係數研究', en: 'Measurement System for Thin-Film Thermal Diffusivity Analysis', ja: '薄膜熱拡散率解析用計測システムの構築' },
        student: { zh: '林篇吟 碩士', en: 'Pian-Yin Lin, M.S.', ja: '林篇吟 修士' },
        year: 2023,
      },
      {
        title: { zh: '應用於酸性稀釋溶液導電度量測的IDT感測系統', en: 'IDT Sensor System for Electrical Conductivity Measurement of Dilute Acidic Solutions', ja: '希薄酸性溶液の導電率計測用IDTセンサシステム' },
        student: { zh: '宋克南 碩士', en: 'Ke-Nan Song, M.S.', ja: '宋克南 修士' },
        year: 2022,
      },
    ],
    applications: [
      { zh: '半導體超薄膜光學非接觸線上檢驗', en: 'In-line non-contact thin film inspection', ja: '半導体超薄膜のインライン非接触検査' },
      { zh: '氧化釩微測輻射熱計 (Microbolometer)', en: 'VOx infrared microbolometers', ja: 'VOx赤外線マイクロボロメータ' },
      { zh: '微流體電化學水質監測晶片', en: 'Microfluidic electrochemical water chips', ja: 'マイクロ流体電気化学水質チップ' },
      { zh: '新材料變溫電氣特性快篩儀器', en: 'Temperature-dependent material screening', ja: '新素材変温電気特性迅速評価' },
    ],
    image: '/images/equipment/probe-station.webp',
  },
  {
    id: 'thermal',
    icon: '❄️',
    title: {
      zh: '先進熱管理與微通道散熱技術',
      en: 'Advanced Thermal Management & Microchannel Cooling',
      ja: '先端熱マネジメントとマイクロ流路冷却技術',
    },
    summary: {
      zh: '針對高功率密度光電元件與微處理器，研發高導熱低熱阻介面、微通道致冷器與主動式散熱熱流設計。',
      en: 'Thermal design for high-power-density optoelectronic devices and microprocessors, covering low-thermal-resistance interfaces, microchannel coolers, and active thermal management.',
      ja: '高出力光電子素子やマイクロプロセッサ向けに、低熱抵抗インターフェース、マイクロ流路クーラー、能動的放熱設計を開発。',
    },
    points: [
      {
        zh: '主動式散熱非金屬微通道致冷器 (Microchannel Coolers) 之熱傳分析、流道最佳化與低溫微接合',
        en: 'Thermal analysis, channel optimization, and low-temperature micro-bonding of active non-metallic microchannel coolers',
        ja: '能動的放熱非金属マイクロチャネルクーラーの熱伝達解析、流路最適化および低温接合' },
      {
        zh: '以鋁鍺 (Al-Ge) 薄膜研究銅質接合之微通道散熱特性與流道界面熱阻降低',
        en: 'Al-Ge thin films for copper microchannel bonding and interface thermal resistance minimization',
        ja: 'Al-Ge薄膜を用いた銅製接合マイクロチャネルの放熱特性と界面熱抵抗低減' },
      {
        zh: '高功率群聚 LED 模組之多重共軛熱傳分析，設計矩形流道中誘發噴流與渦旋的高效率散熱機制',
        en: 'Conjugate heat transfer analysis of high-power LED arrays with jet- and vortex-enhanced cooling in rectangular channels',
        ja: '高出力LEDアレイの共役熱伝達解析と、矩形流路内の噴流・渦による高効率放熱構造設計' },
      {
        zh: '微通道散熱結構結合致冷晶片 (TEC) 之精密閉迴路控溫與商品化熱電特性分析',
        en: 'Integration of microchannels with thermoelectric coolers (TEC) for precision closed-loop temperature control',
        ja: 'マイクロ流路とペルチェ素子（TEC）を統合した精密閉ループ温度制御と熱電特性解析' },
      {
        zh: '氮化鋁 (AlN) 高導熱薄膜沈積應用於高功率半導體散熱改善與接面溫度 (Tj) 預測模型',
        en: 'AlN high-thermal-conductivity films for power semiconductor cooling and junction temperature prediction models',
        ja: 'AlN高熱伝導薄膜による高出力半導体の放熱改善とジャンクション温度（Tj）予測モデル' },
    ],
    theses: [
      {
        title: { zh: '主動式散熱非金屬微通道致冷器之設計與製作', en: 'Design and Fabrication of Active Non-Metallic Microchannel Cooler', ja: '能動的放熱非金属マイクロチャネルクーラーの設計と製作' },
        student: { zh: '陳彥翔 碩士', en: 'Yen-Hsiang Chen, M.S.', ja: '陳彥翔 修士' },
        year: 2024,
      },
      {
        title: { zh: '以鋁鍺薄膜研究銅質接合之微通道的特性', en: 'Characteristics of Copper Microchannels Bonded with Al-Ge Thin Films', ja: 'Al-Ge薄膜による銅接合マイクロチャネルの特性評価' },
        student: { zh: '李鼎凱 碩士', en: 'Ding-Kai Li, M.S.', ja: '李鼎凱 修士' },
        year: 2017,
      },
      {
        title: { zh: '微通道致冷器應用於LED模組之散熱研究', en: 'Thermal Management of LED Modules Using Microchannel Coolers', ja: 'LEDモジュール向けマイクロチャネルクーラーの放熱研究' },
        student: { zh: '林鈺沛 碩士', en: 'Yu-Pei Lin, M.S.', ja: '林鈺沛 修士' },
        year: 2017,
      },
      {
        title: { zh: '批量生產LED在各種電流驅動下的接面溫度預測', en: 'Junction Temperature Prediction for Mass-Produced LEDs under Various Currents', ja: '量産LEDの各種駆動電流下におけるジャンクション温度予測' },
        student: { zh: '黃文良 碩士', en: 'Wen-Liang Huang, M.S.', ja: '黃文良 修士' },
        year: 2019,
      },
      {
        title: { zh: '氮化鋁薄膜用於高功率發光二極體散熱研究', en: 'AlN Thin Films for High-Power LED Heat Dissipation', ja: '高出力LED放熱用AlN薄膜の研究' },
        student: { zh: '蔡曜聰 碩士', en: 'Yao-Tsong Tsai, M.S.', ja: '蔡曜聰 修士' },
        year: 2011,
      },
      {
        title: { zh: '應用高導熱膜層於高功率發光二極體散熱效果之研究', en: 'High Thermal Conductivity Films for High-Power LED Heat Dissipation', ja: '高出力LEDにおける高熱伝導膜層の放熱効果に関する研究' },
        student: { zh: '莊顏聞 碩士', en: 'Yan-Wen Zhuang, M.S.', ja: '莊顏聞 修士' },
        year: 2010,
      },
    ],
    applications: [
      { zh: '車用功率半導體散熱模組', en: 'Automotive power semiconductor modules', ja: '車載パワー半導体冷却モジュール' },
      { zh: '高功率雷射與光學投影冷卻', en: 'High-power laser and projection cooling', ja: '高出力レーザー・プロジェクター冷却' },
      { zh: '高效能運算晶片級液冷系統', en: 'Chip-level HPC liquid cooling', ja: 'HPCチップレベル液冷システム' },
      { zh: '精密恆溫熱電控制裝置', en: 'Precision thermoelectric thermal control', ja: '精密恒温ペルチェ熱制御装置' },
    ],
    image: '/images/equipment/instruments-rack-card.webp',
  },
  {
    id: 'photovoltaics',
    icon: '☀️',
    title: {
      zh: '鈣鈦礦與次世代光伏綠能元件',
      en: 'Perovskite & Next-Generation Photovoltaics',
      ja: 'ペロブスカイトと次世代太陽電池',
    },
    summary: {
      zh: '探索鈣鈦礦、量子點與薄膜太陽能電池之受控退火製程、光電轉換效率提升與長期穩定性改善機制。',
      en: 'Exploring perovskite, quantum dot, and thin-film solar cell processing, photovoltaic conversion efficiency enhancement, and long-term stability mechanisms.',
      ja: 'ペロブスカイト、量子ドット、薄膜太陽電池の精密アニール工程、光電変換効率の向上および長期安定化機構の解明。',
    },
    points: [
      {
        zh: '氬氣環境快速熱退火 (RTA) 優化摻雜 CsPbI₃ 量子點之 MAPbI₃ 鈣鈦礦薄膜，大幅降低晶界缺陷並抑制退化',
        en: 'Rapid thermal annealing (RTA) in Ar optimizing CsPbI₃-QD-doped MAPbI₃ perovskite films, suppressing grain-boundary defects and degradation',
        ja: 'Ar雰囲気RTAによるCsPbI₃量子点添加MAPbI₃ペロブスカイト薄膜の最適化、粒界欠陥の低減と劣化抑制',
      },
      {
        zh: '電漿輔助緊密空間昇華法 (PACSS) 優化 CdS/CdTe 異質接面薄膜太陽能電池沉積',
        en: 'Plasma-assisted close-spaced sublimation (PACSS) for high-quality CdS/CdTe thin-film solar cells',
        ja: 'プラズマ支援近接昇華法（PACSS）による高品質CdS/CdTe薄膜太陽電池の成膜最適化',
      },
      {
        zh: '聚光型太陽能集光系統 (CPV) 效率分析與光學增透膜研製',
        en: 'Efficiency analysis of concentrated photovoltaics (CPV) and anti-reflective optical coatings',
        ja: '集光型太陽光発電（CPV）の効率解析および反射防止光薄膜の開発',
      },
      {
        zh: '氮化鋁鎵/氮化鎵 (AlGaN/GaN) 二維異質接面結構與高電子遷移率電晶體 (HEMT) 製程',
        en: 'AlGaN/GaN 2D heterostructures and high electron mobility transistor (HEMT) fabrication',
        ja: 'AlGaN/GaN 2次元ヘテロ接合構造と高電子移動度トランジスタ（HEMT）の作製技術',
      },
    ],
    theses: [
      {
        title: { zh: '硫化鎘薄膜應用於太陽電池之研究', en: 'Cadmium Sulfide Thin Films for Solar Cell Applications', ja: '太陽電池応用向け硫化カドミウム薄膜の研究' },
        student: { zh: '廖政峰 碩士', en: 'Zheng-Feng Liao, M.S.', ja: '廖政峰 修士' },
        year: 2009,
      },
      {
        title: { zh: '聚光型太陽能集光系統之效率分析與研究', en: 'Efficiency Analysis of Concentrated Photovoltaic Systems', ja: '集光型太陽光集光システムの効率解析と研究' },
        student: { zh: '蔡銘濃 碩士', en: 'Ming-Nong Tsai, M.S.', ja: '蔡銘濃 修士' },
        year: 2011,
      },
      {
        title: { zh: '光學增透膜應用於發光二極體與太陽電池封裝效率之研究', en: 'Anti-Reflective Coatings for LED and Solar Cell Efficiency Enhancement', ja: 'LEDおよび太陽電池封止効率向上のための反射防止膜の研究' },
        student: { zh: '黃文昱 碩士', en: 'Wen-Yu Huang, M.S.', ja: '黃文昱 修士' },
        year: 2012,
      },
      {
        title: { zh: '氮化鋁鎵/氮化鎵二維異質接面結構之研究', en: 'AlGaN/GaN 2D Heterojunction Structures', ja: 'AlGaN/GaN 2次元ヘテロ接合構造の研究' },
        student: { zh: '蔡雲棠 碩士', en: 'Yun-Tang Tsai, M.S.', ja: '蔡雲棠 修士' },
        year: 2013,
      },
      {
        title: { zh: '氮化鋁鎵/氮化鎵高電子遷移率電晶體之製作與研究', en: 'Fabrication of AlGaN/GaN High Electron Mobility Transistors', ja: 'AlGaN/GaN 高電子移動度トランジスタの作製と研究' },
        student: { zh: '劉冠岐 碩士', en: 'Guan-Qi Liu, M.S.', ja: '劉冠岐 修士' },
        year: 2010,
      },
    ],
    applications: [
      { zh: '鈣鈦礦次世代太陽能電池', en: 'Next-generation perovskite solar cells', ja: 'ペロブスカイト次世代太陽電池' },
      { zh: '微型光伏自供電物聯網模組', en: 'Self-powered indoor PV IoT sensors', ja: '自立電源型室内光発電IoTセンサー' },
      { zh: '高聚光太陽能集光發電', en: 'Concentrated solar energy systems', ja: '高集光型太陽光発電' },
      { zh: '寬能隙功率半導體元件', en: 'Wide-bandgap power semiconductor devices', ja: 'ワイドバンドギャップパワーデバイス' },
    ],
    image: '/images/research/perovskite.webp',
  },
];
