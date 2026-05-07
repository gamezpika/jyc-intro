// 品牌字眼動態替換腳本
//
// 預設模式 = config.js 的 BRAND_DEFAULT_KEY 決定
// 臨時切換 = 網址加 ?brand=xx 覆蓋預設

(function () {
  const params = new URLSearchParams(window.location.search);
  const defaultKey = window.BRAND_DEFAULT_KEY || 'jyc';
  const brandKey = params.get('brand') || defaultKey;
  const presets = window.BRAND_PRESETS || {};
  const brand = presets[brandKey] || presets[defaultKey] || presets.jyc;

  if (!brand) return;
  // 怡盛模式（jyc）字眼跟原本一樣，跳過替換省 CPU
  if (brandKey === 'jyc' && brand.full === 'JYC 怡盛物業') return;

  // 替換規則（順序很重要：長字串先換，避免短字串先換掉一部分）
  function applyBrand(text) {
    return text
      .replace(/JYC 怡盛物業管理股份有限公司/g, brand.formal)
      .replace(/JYC 怡盛物業/g, brand.full)
      .replace(/JYC 智慧社區管理系統/g, brand.product)
      .replace(/JYC 智慧社區行事曆/g, brand.prefix + ' 智慧社區行事曆')
      .replace(/JYC 智慧社區/g, brand.prefix + ' 智慧社區')
      .replace(/JYC 機器人/g, brand.prefix + ' 機器人')
      .replace(/JYC 後台/g, brand.prefix + ' 後台')
      .replace(/JYC 報價/g, brand.prefix + ' 報價')
      .replace(/JYC 系統架構/g, brand.prefix + ' 系統架構')
      .replace(/JYC 實機影片展示/g, brand.prefix + ' 實機影片展示')
      .replace(/JYC 專案/g, brand.prefix + ' 專案')
      .replace(/怡盛物業管理集團/g, brand.short + '物業管理集團')
      .replace(/怡盛智慧管理系統/g, brand.short + '智慧管理系統')
      .replace(/怡盛智慧物業/g, brand.short + '智慧物業')
      .replace(/怡盛物業/g, brand.short + '物業')
      .replace(/JYC/g, brand.prefix)
      .replace(/怡盛/g, brand.short);
  }

  // 替換文字節點（不動 script / style / 屬性）
  function walkAndReplace(node) {
    if (!node) return;
    if (node.nodeType === Node.TEXT_NODE) {
      const newText = applyBrand(node.nodeValue);
      if (newText !== node.nodeValue) node.nodeValue = newText;
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const tag = node.tagName;
    if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return;
    for (let i = 0; i < node.childNodes.length; i++) {
      walkAndReplace(node.childNodes[i]);
    }
  }

  function run() {
    // <title>
    document.title = applyBrand(document.title);

    // <meta name="description">
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = applyBrand(metaDesc.content);

    // <meta property="og:*">
    document.querySelectorAll('meta[property^="og:"]').forEach((m) => {
      if (m.content) m.content = applyBrand(m.content);
    });

    // body 內所有文字
    walkAndReplace(document.body);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
