const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.ubereats.com/au/store/todco-the-oakleigh-doughnut-co/volK8hBMQ3CzYjKHQb5LQg');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();