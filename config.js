// 品牌設定檔 — 你要改隨時改
//
// 【預設模式】= 不加參數時顯示什麼
//   想要訪客直接看到怡盛 → BRAND_DEFAULT_KEY = 'jyc'
//   想要訪客直接看到示範 → BRAND_DEFAULT_KEY = 'demo'
//   想要訪客直接看到客戶 A → BRAND_DEFAULT_KEY = 'a'
//   改完 git push 後 30 秒生效
//
// 【臨時切換】= 網址加參數，不改檔案就能切
//   ?brand=jyc / ?brand=demo / ?brand=a / ?brand=b
//
// 【新增 demo 對象】複製一段 a:{...} 改代號跟內容

window.BRAND_DEFAULT_KEY = 'jyc';  // ← 預設模式改這行

window.BRAND_PRESETS = {
  // 怡盛真名（自己用 / 給怡盛看）
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
