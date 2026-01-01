const { chromium } = require('playwright');
const pages = ['CIE','Edexcel','OCR','OxfordAqa'];
const base = 'http://127.0.0.1:8080/Grade_Boundaries_A_Levels/';
(async()=>{
  const browser = await chromium.launch();
  const context = await browser.newContext();
  for (const p of pages) {
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push({type: 'pageerror', message: e.message}));
    page.on('console', msg => { if (msg.type() === 'error') errors.push({type: 'console', text: msg.text()}); });

    const url = base + p + '/';
    console.log('\n==== Loading', url, '====');
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      // allow engine + charts to initialise
      await page.waitForTimeout(1600);
      const hasInit = await page.evaluate(() => typeof initExamDashboard === 'function');
      const canvases = await page.$$eval('canvas', nodes => nodes.map(c => ({w: c.width, h: c.height, clientW: c.clientWidth, clientH: c.clientHeight})));
      console.log(JSON.stringify({page: p, url, errors, hasInit, canvases}, null, 2));
    } catch (e) {
      console.error('ERROR loading', url, e.message);
    }
    await page.close();
  }
  await browser.close();
  process.exit(0);
})().catch(e=>{ console.error(e); process.exit(2); });
