const { TelegramBot, FileSessionStore } = require('bottender');
const { createServer } = require('bottender/express');

const config = require('./bottender.config.js').telegram;

const bot = new TelegramBot({
  accessToken: config.accessToken,
  sessionStore: new FileSessionStore(),
});

bot.onEvent(async context => {
  await context.sendText('Hello World');
});

const server = createServer(bot);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`server is running on ${port} port...`);
});
