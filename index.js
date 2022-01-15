const bot = require('./bot');

(async () => {
  await bot.run()
})()

setInterval(async () => {
  await bot.run()
  // 24 hours * 60 mins * 60 s * 1000 ms
}, 24 * 60 * 60 * 1000)
