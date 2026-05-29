import { chromium } from 'playwright'

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } })
const page = await ctx.newPage()
await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' })
await page.waitForTimeout(800)

const info = await page.evaluate(() => {
  // Find the 3 hero stats by their text content
  const stats = Array.from(document.querySelectorAll('.text-2xl.lg\\:text-3xl.font-bold.text-white.tracking-tight'))
  return {
    viewport: window.innerWidth,
    statsCount: stats.length,
    stats: stats.map(s => {
      const r = s.getBoundingClientRect()
      return {
        text: s.textContent?.trim(),
        rect: { left: Math.round(r.left), top: Math.round(r.top), width: Math.round(r.width), height: Math.round(r.height) },
      }
    }),
    // Also find any element with white background near bottom of hero
    middleArea: Array.from(document.elementsFromPoint(195, 800)).map(e => e.tagName + '.' + Array.from(e.classList).join('.')).slice(0, 5),
  }
})

console.log(JSON.stringify(info, null, 2))
await browser.close()
