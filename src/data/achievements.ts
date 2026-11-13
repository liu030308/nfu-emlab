// 研究成果：競賽獲獎、專利、論文（更新至 2026 年）
import type { L } from '../i18n/ui';

export type Award = {
  year: number;
  event: L;
  detail?: L;
  medal: 'gold' | 'silver' | 'bronze' | 'award';
  badgeLabel?: L;
  url: string;
  image?: string;
};

export const awards: Award[] = [
  {
    year: 2026,
    event: {
      zh: 'IEEE ICCT-Pacific 2026 國際學術會議（日本山口大學）',
      en: 'IEEE ICCT-Pacific 2026 International Conference (Yamaguchi University, Japan)',
      ja: 'IEEE ICCT-Pacific 2026 国際会議（日本・山口大学）',
    },
    detail: {
      zh: '最佳學生壁報論文獎 (Best Student Poster Award) — AIoT Base Smart Consumables Drying Cabinet（劉峻瑋、洪梓瑜、潘昱澤、盧暐竑｜陳文瑞教授指導）',
      en: 'Best Student Poster Award — AIoT Base Smart Consumables Drying Cabinet (J.-W. Liu, Z.-Y. Hong, Y.-Z. Pan, W.-H. Lu, Advised by Prof. W.-R. Chen)',
      ja: '最優秀学生ポスター賞 (Best Student Poster Award) — AIoT Base Smart Consumables Drying Cabinet（劉峻瑋、洪梓瑜、潘昱澤、盧暐竑）',
    },
    medal: 'gold',
    badgeLabel: { zh: '最佳學生海報獎', en: 'Best Student Poster Award', ja: '最優秀学生ポスター賞' },
    url: 'https://dee.nfu.edu.tw/zh_tw/news/Announcements/%E6%81%AD%E8%B3%80-%E9%9B%BB%E5%AD%90%E7%B3%BB%E9%99%B3%E6%96%87%E7%91%9E%E8%80%81%E5%B8%AB%E6%8C%87%E5%B0%8E%E5%AD%B8%E7%94%9F%E5%8A%89%E5%B3%BB%E7%91%8B-%E6%B4%AA%E6%A2%93%E7%91%9C-%E6%BD%98%E6%98%B1%E6%BE%A4-%E7%9B%A7%E6%9A%90%E7%AB%91%E5%8F%83%E5%8A%A0-ICCT-Pacific-2026-2026-03-29-Yamaguchi-Japan-%E5%9C%8B%E9%9A%9B%E6%9C%83%E8%AD%B0-%E7%8D%B2%E5%BE%97%E6%9C%80%E4%BD%B3%E5%AD%B8%E7%94%9F%E5%A3%81%E5%A0%B1%E8%AB%96%E6%96%87%E7%8D%8EBest-Student-Poster-Award-%E8%AB%96%E6%96%87%E4%B8%BB%E9%A1%8C-AIoT-Base-Smart-Consumables-Drying-Cabinet-69367103',
    image: '/images/seniors/icct-2026-award.webp',
  },
  {
    year: 2025,
    event: {
      zh: '2025 全國大專院校產學創新實作競賽',
      en: '2025 National Intercollegiate Industry-Academia Innovation Competition',
      ja: '2025 全国大学産学イノベーション実装コンテスト',
    },
    detail: {
      zh: '機械自動化及手工具創新組 第三名 — 智慧型即時跌倒偵測系統之開發與應用（陳昱琮、潘昱澤、許育人｜陳文瑞教授指導）',
      en: '3rd Place (Mechanical Automation & Hand-Tool Innovation) — Smart Real-Time Fall Detection System (Y.-C. Chen, Y.-Z. Pan, Y.-J. Hsu)',
      ja: '機械自動化・ハンドツール革新部門 第3位 — スマートリアルタイム転倒検知システムの開発と応用（陳昱琮、潘昱澤、許育人）',
    },
    medal: 'bronze',
    badgeLabel: { zh: '全國第三名', en: '3rd Place', ja: '第3位（銅賞）' },
    url: 'https://eedept.ncue.edu.tw/innovation2025/s2.html#winning-list',
  },
  {
    year: 2024,
    event: {
      zh: '2024 全國大專院校產學創新實作競賽',
      en: '2024 National Intercollegiate Industry-Academia Innovation Competition',
      ja: '2024 全国大学産学イノベーション実装コンテスト',
    },
    detail: {
      zh: '手工具創新設計獎 — 踏板發電在智慧老年健康復健系統的應用（朱囿儒、林學澤、張翔袁、陳昱琮、潘昱澤｜陳文瑞教授指導）',
      en: 'Hand-Tool Innovation Design Award — Pedal Power Generation in Smart Elderly Rehabilitation Systems (Y.-R. Zhu, X.-Z. Lin, X.-Y. Zhang, Y.-C. Chen, Y.-Z. Pan)',
      ja: 'ハンドツール革新デザイン賞 — ペダル発電を用いた高齢者スマート健康リハビリシステム',
    },
    medal: 'award',
    badgeLabel: { zh: '手工具創新設計獎', en: 'Innovation Design Award', ja: '革新デザイン賞' },
    url: 'https://dee.nfu.edu.tw/zh_tw/news/Announcements/%E6%81%AD%E8%B3%80-%E6%9C%AC%E7%B3%BB%E9%99%B3%E6%96%87%E7%91%9E%E8%80%81%E5%B8%AB%E6%8C%87%E5%B0%8E%E5%8F%83%E5%8A%A0%E3%80%8E2024%E5%85%A8%E5%9C%8B%E5%A4%A7%E5%B0%88%E9%99%A2%E6%A0%A1%E7%94%A2%E5%AD%B8%E5%89%B5%E6%96%B0%E5%AF%A6%E4%BD%9C%E7%AB%B6%E8%B3%BD%E3%80%8F-%E6%A6%AE%E7%8D%B2%E6%89%8B%E5%B7%A5%E5%85%B7%E5%89%B5%E6%96%B0%E8%A8%AD%E8%A8%88%E7%8D%8E-%E9%9B%BB%E5%AD%90%E7%B3%BB%E5%85%A8%E9%AB%94%E5%B8%AB%E7%94%9F%E6%81%AD%E8%B3%80-43444169',
    image: '/images/seniors/innovation-2024-team.webp',
  },
  {
    year: 2023,
    event: {
      zh: '2023 全國大專院校產學創新實作競賽',
      en: '2023 National Intercollegiate Industry-Academia Innovation Competition',
      ja: '2023 全国大学産学イノベーション実装コンテスト',
    },
    detail: {
      zh: '佳作獎 — 應用於金屬加工液的 IoT 落球式油濃度量測系統（林揚恩、陳靖中、林學澤、朱囿儒、張翔袁｜陳文瑞教授指導）',
      en: 'Honorable Mention — IoT Falling-Ball Oil Concentration Measurement System for Metalworking Fluids',
      ja: '佳作 — 金属加工液向けIoT落球式油濃度計測システム',
    },
    medal: 'award',
    badgeLabel: { zh: '佳作獎', en: 'Honorable Mention', ja: '佳作' },
    url: 'https://dee.nfu.edu.tw/zh_tw/news/Announcements/%E6%81%AD%E8%B3%80-%E6%9C%AC%E7%B3%BB%E9%99%B3%E6%96%87%E7%91%9E%E8%80%81%E5%B8%AB%E6%8C%87%E5%B0%8E%E5%AD%B8%E7%94%9F%E6%9E%97%E6%8F%9A%E6%81%A9-%E9%99%B3%E9%9D%96%E4%B8%AD-%E6%9E%97%E5%AD%B8%E6%BE%A4-%E6%9C%B1%E5%9B%BF%E5%84%92-%E5%BC%B5%E7%BF%94%E8%A2%81%E5%8F%83%E5%8A%A0%E3%80%8E2023%E5%85%A8%E5%9C%8B%E5%A4%A7%E5%B0%88%E9%99%A2%E6%A0%A1%E7%94%A2%E5%AD%B8%E5%89%B5%E6%96%B0%E5%AF%A6%E4%BD%9C%E7%AB%B6%E8%B3%BD%E3%80%8F%E6%A6%AE%E7%8D%B2%E4%BD%B3%E4%BD%9C%E7%8D%8E-%E9%9B%BB%E5%AD%90%E7%B3%BB%E5%85%A8%E9%AB%94%E5%B8%AB%E7%94%9F%E6%81%AD%E8%B3%80-70098888',
    image: '/images/seniors/innovation-2023-team.webp',
  },
  {
    year: 2021,
    event: {
      zh: '2021 台灣創新技術博覽會 (TIE)',
      en: '2021 Taiwan Innotech Expo (TIE)',
      ja: '2021 台湾イノテックエキスポ（台北国際発明展）',
    },
    detail: {
      zh: '銅牌獎 — 電池履歷系統（蕭宇良、陳彰、張日星、葉佩欣｜陳文瑞教授指導）',
      en: 'Bronze Medal — Battery History Management System (Y.-L. Xiao, Z. Chen, R.-X. Zhang, P.-X. Ye)',
      ja: '銅賞 — バッテリー履歴管理システム',
    },
    medal: 'bronze',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/Announcements/%E6%81%AD%E8%B3%80-%E6%9C%AC%E7%B3%BB%E9%99%B3%E6%96%87%E7%91%9E%E8%80%81%E5%B8%AB%E6%8C%87%E5%B0%8E%E5%AD%B8%E7%94%9F%E8%95%AD%E5%AE%87%E8%89%AF-%E9%99%B3%E5%BD%B0-%E5%BC%B5%E6%97%A5%E6%98%9F-%E8%91%89%E4%BD%A9%E6%AC%A3%E5%8F%83%E5%8A%A0%E3%80%8E2021%E5%8F%B0%E7%81%A3%E5%89%B5%E6%96%B0%E6%8A%80%E8%A1%93%E5%8D%9A%E8%A6%BD%E6%9C%83%E3%80%8F%E6%9C%9F%E9%96%93110-10-14-110-10-16-%E4%BB%A5%E3%80%8E%E9%9B%BB%E6%B1%A0%E5%B1%A5%E6%AD%B7%E7%B3%BB%E7%B5%B1%E3%80%8F-%E6%A6%AE%E7%8D%B2%E9%8A%85%E7%89%8C-%E9%9B%BB%E5%AD%90%E7%B3%BB%E5%85%A8%E9%AB%94%E5%B8%AB%E7%94%9F%E6%81%AD%E8%B3%80-38391016',
    image: '/images/seniors/tie-2021-team.webp',
  },
  {
    year: 2021,
    event: {
      zh: '2021 全國大專院校產學創新實作競賽',
      en: '2021 National Intercollegiate Industry-Academia Innovation Competition',
      ja: '2021 全国大学産学イノベーション実装コンテスト',
    },
    detail: {
      zh: '佳作獎 — 切削液油品髒污程度感測器（施富棋、陳怡靜、陳彰、張日星、蕭宇良｜陳文瑞教授指導）',
      en: 'Honorable Mention — Cutting Fluid Contamination Sensor',
      ja: '佳作 — 切削油汚染度センサー',
    },
    medal: 'award',
    badgeLabel: { zh: '佳作獎', en: 'Honorable Mention', ja: '佳作' },
    url: 'https://dee.nfu.edu.tw/zh_tw/news/Announcements/%E6%81%AD%E8%B3%80-%E6%9C%AC%E7%B3%BB%E9%99%B3%E6%96%87%E7%91%9E%E8%80%81%E5%B8%AB%E6%8C%87%E5%B0%8E%E5%AD%B8%E7%94%9F%E6%96%BD%E5%AF%8C%E6%A3%8B-%E9%99%B3%E6%80%A1%E9%9D%9C-%E9%99%B3%E5%BD%B0-%E5%BC%B5%E6%97%A5%E6%98%9F-%E8%95%AD%E5%AE%87%E8%89%AF%E5%8F%83%E5%8A%A0%E3%80%8E2021%E5%85%A8%E5%9C%8B%E5%A4%A7%E5%B0%88%E9%99%A2%E6%A0%A1%E7%94%A2%E5%AD%B8%E5%89%B5%E6%96%B0%E5%AF%A6%E4%BD%9C%E7%AB%B6%E8%B3%BD%E3%80%8F-%E4%BB%A5%E3%80%8E%E5%88%87%E5%89%8A%E6%B6%B2%E6%B2%B9%E5%93%81%E9%AB%92%E6%B1%A1%E7%A8%8B%E5%BA%A6%E6%84%9F%E6%B8%AC%E5%99%A8%E3%80%8F-%E6%A6%AE%E7%8D%B2%E4%BD%B3%E4%BD%9C%E7%8D%8E-%E9%9B%BB%E5%AD%90%E7%B3%BB%E5%85%A8%E9%AB%94%E5%B8%AB%E7%94%9F%E6%81%AD%E8%B3%80-84771472',
    image: '/images/seniors/innovation-2021-team.webp',
  },
  {
    year: 2020,
    event: {
      zh: '2020 台灣創新技術博覽會 (TIE)',
      en: '2020 Taiwan Innotech Expo (TIE)',
      ja: '2020 台湾イノテックエキスポ（台北国際発明展）',
    },
    detail: {
      zh: '發明競賽銅牌獎 — 雲端監控之握力復健裝置（施富棋、蕭宇良、張哲嘉、陳恒孝）',
      en: 'Bronze Medal — Cloud-Monitored Grip Rehabilitation Device',
      ja: '銅賞 — クラウド監視型握力リハビリ装置',
    },
    medal: 'bronze',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/恭賀-本系陳文瑞老師指導學生施富棋-蕭宇良-張哲嘉-陳恒孝參加『2020台灣創新技術博覽會』期間109-09-24-109-09-26-以『雲端監控之握力復健裝置』-榮獲銅牌-電子系全體師生恭賀-71423859',
  },
  {
    year: 2019,
    event: {
      zh: '2019 全國大專院校產學創新實作競賽',
      en: '2019 National Intercollegiate Industry-Academia Innovation Competition',
      ja: '2019 全国大学産学イノベーション実装コンテスト',
    },
    detail: {
      zh: '最佳實作獎 — 具雲端監控之肌力復健裝置（陳恒孝、林鈺沛、施富棋）',
      en: 'Best Implementation Award — Cloud-Monitored Muscle Rehabilitation Device',
      ja: '最優秀実装賞 — クラウド監視型筋力リハビリ装置',
    },
    medal: 'award',
    badgeLabel: { zh: '最佳實作獎', en: 'Best Implementation Award', ja: '最優秀実装賞' },
    url: 'https://dee.nfu.edu.tw/zh_tw/news/恭賀-本系陳文瑞老師指導學生陳恒孝-林鈺沛-施富棋參加『2019全國大專院校產學創新實作競賽』-以『具雲端監控之肌力復健裝置』榮獲最佳實作獎-44015278',
  },
  {
    year: 2019,
    event: {
      zh: '2019 台灣創新技術博覽會 (TIE)',
      en: '2019 Taiwan Innotech Expo (TIE)',
      ja: '2019 台湾イノテックエキスポ（台北国際発明展）',
    },
    detail: {
      zh: '發明競賽銅牌獎 — 紅外線拔罐器（陳恒孝、張哲嘉）',
      en: 'Bronze Medal — Infrared Cupping Device',
      ja: '銅賞 — 赤外線カッピング器',
    },
    medal: 'bronze',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/恭賀-本系陳文瑞老師指導學生陳恒孝-張哲嘉參加『2019台灣創新技術博覽會』期間108-09-26-108-09-28-以『紅外線拔罐器』-榮獲銅牌-電子系全體師生恭賀-99392099',
  },
  {
    year: 2017,
    event: {
      zh: '2017 台北國際發明暨技術交易展',
      en: '2017 Taipei International Invention Show & Technomart (INST)',
      ja: '2017 台北国際発明・技術取引展',
    },
    detail: {
      zh: '金牌獎（楊珮昀、余孟哲、王紹錚）',
      en: 'Gold Medal (P.-Y. Yang, M.-Z. Yu, S.-Z. Wang)',
      ja: '金賞（楊珮昀、余孟哲、王紹錚）',
    },
    medal: 'gold',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/恭賀-本系陳文瑞老師指導學生楊珮昀-余孟哲-王紹錚參加『2017台北國際發明暨技術交易展』-榮獲金牌獎-電子系全體師生恭賀-27662303',
  },
  {
    year: 2016,
    event: {
      zh: '第27屆馬來西亞 ITEX 國際發明創新科技展',
      en: '27th ITEX International Invention, Innovation & Technology Exhibition (Malaysia)',
      ja: '第27回 マレーシア ITEX 国際発明・革新技術展',
    },
    detail: {
      zh: '銅牌獎 & 泰國國家研究理事會 (NRCT) 特別獎（莊紫琳、彭維奕）',
      en: 'Bronze Medal & Thailand NRCT Special Award (Z.-L. Zhuang, W.-Y. Peng)',
      ja: '銅賞＆タイ国家研究評議会（NRCT）特別賞（莊紫琳、彭維奕）',
    },
    medal: 'bronze',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/恭賀-本系陳文瑞老師指導學生莊紫琳-彭維奕參加『2016第27屆馬來西亞ITEX國際發明創新科技展』-榮獲銅牌以及泰國National-Research-Council-of-Thailand-NRCT-頒發特別獎-33619694',
  },
  {
    year: 2015,
    event: {
      zh: '2015 台北國際發明暨技術交易展',
      en: '2015 Taipei International Invention Show & Technomart (INST)',
      ja: '2015 台北国際発明・技術取引展',
    },
    detail: {
      zh: '銀牌獎（彭維奕、李志文、陳冠樺）',
      en: 'Silver Medal (W.-Y. Peng, Z.-W. Li, G.-H. Chen)',
      ja: '銀賞（彭維奕、李志文、陳冠樺）',
    },
    medal: 'silver',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/恭賀本系陳文瑞老師指導學生彭維奕-李志文-陳冠樺參加『2015台北國際發明暨技術交易展』-榮獲銀牌-電子系全體師生恭賀-51859244',
  },
  {
    year: 2015,
    event: {
      zh: '第26屆馬來西亞 ITEX 國際發明創新科技展',
      en: '26th ITEX International Invention, Innovation & Technology Exhibition (Malaysia)',
      ja: '第26回 マレーシア ITEX 国際発明・革新技術展',
    },
    detail: {
      zh: '銅牌獎（陳冠樺、林彥竹、彭維奕）',
      en: 'Bronze Medal (G.-H. Chen, Y.-Z. Lin, W.-Y. Peng)',
      ja: '銅賞（陳冠樺、林彥竹、彭維奕）',
    },
    medal: 'bronze',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/Announcements/恭賀-本系陳文瑞老師指導學生陳冠樺-林彥竹-彭維奕-參加-2015馬來西亞ITEX國際發明展-榮獲銅牌-21538169',
  },
  {
    year: 2014,
    event: {
      zh: '第25屆馬來西亞 ITEX 國際發明創新科技展',
      en: '25th ITEX International Invention, Innovation & Technology Exhibition (Malaysia)',
      ja: '第25回 マレーシア ITEX 国際発明・革新技術展',
    },
    detail: {
      zh: '銀牌獎 — 發光二極體戒指／具溫度調節功能之行動寵物箱（張奕鉦、林彥竹、劉冠岐、謝坤男、黃源億）',
      en: 'Silver Medal — LED Ring / Temperature-Regulated Mobile Pet Carrier',
      ja: '銀賞 — LEDリング／温度調節機能付きモバイルペットキャリー',
    },
    medal: 'silver',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/恭賀-本系陳文瑞副教授指導學生參加2014年第25屆馬來西亞ITEX國際發明創新科技展榮獲銀牌獎-電子系全體師生恭賀-9394179',
  },
  {
    year: 2013,
    event: {
      zh: '英國倫敦國際發明展與英國年度發明獎',
      en: 'International Invention Show & Inventor of the Year Awards, London (UK)',
      ja: 'ロンドン国際発明展・年間発明賞（英国）',
    },
    detail: {
      zh: '金牌獎 — 多用途 LED 攝影照明燈（黃文昱、陳冠樺、陳雲容、王稚媄）',
      en: 'Gold Medal — Multi-purpose LED Photography Lighting (W.-Y. Huang, G.-H. Chen, Y.-R. Chen, Z.-M. Wang)',
      ja: '金賞 — 多目的LED撮影用照明ライト',
    },
    medal: 'gold',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/恭賀-本系陳文瑞副教授帶領學生黃文昱-陳冠樺-陳雲容-王稚媄參加2013年英國倫敦國際發明展與英國年度發明獎以『多用途LED攝影照明燈』榮獲金牌-電子系全體師生恭賀-38123369',
  },
  {
    year: 2011,
    event: { zh: '韓國首爾國際發明展 (SIIF)', en: 'Seoul International Invention Fair (SIIF, Korea)', ja: 'ソウル国際発明展（韓国）' },
    detail: {
      zh: '銀牌獎（韓國首爾國際發明協會）',
      en: 'Silver Medal (Korea Invention Promotion Association)',
      ja: '銀賞（韓国発明振興協会）',
    },
    medal: 'silver',
    url: 'https://dee.nfu.edu.tw/zh_tw/members/professor/Wen_Ray_Chen',
  },
  {
    year: 2011,
    event: {
      zh: '第22屆馬來西亞 ITEX 國際發明創新科技展',
      en: '22nd ITEX International Invention, Innovation & Technology Exhibition (Malaysia)',
      ja: '第22回 マレーシア ITEX 国際発明・革新技術展',
    },
    detail: {
      zh: '銅牌獎（馬來西亞 ITEX 國際發明協會）',
      en: 'Bronze Medal (MINDS, Malaysia)',
      ja: '銅賞（マレーシア発明・デザイン協会）',
    },
    medal: 'bronze',
    url: 'https://dee.nfu.edu.tw/zh_tw/members/professor/Wen_Ray_Chen',
  },
  {
    year: 2010,
    event: { zh: '韓國首爾國際發明展 (SIIF)', en: 'Seoul International Invention Fair (SIIF, Korea)', ja: 'ソウル国際発明展（韓国）' },
    detail: {
      zh: '金牌獎（韓國發明協會）',
      en: 'Gold Medal (Korea Invention Promotion Association)',
      ja: '金賞（韓国発明振興協会）',
    },
    medal: 'gold',
    url: 'https://dee.nfu.edu.tw/zh_tw/members/professor/Wen_Ray_Chen',
  },
  {
    year: 2010,
    event: { zh: '韓國首爾國際發明展 (SIIF)', en: 'Seoul International Invention Fair (SIIF, Korea)', ja: 'ソウル国際発明展（韓国）' },
    detail: {
      zh: '銀牌獎（韓國發明協會）',
      en: 'Silver Medal (Korea Invention Promotion Association)',
      ja: '銀賞（韓国発明振興協会）',
    },
    medal: 'silver',
    url: 'https://dee.nfu.edu.tw/zh_tw/members/professor/Wen_Ray_Chen',
  },
];

