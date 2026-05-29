// Screenshot the homepage at multiple breakpoints and capture console errors
import { chromium } from 'playwright'

const URL = process.env.URL || 'http://localhost:3001/'
const widths = [
  { name: 'desktop-1728', w: 1728, h: 1000 },
  { name: 'desktop-1440', w: 1440, h: 900 },
  { name: 'laptop-1280', w: 1280, h: 800 },
  { name: 'narrow-1180', w: 1180, h: 800 },
  { name: 'tablet-768', w: 768, h: 1024 },
  { name: 'mobile-390', w: 390, h: 844 },
]

const browser = await chromium.launch()

for (const { name, w, h } of widths) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h } })
  const page = await ctx.newPage()
  const errs = []
  page.on('pageerror', (e) => errs.push(`pageerror: ${e.message}`))
  page.on('console', (m) => { if (m.type() === 'error') errs.push(`console: ${m.text()}`) })
  await page.goto(URL, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts && document.fonts.ready)
  await page.waitForTimeout(800)
  await page.screenshot({ path: `/tmp/dms-shots/${name}.png`, fullPage: true })
  await page.screenshot({ path: `/tmp/dms-shots/${name}-fold.png`, fullPage: false })
  const overflow = await page.evaluate(() => ({
    docW: document.documentElement.scrollWidth,
    viewW: window.innerWidth,
  }))
  console.log(`${name} (${w}x${h}): docW=${overflow.docW} viewW=${overflow.viewW} overflow=${overflow.docW - overflow.viewW}`)
  if (errs.length) console.log('  errors:', errs)
  await ctx.close()
}

await browser.close()
console.log('done')
