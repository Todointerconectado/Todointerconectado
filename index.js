// Librerias
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    defaultViewport: {
      with: 1920,
      height: 1080
    },
    args: ['--window-size=1920, 1080']
  })

  const page = await browser.newPage()

  // const urlRutas = "https://learn.microsoft.com/es-es/users/franciscocarusso/achievements?source=docs"
  // const urlRuta1 = 'https://learn.microsoft.com/es-es/training/paths/create-cloud-native-apps-with-azure-open-source'
  const urlRuta2 = 'https://learn.microsoft.com/es-es/training/paths/az-400-manage-source-control'
  // const urlRuta3 = 'https://learn.microsoft.com/es-es/training/paths/manage-project-lifecycle-github'

  await page.goto(urlRuta2)

  // await page.waitForSelector('#trophies-section ol')
  // await page.click('.docs-sign-in')
  // await page.waitForSelector('input[type="email"]')
  // await page.type('input[type="email"]', 'francisconicolascarusso@gmail.com')
  // await page.waitForTimeout(5000)
  // await page.click('#idSIButton9')

  const insigniasRutas = await page.evaluate(() => {
    const itemsImg = [...document.querySelectorAll('#trophies-section ol[class="columns is-multiline is-full-height"] li[class="column is-6-tablet is-3-desktop"] div[class="card is-full-height"] figure[class="card-header-image"] img')]

    const logos = []
    for (const itemImg of itemsImg) {
      logos.push(itemImg.src)
    }

    const itemsRutaUno = [...document.querySelectorAll('div[class="image is-96x96 is-hidden-mobile"] img[role="presentation"]')]

    const logosRutaUno = []
    for (const itemRutaUno of itemsRutaUno) {
      logosRutaUno.push(itemRutaUno.src)
    }

    return itemsRutaUno
  })

  console.log(insigniasRutas)

  await browser.close()
})()
