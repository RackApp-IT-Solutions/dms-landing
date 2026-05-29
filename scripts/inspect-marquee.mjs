import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' })

const result = await page.evaluate(() => {
  const track = document.querySelector('.marquee-track')
  if (!track) return 'NOT FOUND'
  const cs = getComputedStyle(track)
  const firstChild = track.firstElementChild
  const childCs = firstChild ? getComputedStyle(firstChild) : null
  return {
    track: {
      display: cs.display,
      flexDirection: cs.flexDirection,
      width: cs.width,
      gap: cs.gap,
      animation: cs.animation,
      childrenCount: track.childElementCount,
      classes: track.className,
    },
    firstChild: firstChild && {
      display: childCs.display,
      width: firstChild.getBoundingClientRect().width,
      height: firstChild.getBoundingClientRect().height,
      classes: firstChild.className,
      text: firstChild.textContent?.trim().slice(0, 30),
    },
    parentOverflow: getComputedStyle(track.parentElement).overflow,
  }
})

console.log(JSON.stringify(result, null, 2))
await browser.close()
