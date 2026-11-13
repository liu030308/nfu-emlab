// 研究領域（全面依據歷屆畢業碩士生學位論文與學術成果深化更新）
// 100% 依據「臺灣博碩士論文知識加值系統」(NDLTD) 陳文瑞教授指導之歷屆學位論文核實
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
      zh: '高功率 LED 覆晶封裝與晶片微接合技術',
      en: 'High-Power LED Flip-Chip Packaging & Micro-Bonding',
      ja: '高出力LEDフリップチップ実装とマイクロ接合技術',
    },
    summary: {
      zh: '聚焦高功率與車用光電元件：研發無鉛暫態液相鍵合 (TLP)、金錫 (Au-Sn) 共晶固晶載板與螢光粉封裝防沉澱技術，提升接合抗疲勞度與光色均勻性。',
      en: 'Focusing on high-power and automotive optoelectronics: developing lead-free transient liquid phase (TLP) bonding, Au-Sn eutectic submounts, and anti-settling phosphor encapsulation for high thermal fatigue resistance and chromatic uniformity.',
      ja: '高出力・車載光電子素子に注力：鉛フリー過渡液相接合（TLP）、Au-Sn共晶実装基板および蛍光体沈降防止封止技術を開発し、耐熱疲労性と発光均一性を向上。',
    },
    points: [
      {
        zh: '無鉛暫態液相鍵合 (TLP) 技術：研發鋁鍺錫 (Al-Ge-Sn) 與銦合金微接合層，解決高功率晶片界面高溫疲勞與空洞率問題',
        en: 'Lead-free transient liquid phase (TLP) bonding: Al-Ge-Sn and In alloys to resolve thermal fatigue and voiding in high-power chip joints',
        ja: '鉛フリー過渡液相接合（TLP）技術：Al-Ge-SnおよびIn合金接合層により、高出力素子接合部の熱疲労とボイド発生を抑制',
      },
      {
        zh: '覆晶固晶載板製程：以鋅置換法製備鋁基金錫 (Au-Sn) 共晶微焊點，並整合碳化矽 (SiC) 與氮化鋁 (AlN) 應力緩衝層',
        en: 'Flip-chip bonding on submounts: zincate-processed Al-based Au-Sn eutectic micro-joints with SiC and AlN stress buffer layers',
        ja: 'フリップチップ実装基板工程：ジンケート処理によるAl基Au-Sn共晶微小はんだ接合と、SiC/AlN応力緩衝層の最適化',
      },
      {
        zh: '高散熱封裝副載具開發：圖案化矽副載具 (Silicon Submount) 與高平坦度玻璃覆晶載板微電極線路佈局',
        en: 'High-thermal-dissipation carriers: patterned silicon submounts and planar glass flip-chip substrate micro-electrode routing',
        ja: '高放熱サブマウント開発：パターニングSiサブマウントおよび高平坦度ガラス基板微細電極配線レイアウト',
      },
      {
        zh: '白光 LED 螢光膠體工程：螢光粉點膠抗沉澱技術、連續電泳沉積 (EPD) 與精密壓模封裝，消除黃圈現象以確保光色高度均勻',
        en: 'White LED phosphor encapsulation: anti-settling dispensing, continuous electrophoretic deposition (EPD), and precision molding to eliminate yellow-ring artifacts for uniform emission',
        ja: '白色LED蛍光体封止技術：蛍光体沈降防止ディスペンス、連続電気泳動堆積（EPD）、精密モールドにより黄色リングを抑制し発光均一性を向上',
      },
    ],
    theses: [
      {
        title: { zh: '鋁鍺銦錫暫態液相鍵結接合面之結構分析', en: 'Structural analysis of AlGeInSn bonded joints prepared by transient liquid phase bonding', ja: '鋁鍺銦錫暫態液相鍵結接合面之結構分析' },
        student: { zh: '林彥竹 碩士', en: '林彥竹, M.S.', ja: '林彥竹 修士' },
        year: 2015,
      },
      {
        title: { zh: '以鋁鍺錫暫態液相鍵合應用於低溫覆晶封裝之研究', en: 'The Study of The Low Temperature Flip-Chip Package by Applying AlGeSn-Based Transient Liquid Phase Bonding Technique', ja: '以鋁鍺錫暫態液相鍵合應用於低溫覆晶封裝之研究' },
        student: { zh: '謝佳真 碩士', en: '謝佳真, M.S.', ja: '謝佳真 修士' },
        year: 2013,
      },
      {
        title: { zh: '以鋅置換法製備鋁基金錫共晶堆疊層及應用於覆晶封裝之探討', en: 'AuSn Eutectic Stack Layer on Al substrate Used Zincating and Discussion of Flip-Chip package', ja: '以鋅置換法製備鋁基金錫共晶堆疊層及應用於覆晶封裝之探討' },
        student: { zh: '李嘉家 碩士', en: '李嘉家, M.S.', ja: '李嘉家 修士' },
        year: 2012,
      },
      {
        title: { zh: '鋁鍺銅鋅錫合金應用於玻璃覆晶載板', en: 'Application of Al-Ge-Cu-Zn-Sn Flip-Chip Substrate for Glass', ja: '鋁鍺銅鋅錫合金應用於玻璃覆晶載板' },
        student: { zh: '劉冠岐 碩士', en: '劉冠岐, M.S.', ja: '劉冠岐 修士' },
        year: 2014,
      },
      {
        title: { zh: '提升良率之螢光粉點膠抗沉澱技術', en: 'Anti Precipitation Technique of Phosphor Pasting for Promotion of Yield', ja: '提升良率之螢光粉點膠抗沉澱技術' },
        student: { zh: '蔡雲棠 碩士', en: '蔡雲棠, M.S.', ja: '蔡雲棠 修士' },
        year: 2014,
      },
      {
        title: { zh: '應用電泳連續製程技術於高功率白光發光二極體 之開發', en: 'Development of high power white LEDs by adopting the continuously electrophoretic process technique', ja: '應用電泳連續製程技術於高功率白光發光二極體 之開發' },
        student: { zh: '楊程宇 碩士', en: '楊程宇, M.S.', ja: '楊程宇 修士' },
        year: 2010,
      },
      {
        title: { zh: '量產發光二極體封裝製程技術之改善', en: 'Improvement of the packaging process and technique for the LED mass production', ja: '量產發光二極體封裝製程技術之改善' },
        student: { zh: '傅聖樺 碩士', en: '傅聖樺, M.S.', ja: '傅聖樺 修士' },
        year: 2020,
      },
      {
        title: { zh: '高功率發光二極體之覆晶圖案化矽副載具與鋁矽組合式副載具之開發', en: 'The development of the flip chip patterned silicon and the integrated silicon-aluminium submounts for high power LEDs', ja: '高功率發光二極體之覆晶圖案化矽副載具與鋁矽組合式副載具之開發' },
        student: { zh: '陳泰均 碩士', en: '陳泰均, M.S.', ja: '陳泰均 修士' },
        year: 2011,
      },
    ],
    applications: [
      { zh: '高功率 LED 車燈照明模組', en: 'High-power automotive LED lamps', ja: '高出力車載LED照明モジュール' },
      { zh: '微型投影機光學引擎封裝', en: 'Pico-projector optical engine packaging', ja: '小型プロジェクター光学系封止' },
      { zh: 'Mini / Micro LED 顯示固晶封裝', en: 'Mini/Micro LED display packaging', ja: 'Mini/Micro LEDディスプレイ実装' },
      { zh: '高可靠度晶片固晶載板', en: 'High-reliability flip-chip substrates', ja: '高信頼性フリップチップ基板' },
    ],
    image: '/images/equipment/vacuum-evaporation.webp',
  },
  {
    id: 'aiot',
    icon: '🤖',
    title: {
      zh: '智慧物聯網 (AIoT) 與工業光電感測系統',
      en: 'Smart AIoT & Industrial Sensing Systems',
      ja: 'スマートAIoTと産業用センシングシステム',
    },
    summary: {
      zh: '整合嵌入式微控制器、邊緣影像辨識與物聯網雲端技術，開發金屬加工切削液線上品質檢測、智慧讀錶、自供電長照輔具與環境監控系統。',
      en: 'Integrating embedded microcontrollers, edge vision, and IoT cloud platforms: developing real-time metalworking fluid quality monitoring, smart utility metering, self-powered rehabilitation aids, and telemetry.',
      ja: '組込みマイコン、エッジ画像認識、IoTクラウドを統合：金属加工切削油のリアルタイム品質監視、スマート自動検針、自己発電型リハビリ支援および環境監視システムを開発。',
    },
    points: [
      {
        zh: '落球法切削液濃度感測器：結合微控制器與自動化機構，精準量測金屬加工切削液之黏度與油水濃度（獲 2023 全國產學創新實作競賽佳作）',
        en: 'Falling-ball cutting fluid sensor: integrating MCUs and automated fixtures for precise viscosity and oil concentration telemetry (2023 National Competition Award)',
        ja: '落球法切削油濃度センサー：マイコンと自動化機構を融合し、金属加工液の粘度と油水濃度を精密測定（2023年全国産学コンテスト佳作）',
      },
      {
        zh: '邊緣 AI 影像辨識與光學穿透檢測：微控制器結合 YOLO 物件偵測與光穿透率感測，即時判別加工液髒污與油水乳化劣化狀態',
        en: 'Edge AI vision & optical inspection: MCUs with YOLO object detection and optical transmittance to monitor fluid contamination and emulsification in real time',
        ja: 'エッジAI画像認識と光学透過検査：マイコン、YOLO物体認識、光透過率測定により加工液の汚濁と乳化劣化状態をリアルタイム判定',
      },
      {
        zh: '邊緣讀錶與雲端監控：Raspberry Pi 結合 OpenCV、OCR 文字辨識與 IoT 物聯網，實現傳統水錶與指針儀表自動即時數位化抄表',
        en: 'Edge meter reading & IoT telemetry: Raspberry Pi, OpenCV, OCR, and IoT cloud for automated real-time digitization of analog utility meters',
        ja: 'エッジ自動検針とクラウド監視：Raspberry Pi・OpenCV・OCR文字認識とIoT連携による従来型水道メーターの自動デジタル検針',
      },
      {
        zh: '動能發電與智慧照護輔具：踏板發電機構結合感測晶片與智慧長照復健系統（獲 2024 手工具創新設計獎），以及手機遠距遙控電動輪椅',
        en: 'Kinetic harvesting & smart healthcare aids: pedal power generation integrated with senior rehabilitation telemetry (2024 Innovation Award) and mobile-controlled wheelchairs',
        ja: '自己発電とスマート介護機器：ペダル発電と高齢者リハビリデータ計測の融合（2024年革新デザイン賞）、およびスマホ遠隔操作電動車椅子',
      },
    ],
    theses: [
      {
        title: { zh: '踏板發電在智慧老年健康復健系統的應用', en: 'Applying Pedal Power Generation in Smart Elderly Health Rehabilitation System', ja: '踏板發電在智慧老年健康復健系統的應用' },
        student: { zh: '朱囿儒 碩士', en: '朱囿儒, M.S.', ja: '朱囿儒 修士' },
        year: 2025,
      },
      {
        title: { zh: '金屬加工液油濃度量測: 採用落球法的感測器系統', en: 'Metalworking Fluids Oil Concentration Measurement: A Sensor System Utilizing the Falling Ball Method', ja: '金屬加工液油濃度量測: 採用落球法的感測器系統' },
        student: { zh: '林揚恩 碩士', en: '林揚恩, M.S.', ja: '林揚恩 修士' },
        year: 2025,
      },
      {
        title: { zh: '基於 Raspberry Pi 的傳統水錶數字自動讀錶系統: OpenCV、OCR 和 IoT 的整合', en: 'Traditional Water Meter Numerical Automatic Reading System Based on Raspberry Pi: Integration of OpenCV, OCR, and IoT', ja: '基於 Raspberry Pi 的傳統水錶數字自動讀錶系統: OpenCV、OCR 和 IoT 的整合' },
        student: { zh: '陳靖中 碩士', en: '陳靖中, M.S.', ja: '陳靖中 修士' },
        year: 2025,
      },
      {
        title: { zh: '基於微控制器和YOLO目標檢測開發的切削液濃度量測系統', en: 'The concentration measurement system for metal working fluid based on microcontroller and YOLO object detection', ja: '基於微控制器和YOLO目標檢測開發的切削液濃度量測系統' },
        student: { zh: '林篇吟 碩士', en: '林篇吟, M.S.', ja: '林篇吟 修士' },
        year: 2025,
      },
      {
        title: { zh: '基於影像辨識技術的智慧吸塵器系統設計', en: 'Design of an Intelligent Vacuum Cleaner System Based on Image Recognition Technology', ja: '基於影像辨識技術的智慧吸塵器系統設計' },
        student: { zh: '林學澤 碩士', en: '林學澤, M.S.', ja: '林學澤 修士' },
        year: 2025,
      },
      {
        title: { zh: '切削液光學品質感測器的研究', en: 'The Study of Optical Sensor for Sensing the Quality of Cutting Fluids', ja: '切削液光學品質感測器的研究' },
        student: { zh: '施富棋 碩士', en: '施富棋, M.S.', ja: '施富棋 修士' },
        year: 2022,
      },
      {
        title: { zh: '具備雲端功能之手機遙控電動輪椅', en: 'Mobile phone remote control electric wheelchair with cloud function', ja: '具備雲端功能之手機遙控電動輪椅' },
        student: { zh: '呂亞杰 碩士', en: '呂亞杰, M.S.', ja: '呂亞杰 修士' },
        year: 2019,
      },
      {
        title: { zh: 'IOT水位監測裝置與警示系統', en: 'An IOT-based water level monitoring device with warning system', ja: 'IOT水位監測裝置與警示系統' },
        student: { zh: '侯統淵 碩士', en: '侯統淵, M.S.', ja: '侯統淵 修士' },
        year: 2019,
      },
    ],
    applications: [
      { zh: 'CNC 工具機切削液即時監控', en: 'Real-time CNC cutting fluid monitoring', ja: 'CNC工作機械切削液リアルタイム監視' },
      { zh: '智慧水錶／瓦斯錶自動抄表', en: 'Automated AMR smart utility metering', ja: 'スマートメーター遠隔自動検針' },
      { zh: '銀髮綠能自供電復健輔具', en: 'Self-powered senior rehab devices', ja: '自己発電型高齢者リハビリ機器' },
      { zh: '智慧工廠設備預知保養', en: 'Smart factory predictive maintenance', ja: 'スマート工場設備予知保全' },
    ],
    image: '/images/seniors/innovation-2023-demo.webp',
  },
  {
    id: 'metrology',
    icon: '🔬',
    title: {
      zh: '半導體薄膜物性、氧化釩與微量測系統',
      en: 'Semiconductor Thin-Film Metrology & VOx Interface Physics',
      ja: '半導体薄膜物性・酸化バナジウムと微細計測システム',
    },
    summary: {
      zh: '發揮實驗室「電子量測」核心能量：研發非接觸式超薄膜光學厚度預測模型、微探針接面接觸電阻分析與自製聯網變溫電性 (I-V-T) 量測機台。',
      en: 'Leveraging our core metrology strengths: non-contact optical thin-film thickness prediction models, micro-probe contact resistance analysis, and connected temperature-dependent (I-V-T) test benches.',
      ja: '「電子計測」の中核技術を発揮：非接触超薄膜光学的膜厚予測モデル、マイクロプローブ接触抵抗解析、IoT対応変温電気特性（I-V-T）計測装置を独自開発。',
    },
    points: [
      {
        zh: '非接觸光學薄膜計量：利用鍺 (Ge) 超薄膜之反射光色度學 (CIE Lab) 與橢圓偏光相位，自製自動化治具建立「光學反射色度－奈米膜厚」快速精確預測系統',
        en: 'Non-contact optical film metrology: custom automated fixture predicting nanometer thickness from reflection CIE Lab chromaticity and phase shifts of Ge ultra-thin films',
        ja: '非接触光学薄膜計測：Ge超薄膜の反射光色度座標（CIE Lab）と位相関係に基づき、自動治具を用いた「反射色度－ナノ膜厚」高速予測システムを確立',
      },
      {
        zh: '接面特徵接觸電阻微量測：利用圓形傳輸線模型 (CTLM) 搭配微探針量測平台，精確量測與萃取複合金屬與氧化釩 (VOx) 接面之比接觸電阻與低溫退火特性',
        en: 'Contact resistance metrology: extracting specific contact resistance and annealing characteristics of composite metal/VOx interfaces via CTLM and micro-probe stations',
        ja: '界面接触抵抗微細計測：円形伝送線路モデル（CTLM）とプローブステーションを用い、複合金属-酸化バナジウム接合面の比接触抵抗とアニール特性を精密評価',
      },
      {
        zh: '自製聯網變溫電性儀 (I-V-T)：整合低成本微控制器與遠端數據擷取，在變溫受控環境下自動連續掃描半導體載子傳輸行為與電阻溫度係數 (TCR)',
        en: 'Custom connected temperature-dependent I-V analyzer: integrating microcontrollers and automated DAQ to scan carrier transport and TCR under controlled thermal environments',
        ja: '自作IoT対応変温電気特性装置（I-V-T）：マイコンと自動データ収集を統合し、温度制御環境下で半導体キャリア輸送と抵抗温度係数（TCR）を自動解析',
      },
      {
        zh: '物性量測與微感測晶片：自主組建薄膜熱擴散係數自動測試系統，以及應用於稀釋酸性溶液導電度精準量測之 IDT 叉指微電極感測器',
        en: 'Physical electronics & micro-sensors: custom test bench for thin-film thermal diffusivity and interdigital transducer (IDT) sensors for liquid electrical conductivity',
        ja: '物性計測と微小センサー：薄膜熱拡散率自動計測装置の自作構築、および希薄酸性溶液の導電率精密測定用IDT微小電極センサーシステム',
      },
    ],
    theses: [
      {
        title: { zh: '可攜式低成本聯網半導體變溫電性分析系統', en: 'Portable low-cost networked semiconductor temperature-dependent electrical property analysis system', ja: '可攜式低成本聯網半導體變溫電性分析系統' },
        student: { zh: '宋克南 碩士', en: '宋克南, M.S.', ja: '宋克南 修士' },
        year: 2024,
      },
      {
        title: { zh: '建立一量測系統分析薄膜熱擴散係數研究', en: 'Design a Measurement System for Measure Thermal Diffusivity of Thin Films', ja: '建立一量測系統分析薄膜熱擴散係數研究' },
        student: { zh: '陳彰 碩士', en: '陳彰, M.S.', ja: '陳彰 修士' },
        year: 2022,
      },
      {
        title: { zh: '應用於酸性稀釋溶液導電度量測的IDT感測系統', en: 'The IDT sensing system applied to measure the conductivity of diluted acid solution', ja: '應用於酸性稀釋溶液導電度量測的IDT感測系統' },
        student: { zh: '蕭宇良 碩士', en: '蕭宇良, M.S.', ja: '蕭宇良 修士' },
        year: 2022,
      },
      {
        title: { zh: '低溫退火製程對釩與氧化釩接面特性研究', en: 'Characterization of the Contact of Vanadium and Vanadium Oxide by Low Temperature Annealing Process', ja: '低溫退火製程對釩與氧化釩接面特性研究' },
        student: { zh: '林鈺沛 碩士', en: '林鈺沛, M.S.', ja: '林鈺沛 修士' },
        year: 2020,
      },
      {
        title: { zh: '設計一自動治具系統建立超薄膜厚度與色度關係曲線', en: 'Design an Automatic Fixture System for Establishing the Relationship between the Thickness and Chromaticity of Ultra-thin Film', ja: '設計一自動治具系統建立超薄膜厚度與色度關係曲線' },
        student: { zh: '陳恒孝 碩士', en: '陳恒孝, M.S.', ja: '陳恒孝 修士' },
        year: 2020,
      },
      {
        title: { zh: '以鍺超薄膜之色度與相位預測超薄膜之厚度', en: 'Predicting the Thickness of Ultra-thin Films by the Chromaticity and Phase of the Germanium Ultra-thin Film', ja: '以鍺超薄膜之色度與相位預測超薄膜之厚度' },
        student: { zh: '張文龍 碩士', en: '張文龍, M.S.', ja: '張文龍 修士' },
        year: 2019,
      },
      {
        title: { zh: '以CTLM法評估複合金屬-氧化釩接面的特徵接觸電阻研究', en: 'Study on the Specific Contact Resistivity of the Composite Metal-VOx Interface Evaluated by Using CTLM method', ja: '以CTLM法評估複合金屬-氧化釩接面的特徵接觸電阻研究' },
        student: { zh: '王紹錚 碩士', en: '王紹錚, M.S.', ja: '王紹錚 修士' },
        year: 2019,
      },
      {
        title: { zh: '鍺超薄膜的厚度與色度關係研究', en: 'Study on Chromaticity Related to Thickness of Germanium Ultra-thin Film', ja: '鍺超薄膜的厚度與色度關係研究' },
        student: { zh: '温宛頤 碩士', en: '温宛頤, M.S.', ja: '温宛頤 修士' },
        year: 2018,
      },
    ],
    applications: [
      { zh: '半導體晶圓超薄膜線上非接觸厚度快檢', en: 'In-line non-contact wafer thin film inspection', ja: '半導体ウエハ超薄膜のインライン非接触迅速検査' },
      { zh: '氧化釩 (VOx) 紅外線微測輻射熱計', en: 'VOx infrared microbolometers', ja: 'VOx赤外線マイクロボロメータ' },
      { zh: '新材料變溫電氣特性快篩儀器', en: 'Temperature-dependent material screening', ja: '新素材変温電気特性迅速評価' },
      { zh: '微量化學液體導電度自動監測', en: 'Automated microfluidic conductivity monitoring', ja: '微量化学液体導電率の自動モニタリング' },
    ],
    image: '/images/equipment/probe-station.webp',
  },
  {
    id: 'thermal',
    icon: '❄️',
    title: {
      zh: '先進熱管理、微通道與高功率散熱技術',
      en: 'Advanced Thermal Management & Microchannel Cooling',
      ja: '先端熱マネジメントとマイクロ流路放熱技術',
    },
    summary: {
      zh: '針對高功率光電元件與微處理器熱瓶頸：研發微通道致冷器、銅質微流道接合、致冷晶片 (TEC) 熱電控溫與高導熱薄膜散熱機制。',
      en: 'Addressing thermal bottlenecks in power optoelectronics and microprocessors: developing microchannel coolers, bonded copper fluid channels, TEC active thermoelectric cooling, and high-thermal-conductivity films.',
      ja: '高出力光電子素子やプロセッサの放熱限界を克服：マイクロチャネルクーラー、銅流路接合、ペルチェ素子（TEC）熱電温調、高熱伝導薄膜放熱技術を開発。',
    },
    points: [
      {
        zh: '主動式散熱微通道致冷器：設計微通道散熱流道結構，應用於高功率 LED 模組之熱流共軛分析與高效率降溫機制',
        en: 'Active microchannel coolers: designing fluidic microchannel architectures for conjugate thermal dissipation in high-power LED modules',
        ja: '能動的放熱マイクロチャネルクーラー：高出力LEDモジュール向け微細流路構造の設計と共役熱伝達解析による高効率放熱',
      },
      {
        zh: '銅質接合微流道與界面熱阻：以鋁鍺 (Al-Ge) 薄膜研究銅質金屬接合之微通道散熱特性，有效降低接合界面熱阻',
        en: 'Copper microchannels with low interface resistance: Al-Ge thin films for copper bonding to reduce interface thermal contact resistance',
        ja: '銅接合マイクロ流路と界面熱抵抗：Al-Ge薄膜による銅金属接合マイクロ流路の放熱特性評価と界面熱抵抗低減',
      },
      {
        zh: '接面溫度 (Tj) 預測與熱電控制：建立量產 LED 在各種驅動電流下的接面溫度精確預測模型，並結合致冷晶片 (TEC) 之精密閉迴路熱電控溫',
        en: 'Junction temperature (Tj) prediction & TEC control: precise thermal models under varying drive currents, paired with TEC thermoelectric closed-loop cooling',
        ja: 'ジャンクション温度（Tj）予測と熱電制御：各種駆動電流下における量産LEDのジャンクション温度予測モデル確立とペルチェ素子精密閉ループ制御',
      },
      {
        zh: '高導熱薄膜散熱技術：研發氮化鋁 (AlN) 高導熱薄膜沈積與電熱分離散熱設計，應用於 LED 投射光源與節能球泡燈',
        en: 'High-thermal-conductivity film dissipation: AlN thin-film deposition and electro-thermal separation for LED projection lamps and bulbs',
        ja: '高熱伝導薄膜放熱技術：AlN高熱伝導膜の成膜と電熱分離放熱設計により、LED投光器および省エネ電球の放熱を向上',
      },
    ],
    theses: [
      {
        title: { zh: '批量生產LED在各種電流驅動下的接面溫度預測', en: 'Prediction of Junction Temperature for LED Operated at Various Current for Mass-production.', ja: '批量生產LED在各種電流驅動下的接面溫度預測' },
        student: { zh: '游季芸 碩士', en: '游季芸, M.S.', ja: '游季芸 修士' },
        year: 2019,
      },
      {
        title: { zh: '以鋁鍺薄膜研究銅質接合之微通道的特性', en: 'Study on the Properties of Microchannels with Copper Bonded by Al-Ge Thin Films', ja: '以鋁鍺薄膜研究銅質接合之微通道的特性' },
        student: { zh: '李志文 碩士', en: '李志文, M.S.', ja: '李志文 修士' },
        year: 2017,
      },
      {
        title: { zh: '微通道致冷器應用於LED模組之散熱研究', en: 'Applying microchannel cooler to study the heat dissipation of the LED module', ja: '微通道致冷器應用於LED模組之散熱研究' },
        student: { zh: '彭維奕 碩士', en: '彭維奕, M.S.', ja: '彭維奕 修士' },
        year: 2017,
      },
      {
        title: { zh: '致冷晶片商品化特性研究', en: 'Research of TE Cooler Commercialization', ja: '致冷晶片商品化特性研究' },
        student: { zh: '黃源億 碩士', en: '黃源億, M.S.', ja: '黃源億 修士' },
        year: 2016,
      },
      {
        title: { zh: '主動式散熱LED塑膠球泡燈', en: 'Plastic LED bulb with active heat spreading', ja: '主動式散熱LED塑膠球泡燈' },
        student: { zh: '莊紫琳 碩士', en: '莊紫琳, M.S.', ja: '莊紫琳 修士' },
        year: 2016,
      },
      {
        title: { zh: '電熱分離之LED投射光源模組開發', en: 'Development of the LED Injecting Modules Based on the Thermal-Electric Separation', ja: '電熱分離之LED投射光源模組開發' },
        student: { zh: '陳珮真 碩士', en: '陳珮真, M.S.', ja: '陳珮真 修士' },
        year: 2012,
      },
      {
        title: { zh: '氮化鋁薄膜用於高功率發光二極體散熱研究', en: 'Study of AlN Thin Films for High-Power Light Emitting diode by High Heat Conduction Layer', ja: '氮化鋁薄膜用於高功率發光二極體散熱研究' },
        student: { zh: '彭正宏 碩士', en: '彭正宏, M.S.', ja: '彭正宏 修士' },
        year: 2011,
      },
      {
        title: { zh: '應用高導熱膜層於高功率發光二極體散熱效果之研究', en: 'Study of heat transfer effect of high power LEDs by high heat conduction layer', ja: '應用高導熱膜層於高功率發光二極體散熱效果之研究' },
        student: { zh: '江岳霖 碩士', en: '江岳霖, M.S.', ja: '江岳霖 修士' },
        year: 2010,
      },
    ],
    applications: [
      { zh: '車用功率半導體散熱模組', en: 'Automotive power semiconductor modules', ja: '車載パワー半導体冷却モジュール' },
      { zh: '高功率雷射與光學投影冷卻', en: 'High-power laser and projection cooling', ja: '高出力レーザー・プロジェクター冷却' },
      { zh: '高效能晶片微通道液冷技術', en: 'Chip-level microchannel liquid cooling', ja: 'チップレベルマイクロ流路液冷システム' },
      { zh: '精密恆溫熱電控制裝置', en: 'Precision thermoelectric thermal control', ja: '精密恒温ペルチェ熱制御装置' },
    ],
    image: '/images/equipment/instruments-rack-card.webp',
  },
  {
    id: 'optics',
    icon: '🌈',
    title: {
      zh: '二次光學設計、背光模組與顯示技術',
      en: 'Optical Design, Backlight Modules & Display Technologies',
      ja: '二次光学設計・バックライトモジュールとディスプレイ技術',
    },
    summary: {
      zh: '深入光學模擬與元件微結構：研發 Mini LED 背光模組光學優化、量子點色域提升、薄型導光板微網點佈局與直下式二次光學透鏡設計。',
      en: 'Advanced optical simulation and microstructures: optical optimization for Mini LED backlights, quantum dot wide color gamut, thin light guide plate (LGP) dot patterns, and secondary optics lenses.',
      ja: '光学シミュレーションと微細構造解析：Mini LEDバックライト光学最適化、量子ドット広色域化、薄型導光板微細ドット配置および直下型二次光学レンズ設計。',
    },
    points: [
      {
        zh: 'Mini LED 與量子點背光優化：Mini LED 背光模組之光學透鏡優化，以及結合量子點薄膜大幅拓展顯示器色域與亮度均勻度',
        en: 'Mini LED & QD backlights: optical lens optimization for Mini LED modules, integrating quantum dot films for wide color gamut and high luminance uniformity',
        ja: 'Mini LED・量子ドットバックライト最適化：Mini LEDモジュールの光学レンズ最適化と量子ドットフィルムによる広色域・高輝度均一化',
      },
      {
        zh: '薄型導光板與微網點光學：薄型化導光板網點微結構光學設計最佳化，以及無導光板之側入式 LED 背光模組結構設計',
        en: 'Thin light guide plates & micro-dots: optimizing micro-dot optical patterns for ultra-thin LGPs and light-guide-free edge-lit backlight architectures',
        ja: '薄型導光板と微細ドット光学：薄型導光板ドットパターンの光学設計最適化、および導光板レスエッジライト型バックライト構造設計',
      },
      {
        zh: '節能二次光學透鏡設計：直下式二次光學透鏡配光曲線設計，廣泛應用於高均勻度液晶顯示背光與高功率 LED 路燈照明',
        en: 'Energy-saving secondary optics: luminous intensity distribution design for direct-lit secondary lenses, applied to uniform LCD backlights and streetlights',
        ja: '省エネ二次光学レンズ設計：直下型二次光学レンズ配光曲線設計による高均一液晶バックライトおよび高出力LED街路灯への応用',
      },
      {
        zh: '混光色彩預測與取光增強：發光二極體三原色混光之 CIE 色度座標與亮度預測系統，以及 ITO 圖案化微結構提升晶粒取光效率',
        en: 'Color mixing prediction & light extraction: CIE chromaticity coordinates and luminance modeling for RGB mixing, and patterned ITO to enhance chip light extraction',
        ja: '混色予測と光取り出し向上：RGB三原色混光のCIE色度座標・輝度予測システム、およびITOパターニングによるチップ光取り出し効率向上',
      },
    ],
    theses: [
      {
        title: { zh: 'Mini LED背光模組的光學優化', en: 'Optical optimization of Mini LED backlight module', ja: 'Mini LED背光模組的光學優化' },
        student: { zh: '李鼎凱 碩士', en: '李鼎凱, M.S.', ja: '李鼎凱 修士' },
        year: 2021,
      },
      {
        title: { zh: '量子點背光模組的色域優化', en: 'Optimize the color gamut of the quantum dots backlight module', ja: '量子點背光模組的色域優化' },
        student: { zh: '陳重銘 碩士', en: '陳重銘, M.S.', ja: '陳重銘 修士' },
        year: 2017,
      },
      {
        title: { zh: 'LED反射牆製程的光電特性', en: 'Optoelectronic Effect of the reflection Wall Process', ja: 'LED反射牆製程的光電特性' },
        student: { zh: '吳德民 碩士', en: '吳德民, M.S.', ja: '吳德民 修士' },
        year: 2017,
      },
      {
        title: { zh: '發光二極體三原色混光之CIE座標與亮度預測', en: 'Prediction of Cie Coordinates And Luminosity for The Mixed Light of Three Primary Colors', ja: '發光二極體三原色混光之CIE座標與亮度預測' },
        student: { zh: '鄭國男 碩士', en: '鄭國男, M.S.', ja: '鄭國男 修士' },
        year: 2014,
      },
      {
        title: { zh: 'ITO圖案化對LED晶粒之取光特性分析', en: 'Analysis of Light Extraction Characteristics for LED Chips With Patterned ITO', ja: 'ITO圖案化對LED晶粒之取光特性分析' },
        student: { zh: '蔡元讚 碩士', en: '蔡元讚, M.S.', ja: '蔡元讚 修士' },
        year: 2013,
      },
      {
        title: { zh: '節能直下式二次光學透鏡LED背光模組設計', en: 'Design of the Energy-saving Direct-type second LENS LED Backlight Module', ja: '節能直下式二次光學透鏡LED背光模組設計' },
        student: { zh: '黃忠章 碩士', en: '黃忠章, M.S.', ja: '黃忠章 修士' },
        year: 2013,
      },
      {
        title: { zh: '甲基丙烯酸甲酯和苯乙烯共聚合物於背光模組導光板之應用', en: 'The Application of MMA/SM Copolymers for Back Light Module Light Guide Plate', ja: '甲基丙烯酸甲酯和苯乙烯共聚合物於背光模組導光板之應用' },
        student: { zh: '施永亮 碩士', en: '施永亮, M.S.', ja: '施永亮 修士' },
        year: 2012,
      },
      {
        title: { zh: '薄型化導光板網點光學設計之最佳化', en: 'Optimum Optical Design of Thinned Light-guide Plate Pattern', ja: '薄型化導光板網點光學設計之最佳化' },
        student: { zh: '林正杰 碩士', en: '林正杰, M.S.', ja: '林正杰 修士' },
        year: 2012,
      },
    ],
    applications: [
      { zh: 'Mini LED 區域調光車載顯示器', en: 'Mini LED local-dimming automotive displays', ja: 'Mini LEDローカルディミング車載ディスプレイ' },
      { zh: '量子點高色域超薄液晶電視', en: 'Quantum dot wide-color-gamut slim TVs', ja: '量子ドット広色域超薄型液晶テレビ' },
      { zh: '節能高均勻度 LED 路燈與投光燈', en: 'Energy-efficient uniform LED streetlights', ja: '省エネ高均一LED街路灯・投光器' },
      { zh: '全彩高對比顯示看板模組', en: 'Full-color high-contrast display signage', ja: 'フルカラー高コントラスト表示看板' },
    ],
    image: '/images/research/packaging.webp',
  },
  {
    id: 'pv_green',
    icon: '☀️',
    title: {
      zh: '光伏太陽能、寬能隙半導體與綠能減碳技術',
      en: 'Photovoltaics, Wide-Bandgap Semiconductors & Green Tech',
      ja: '太陽光発電・ワイドバンドギャップ半導体と環境技術',
    },
    summary: {
      zh: '拓展綠能光電與永續科技：研發硫化鎘 (CdS) 薄膜太陽能電池、聚光型太陽能 (CPV) 系統、AlGaN/GaN 寬能隙功率元件，以及半導體製程尾氣裂解減排技術。',
      en: 'Expanding green optoelectronics and sustainable tech: research on CdS thin-film photovoltaics, CPV systems, AlGaN/GaN wide-bandgap power devices, and semiconductor exhaust gas abatement.',
      ja: 'グリーン光電子と持続可能技術の展開：CdS薄膜太陽電池、集光型太陽光発電（CPV）、AlGaN/GaNワイドバンドギャップ素子、および半導体排ガス分解技術を研究。',
    },
    points: [
      {
        zh: '薄膜太陽能電池研製：以化學水浴法與沉積製程研發硫化鎘 (CdS) 薄膜，優化薄膜光電轉換效率與異質接面特性',
        en: 'Thin-film photovoltaics: chemical bath deposition of cadmium sulfide (CdS) thin films, optimizing photoelectric conversion efficiency and heterojunctions',
        ja: '薄膜太陽電池の開発：化学析出法（CBD）による硫化カドミウム（CdS）薄膜の成膜と、光電変換効率・ヘテロ接合特性の最適化',
      },
      {
        zh: '聚光型太陽能 (CPV) 與增透膜：聚光型太陽能集光光學系統之能量轉換效率分析，並開發多層光學增透膜大幅降低界面反射損耗',
        en: 'Concentrated photovoltaics (CPV) & anti-reflective coatings: optical efficiency analysis of CPV systems, developing multilayer anti-reflective coatings to reduce reflection loss',
        ja: '集光型太陽電池（CPV）と反射防止膜：CPV光学系のエネルギー変換効率解析、および界面反射損失を低減する多層反射防止膜の開発',
      },
      {
        zh: '氮化鎵 (GaN) 寬能隙功率元件：氮化鋁鎵/氮化鎵 (AlGaN/GaN) 二維異質接面結構物理特性分析，研製高電子遷移率電晶體 (HEMT)',
        en: 'GaN wide-bandgap power devices: physical characterization of AlGaN/GaN 2D heterostructures and fabrication of high electron mobility transistors (HEMTs)',
        ja: 'GaNワイドバンドギャップパワーデバイス：AlGaN/GaN 2次元ヘテロ接合の物理特性解析と高電子移動度トランジスタ（HEMT）の作製',
      },
      {
        zh: '半導體特氣尾氣減排與除塵：針對半導體晶圓製程特氣氧化亞氮 (N2O) 進行紫外光 (UV) 與熱裂解效率優化，並開發微霧除塵系統處理粉塵',
        en: 'Semiconductor gas abatement & dust removal: UV/thermal cracking optimization for nitrous oxide (N2O) process gas and micro-mist abatement for SiO2 dust',
        ja: '半導体特殊排ガス処理と除塵：半導体プロセス排ガスN2OのUV/熱分解効率最適化、およびSiO2粉塵処理用マイクロミスト除塵システムの開発',
      },
    ],
    theses: [
      {
        title: { zh: '硫化鎘薄膜應用於太陽電池之研究', en: 'The study of cadmium sulfide thin films applied on solar cells', ja: '硫化鎘薄膜應用於太陽電池之研究' },
        student: { zh: '鄭庭宇 碩士', en: '鄭庭宇, M.S.', ja: '鄭庭宇 修士' },
        year: 2008,
      },
      {
        title: { zh: '聚光型太陽能集光系統之效率分析與研究', en: 'The efficiency analysis and study of the collective photovoltaic collector system', ja: '聚光型太陽能集光系統之效率分析與研究' },
        student: { zh: '陳竹山 碩士', en: '陳竹山, M.S.', ja: '陳竹山 修士' },
        year: 2010,
      },
      {
        title: { zh: '光學增透膜應用於發光二極體與太陽電池封裝效率之研究', en: 'Study of the Encapsulation Efficiency for Light-Emitting Diode and Solar Cell by Applying the Optical Antireflection Films', ja: '光學增透膜應用於發光二極體與太陽電池封裝效率之研究' },
        student: { zh: '韋銘展 碩士', en: '韋銘展, M.S.', ja: '韋銘展 修士' },
        year: 2013,
      },
      {
        title: { zh: '氮化鋁鎵/氮化鎵二維異質接面結構之研究', en: 'The Study of AlGaN/GaN Two-Dimensional Heterojunction Structures', ja: '氮化鋁鎵/氮化鎵二維異質接面結構之研究' },
        student: { zh: '黃詩君 碩士', en: '黃詩君, M.S.', ja: '黃詩君 修士' },
        year: 2013,
      },
      {
        title: { zh: '氮化鋁鎵/氮化鎵高電子遷移率電晶體之製作與研究', en: 'Fabrication and study of algan/gan high electron mobility transistor', ja: '氮化鋁鎵/氮化鎵高電子遷移率電晶體之製作與研究' },
        student: { zh: '林義峯 碩士', en: '林義峯, M.S.', ja: '林義峯 修士' },
        year: 2009,
      },
      {
        title: { zh: '氮化銦鎵光檢測器之特性研究', en: 'Characterization of ingan-based photodetectors', ja: '氮化銦鎵光檢測器之特性研究' },
        student: { zh: '劉文宏 碩士', en: '劉文宏, M.S.', ja: '劉文宏 修士' },
        year: 2008,
      },
      {
        title: { zh: '半導體製程特氣氧化亞氮的裂解效率優化', en: 'Optimizing the Decomposing Efficiency of the Nitrous Oxide Gas Generated in the Semiconductor Process', ja: '半導體製程特氣氧化亞氮的裂解效率優化' },
        student: { zh: '李建霖 碩士', en: '李建霖, M.S.', ja: '李建霖 修士' },
        year: 2021,
      },
      {
        title: { zh: '微霧除塵系統處理SiO2粉塵之探討', en: 'Discussion on Treatment of SiO2 Dust by Micro Mist Dust Removal System', ja: '微霧除塵系統處理SiO2粉塵之探討' },
        student: { zh: '吳鴻瑋 碩士', en: '吳鴻瑋, M.S.', ja: '吳鴻瑋 修士' },
        year: 2021,
      },
    ],
    applications: [
      { zh: '次世代高效率薄膜太陽能電池', en: 'Next-generation thin-film photovoltaics', ja: '次世代高効率薄膜太陽電池' },
      { zh: '高聚光型太陽能發電系統', en: 'Concentrated solar power (CSP/CPV) systems', ja: '高集光型太陽光発電システム' },
      { zh: '第三代寬能隙高頻功率元件', en: 'Wide-bandgap high-frequency power devices', ja: '第3世代高周波パワー半導体素子' },
      { zh: '半導體晶圓廠綠色製程減碳設備', en: 'Green semiconductor fab emissions abatement', ja: '半導体ファブ環境負荷低減設備' },
    ],
    image: '/images/research/perovskite.webp',
  },
];
