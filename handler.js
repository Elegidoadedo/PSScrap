'use strict'
const { chromium } = require('playwright')
const TelegramBot = require('node-telegram-bot-api')
const { shops} = require('./shops');

// https://github.com/yagop/node-telegram-bot-api/issues/319#issuecomment-324963294
// Fixes an error with Promise cancellation
process.env.NTBA_FIX_319 = 'test'


module.exports.ps5Scrap = async (event, context) => {
  (async () => {
    // Create browser
    const browser = await chromium.launch({ headless: false })

    for (const shop of shops) {
      const { checkFunc, url, vendor, img } = shop
      const page = await browser.newPage()
      await page.goto(url)
      const hasStock = await checkFunc({ page })
      // always close server
      console.log(`${vendor}: has stock ? ${hasStock}`)
      if (!hasStock) {
        const bot = new TelegramBot(process.env.BOT_TKN)
        const id = process.env.GROUP_ID
        await page.screenshot({ path: `${img}.png` })
        await bot.sendPhoto(id, `${img}.png`, { caption: `Encontrado! -> ${url}` }).catch(console.log)
      }
      await page.close()
    };

    await browser.close()
  })()
}
