import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts && document.fonts.ready)
await page.waitForTimeout(800)

// Find the CTA section by its bg gradient
const cta = await page.locator('section').nth(6) // hero, trust, problem, ecosystem, features, testimonials, cta
await cta.scrollIntoViewIfNeeded()
await page.waitForTimeout(500)
await cta.screenshot({ path: '/tmp/dms-shots/cta-only.png' })
console.log('done')
await browser.close()
