const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris("MTAwNDUyODEzMTIyMDE3Njk2Nw.Gu1cHB.RxguzNkyOoU3EtR_yO0HGH3TDdGhIvVI4T3Bls");

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
