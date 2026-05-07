// 品牌設定檔 — 只有兩種模式，網址切換
//
// 不加參數          → JYC 怡盛真名（自己用）
// 網址加 ?brand=demo → 示範通用（demo 給其他人看，不出現 JYC/怡盛）

window.BRAND_PRESETS = {
  // 怡盛真名（預設）
  jyc: {
    full:    'JYC 怡盛物業',
    short:   '怡盛',
    formal:  'JYC 怡盛物業管理股份有限公司',
    product: 'JYC 智慧社區管理系統',
    prefix:  'JYC',
  },

  // 示範通用（demo 用，不出現任何具體品牌）
  demo: {
    full:    '示範物業',
    short:   '示範',
    formal:  '示範物業管理股份有限公司',
    product: '示範智慧社區管理系統',
    prefix:  '示範',
  },
};
