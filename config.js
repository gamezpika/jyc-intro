// 品牌設定檔 — 三種模式，網址切換
//
// 不加參數          → JYC 怡盛真名（自己用）
// ?brand=demo       → 示範通用（demo 給未指定客戶）
// ?brand=kiya       → 奇亞資訊 / KiyaX AI

window.BRAND_PRESETS = {
  // 怡盛真名（預設）
  jyc: {
    full:    'JYC 怡盛物業',
    short:   '怡盛',
    formal:  'JYC 怡盛物業管理股份有限公司',
    product: 'JYC 智慧社區管理系統',
    prefix:  'JYC',
  },

  // 示範通用（不出現任何具體品牌）
  demo: {
    full:    '示範物業',
    short:   '示範',
    formal:  '示範物業管理股份有限公司',
    product: '示範智慧社區管理系統',
    prefix:  '示範',
  },

  // 奇亞資訊（新案場）
  kiya: {
    full:    '奇亞資訊',
    short:   '奇亞資訊',
    formal:  '奇亞資訊',
    product: 'KiyaX AI',
    prefix:  '奇亞資訊',
  },
};