export const medalLabel: Record<Award['medal'], L> = {
  gold: { zh: '金牌／首獎', en: 'Gold / First Prize', ja: '金賞・最優秀賞' },
  silver: { zh: '銀牌', en: 'Silver Medal', ja: '銀賞' },
  bronze: { zh: '銅牌', en: 'Bronze Medal', ja: '銅賞' },
  award: { zh: '創新競賽獎項', en: 'Innovation Award', ja: 'コンテスト受賞' },
};

export type Patent = { title: L; type: 'invention' | 'utility' };
export type PatentGroup = { category: L; patents: Patent[] };

export const patentType: Record<Patent['type'], L> = {
  invention: { zh: '發明專利', en: 'Invention Patent', ja: '特許' },
  utility: { zh: '新型專利', en: 'Utility Model', ja: '実用新案' },
};

export const patentGroups: PatentGroup[] = [
  {
    category: { zh: '工業與半導體應用', en: 'Industrial & Semiconductor', ja: '産業・半導体応用' },
    patents: [
      {
        type: 'invention',
        title: {
          zh: '以光穿透率面積監控潤滑油含水量之檢測方法',
          en: 'Method for monitoring water content in lubricating oil by optical transmittance area',
          ja: '光透過率面積による潤滑油水分量監視・検出方法',
        },
      },
      {
        type: 'utility',
        title: {
          zh: '電池履歷系統',
          en: 'Battery history and lifecycle management system',
          ja: 'バッテリー履歴・ライフサイクル管理システム',
        },
      },
      {
        type: 'utility',
        title: {
          zh: '主動吸附式的承載裝置',
          en: 'Active suction carrier device',
          ja: '能動吸着式キャリア装置',
        },
      },
      {
        type: 'utility',
        title: {
          zh: '蒸鍍機送料器',
          en: 'Material feeder for evaporation systems',
          ja: '蒸着装置用フィーダー',
        },
      },
      {
        type: 'utility',
        title: {
          zh: '用於顯示物質分子的原子組成結構之分子結構模型',
          en: 'Molecular structure model for displaying atomic composition of substances',
          ja: '物質分子の原子組成構造を表示するための分子構造模型',
        },
      },
    ],
  },
  {
    category: { zh: '光電與綠能照明', en: 'Optoelectronics & Green Lighting', ja: '光電子・グリーン照明' },
    patents: [
      {
        type: 'invention',
        title: {
          zh: '紫外線發光二極體自我主動封裝方法及其製備技術',
          en: 'Self-active packaging method for UV LEDs and its fabrication',
          ja: '紫外線LEDの自己能動パッケージング方法とその製造技術',
        },
      },
      {
        type: 'invention',
        title: {
          zh: '發光二極體優化照明裝置',
          en: 'Optimized LED lighting device',
          ja: '最適化LED照明装置',
        },
      },
      {
        type: 'utility',
        title: {
          zh: '高效率散熱型 LED 球泡燈',
          en: 'High-efficiency thermal dissipation LED bulb',
          ja: '高効率放熱型LED電球',
        },
      },
      {
        type: 'utility',
        title: {
          zh: 'LED 太陽能防竊庭院燈',
          en: 'Anti-theft solar LED garden lamp',
          ja: '盗難防止ソーラーLEDガーデンライト',
        },
      },
      {
        type: 'utility',
        title: {
          zh: '隱藏式 CCTV 防盜照明投射燈',
          en: 'Concealed CCTV anti-theft security floodlight',
          ja: '防犯カメラ内蔵型防犯照明投光器',
        },
      },
    ],
  },
  {
    category: { zh: '生醫與民生電子', en: 'Biomedical & Consumer Electronics', ja: '医療・民生電子' },
    patents: [
      {
        type: 'invention',
        title: {
          zh: '智慧型紅外線拔罐器',
          en: 'Smart infrared cupping device',
          ja: 'スマート赤外線カッピング器',
        },
      },
      {
        type: 'invention',
        title: {
          zh: '聚蚊裝置',
          en: 'Mosquito attracting and trapping apparatus',
          ja: '蚊誘引・捕獲装置',
        },
      },
      {
        type: 'invention',
        title: {
          zh: '發光二極體食品溫熱器',
          en: 'LED food warmer device',
          ja: 'LED食品保温器',
        },
      },
      {
        type: 'utility',
        title: {
          zh: '具有溫度調節功能之行動寵物箱',
          en: 'Mobile pet carrier with temperature regulation function',
          ja: '温度調節機能付きポータブルペットケージ',
        },
      },
      {
        type: 'utility',
        title: {
          zh: '便攜式母乳保冷保鮮器',
          en: 'Portable breast milk cooler and preserver',
          ja: 'ポータブル母乳保冷器',
        },
      },
    ],
  },
];

