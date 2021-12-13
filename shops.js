module.exports.shops = [
  {
    vendor: 'Game',
    img: 'game',
    url: 'https://www.game.es/consola-playstation-5-playstation-5-183224',
    checkFunc: async ({ page }) => {
      const content = await page.textContent('.product-quick-actions')
      return content.includes('Producto no disponible') === false
    }
   },
  // {
  //   vendor: 'Fnac',
  //   img: 'fnac',
  //   url: 'https://www.fnac.es/Consola-PlayStation-5-Videoconsola-Consola/a7724798',
  //   checkFunc: async ({ page }) => {
  //     // check if no available icon exist
  //     const notAvailableIcon = await page.$$('.f-buyBox-availabilityStatus-unavailable')
  //     return notAvailableIcon.length === 0
  //   }
  // },
  // {
  //   vendor: 'Amazon',
  //   img: 'amz',

  //   url: 'https://www.amazon.es/Sony-PS5-PlayStation-Consola-Est%C3%A1ndar/dp/B09DT5MB16/',
  //   checkFunc: async ({ page }) => {
  //     // check if no available icon exist
  //     const addToCartBtn = await page.$$('#add-to-cart-button')
  //     return addToCartBtn.length > 0
  //   }
  // },
  // {
  //   vendor: 'El Corte Inglés',
  //   img: 'ci',
  //   url: 'https://www.elcorteingles.es/videojuegos/A37046604-consola-playstation-5/',
  //   checkFunc: async ({ page }) => {
  //     const content = await page.textContent('#js_add_to_cart_desktop')
  //     return content.includes('Agotado temporalmente') === false
  //   }
  // },
  // {
  //   vendor: 'Mediamarkt',
  //   url: 'https://www.mediamarkt.es/es/product/_consola-sony-ps5-825-gb-4k-hdr-blanco-1487016.html',
  //   checkFunc: async ({ page }) => {
  //     const wait = (delay, ...args) => new Promise(resolve => setTimeout(resolve, delay, ...args))
  //     const res = wait(3000).then(async () => {
  //       return page.textContent('[data-product-online-status="CURRENTLY_NOT_AVAILABLE"]')
  //         .then((res) => {
  //           return res.includes('Este artículo no está disponible actualmente') === false
  //         })
  //     })
  //     console.log({ res })
  //     return res
  //   }
  // } TODO
]
