// 品牌設定檔 — 換 demo 對象只要改這個檔
//
// 用法：
//   不加參數              → 顯示真實品牌（怡盛，自己用）
//   網址加 ?brand=a       → 顯示客戶 A
//   網址加 ?brand=b       → 顯示客戶 B
//
// 新增客戶：複製一段 a: { ... }，改代號跟內容即可

window.BRAND_PRESETS = {
  // 真實品牌（不加參數時顯示）
  default: {
    full:    'JYC 怡盛物業',
    short:   '怡盛',
    formal:  'JYC 怡盛物業管理股份有限公司',
    product: 'JYC 智慧社區管理系統',
    prefix:  'JYC',
  },

  // demo 對象 A
  a: {
    full:    '客戶 A 物業',
    short:   '客戶 A',
    formal:  '客戶 A 物業管理股份有限公司',
    product: 'A 智慧社區管理系統',
    prefix:  'A',
  },

  // demo 對象 B
  b: {
    full:    '客戶 B 物業',
    short:   '客戶 B',
    formal:  '客戶 B 物業管理股份有限公司',
    product: 'B 智慧社區管理系統',
    prefix:  'B',
  },
};