export type Publication = { year: number; title: string; authors: string; venue: string; url: string };

// 代表性期刊與會議論文（點擊皆可直接跳轉至官方網站／DOI 論文頁面）
export const publications: Publication[] = [
  {
    year: 2026,
    title: 'AIoT Base Smart Consumables Drying Cabinet',
    authors: 'J.-W. Liu, Z.-Y. Hong, Y.-Z. Pan, W.-R. Chen, et al.',
    venue: 'IEEE International Conference on Consumer Technology - Pacific (ICCT-Pacific 2026) — Best Student Poster Award',
    url: 'https://2026.icct-pacific.org/awards/',
  },
  {
    year: 2023,
    title: 'Inhibited Degradation of Organic–Inorganic Perovskite-Based Quantum Dot Films via Rapid Annealing Temperatures',
    authors: 'P.-H. Huang, P.-J. Lai, W.-R. Chen, C.-H. Liu, P.-W. Sze, S.-Y. Lien, C.-J. Huang',
    venue: 'Crystals, 13(3), 452 (MDPI)',
    url: 'https://www.mdpi.com/2073-4352/13/3/452',
  },
  {
    year: 2022,
    title: 'The Mechanism of PEDOT:PSS Films with Organic Additives',
    authors: 'S.-Y. Lien, P.-C. Lin, W.-R. Chen, et al.',
    venue: 'Crystals, 12(8), 1109 (MDPI)',
    url: 'https://doi.org/10.3390/cryst12081109',
  },
  {
    year: 2022,
    title: 'The Influence of Argon Plasma on Organic Perovskite MAPbI₃ Films',
    authors: 'W.-R. Chen, et al.',
    venue: 'Crystals, 12(6), 799 (MDPI)',
    url: 'https://doi.org/10.3390/cryst12060799',
  },
  {
    year: 2022,
    title: 'Improving Optoelectrical Properties of PEDOT:PSS by Organic Additive and Acid Treatment',
    authors: 'W.-R. Chen, et al.',
    venue: 'Crystals, 12(4), 537 (MDPI)',
    url: 'https://doi.org/10.3390/cryst12040537',
  },
  {
    year: 2018,
    title: 'A Screen Method for the Mass-Production of the Small-Size and Side-View LED Package',
    authors: 'W.-R. Chen, Y.-S. Luo',
    venue: 'Crystals, 8(9), 350 (MDPI)',
    url: 'https://www.mdpi.com/2073-4352/8/9/350',
  },
  {
    year: 2018,
    title: 'Optoelectronic Effect of Reflection Wall on LED Packaging Process',
    authors: 'W.-R. Chen, D.-M. Wu',
    venue: 'Sensors and Materials, 30(4), 919–924 (SCI)',
    url: 'https://doi.org/10.18494/SAM.2018.1794',
  },
  {
    year: 2013,
    title: 'Surface plasma resonant effect of gold nanoparticles on the photoelectrodes of dye-sensitized solar cells',
    authors: 'T.-H. Meen, J.-K. Tsai, W.-R. Chen, et al.',
    venue: 'Nanoscale Research Letters, 8, 450 (Springer Nature)',
    url: 'https://doi.org/10.1186/1556-276X-8-450',
  },
];
