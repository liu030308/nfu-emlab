// 研究領域
import type { L } from '../i18n/ui';

export type ResearchArea = {
  id: string;
  icon: string; // 簡單 emoji 圖示，可自行替換
  title: L;
  summary: L;
  points: L[];
  applications: L[];
  image: string; // 示意圖，例如 '/images/research/packaging.jpg'
};

export const research: ResearchArea[] = [
  {
    id: 'packaging',
    icon: '💡',
    title: {
      zh: '微光電封裝與熱管理',
      en: 'Optoelectronic Packaging & Thermal Management',
      ja: '光電子パッケージングと熱マネジメント',
    },
    summary: {
      zh: '開發耐高溫、抗熱疲勞的 LED 覆晶封裝與高效率散熱設計。',
      en: 'High-temperature, fatigue-resistant LED flip-chip packaging and efficient thermal design.',
      ja: '高耐熱・耐熱疲労性を備えたLEDフリップチップ実装と高効率な放熱設計。',
    },
    points: [
      {
        zh: '鋁鍺錫 (Al-Ge-Sn) 及鋁鍺銦錫 (Al-Ge-In-Sn) 暫態液相鍵合 (TLP) 技術，應用於 LED 覆晶封裝',
        en: 'Al-Ge-Sn and Al-Ge-In-Sn transient liquid phase (TLP) bonding for LED flip-chip packaging',
        ja: 'Al-Ge-Sn／Al-Ge-In-Sn 過渡液相接合（TLP）によるLEDフリップチップ実装',
      },
      {
        zh: '高功率群聚 LED 模組之多重共軛熱傳分析，設計矩形流道中誘發噴流與渦旋的散熱機制',
        en: 'Conjugate heat-transfer analysis of high-power LED arrays; jet- and vortex-enhanced cooling in rectangular channels',
        ja: '高出力LEDアレイの共役熱伝達解析と、矩形流路での噴流・渦を利用した冷却設計',
      },
      {
        zh: '螢光粉點膠抗沉澱、電泳沉積、壓模製程等白光 LED 封裝製程優化',
        en: 'White-LED process optimization: anti-settling phosphor dispensing, electrophoretic deposition, molding',
        ja: '白色LEDの工程最適化：蛍光体沈降防止ディスペンス、電気泳動堆積、モールド成形',
      },
    ],
    applications: [
      { zh: '高功率 LED 照明', en: 'High-power LED lighting', ja: '高出力LED照明' },
      { zh: '車用雷射頭燈', en: 'Automotive laser headlamps', ja: '車載レーザーヘッドランプ' },
      { zh: '微型投影光學引擎', en: 'Pico-projector optical engines', ja: '小型プロジェクター光学エンジン' },
    ],
    image: '/images/research/packaging.svg',
  },
  {
    id: 'perovskite',
    icon: '☀️',
    title: {
      zh: '鈣鈦礦與次世代光伏元件',
      en: 'Perovskite & Next-Generation Photovoltaics',
      ja: 'ペロブスカイトと次世代太陽電池',
    },
    summary: {
      zh: '鈣鈦礦、量子點與薄膜太陽能電池的光電特性與穩定性研究。',
      en: 'Optoelectronic properties and stability of perovskites, quantum dots, and thin-film solar cells.',
      ja: 'ペロブスカイト、量子ドット、薄膜太陽電池の光電特性と安定性の研究。',
    },
    points: [
      {
        zh: '有機/無機雜化鈣鈦礦與量子點 (QDs) 之光電特性與微觀結構分析',
        en: 'Optoelectronic and microstructural analysis of hybrid perovskites and quantum dots',
        ja: '有機・無機ハイブリッドペロブスカイトと量子ドットの光電特性・微細構造解析',
      },
      {
        zh: '氬氣環境快速熱退火 (RTA) 優化摻雜 CsPbI₃ 量子點之 MAPbI₃ 薄膜，降低缺陷並抑制退化',
        en: 'Rapid thermal annealing in Ar to optimize CsPbI₃-QD-doped MAPbI₃ films, reducing defects and degradation',
        ja: 'Ar雰囲気RTAによるCsPbI₃量子点添加MAPbI₃薄膜の最適化（欠陥低減・劣化抑制）',
      },
      {
        zh: '電漿輔助緊密空間昇華法 (PACSS) 優化 CdS/CdTe 薄膜太陽能電池',
        en: 'Plasma-assisted close-spaced sublimation (PACSS) for CdS/CdTe thin-film solar cells',
        ja: 'プラズマ支援近接昇華法（PACSS）によるCdS/CdTe薄膜太陽電池の最適化',
      },
      {
        zh: 'PEDOT:PSS 導電高分子薄膜添加劑機制研究',
        en: 'Mechanisms of organic additives in PEDOT:PSS films',
        ja: 'PEDOT:PSS薄膜における有機添加剤の作用機構',
      },
    ],
    applications: [
      { zh: '鈣鈦礦太陽能電池', en: 'Perovskite solar cells', ja: 'ペロブスカイト太陽電池' },
      { zh: '量子點發光元件', en: 'QD light-emitting devices', ja: '量子ドット発光素子' },
      { zh: '綠能光電', en: 'Green-energy optoelectronics', ja: 'グリーンエネルギー光電子' },
    ],
    image: '/images/research/perovskite.svg',
  },
  {
    id: 'sensing',
    icon: '📡',
    title: {
      zh: '智慧感測與自動化數據擷取',
      en: 'Smart Sensing & Automated Data Acquisition',
      ja: 'スマートセンシングと自動データ収集',
    },
    summary: {
      zh: '非接觸式工業檢測與全自動量測系統，推動物聯網技術落地。',
      en: 'Non-contact industrial inspection and fully automated measurement systems for IoT.',
      ja: '非接触型の産業検査と全自動計測システムでIoT技術の実用化を推進。',
    },
    points: [
      {
        zh: '全自動高靈敏度表面電漿共振 (SPR) 折射率量測系統',
        en: 'Fully automated, high-sensitivity surface plasmon resonance (SPR) refractive-index system',
        ja: '全自動・高感度な表面プラズモン共鳴（SPR）屈折率計測システム',
      },
      {
        zh: '以光穿透率面積監控工業潤滑油含水量與油水混合度',
        en: 'Monitoring water content and emulsification of industrial lubricants by optical transmittance',
        ja: '光透過率による工業用潤滑油の含水量・乳化度モニタリング',
      },
      {
        zh: '以 Cypress FX2 (8051) 結合 LabVIEW 與 Visual C++ 開發全自動物理量測與數據擷取系統',
        en: 'Automated measurement and DAQ systems built on Cypress FX2 (8051), LabVIEW and Visual C++',
        ja: 'Cypress FX2（8051）とLabVIEW・Visual C++による全自動計測・データ収集システム',
      },
    ],
    applications: [
      { zh: 'ACS 感測器雲端預警系統', en: 'ACS cloud sensor alert system', ja: 'ACSセンサークラウド警報システム' },
      {
        zh: '旋轉平台金屬加工機台聯網可視化',
        en: 'Networked visualization for rotary-table machining',
        ja: '回転テーブル金属加工機のIoT可視化',
      },
      { zh: '工業設備預知保養', en: 'Predictive maintenance', ja: '予知保全' },
    ],
    image: '/images/research/sensing.svg',
  },
];

