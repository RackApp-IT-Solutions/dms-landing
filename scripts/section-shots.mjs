// Take section-by-section screenshots so we can inspect each one closely
import { chromium } from 'playwright'

const URL = 'http://localhost:3001/'
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()
await page.goto(URL, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts && document.fonts.ready)
await page.waitForTimeout(800)

const sections = [
  { name: 'hero', selector: 'section.relative.isolate' },
  { name: 'trustbar', selector: 'main > div > section:nth-of-type(2)' },
  { name: 'problem', selector: 'main > div > section:nth-of-type(3)' },
  { name: 'ecosystem', selector: 'main > div > section:nth-of-type(4)' },
  { name: 'features', selector: 'main > div > section:nth-of-type(5)' },
  { name: 'testimonials', selector: 'main > div > section:nth-of-type(6)' },
  { name: 'cta', selector: 'main > div > section:nth-of-type(7)' },
]

for (const { name, selector } of sections) {
  const el = await page.$(selector)
  if (!el) {
    console.log(`MISS ${name}: ${selector}`)
    continue
  }
  await el.scrollIntoViewIfNeeded()
  await page.waitForTimeout(200)
  await el.screenshot({ path: `/tmp/dms-shots/section-${name}.png` })
  console.log(`OK ${name}`)
}

await browser.close()
