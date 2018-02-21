const { TelegramBot, RedisSessionStore } = require('bottender');
const { createServer } = require('bottender/express');

const config = require('./bottender.config.js').telegram;

const bot = new TelegramBot({
  accessToken: config.accessToken,
  sessionStore: new RedisSessionStore(),
});

bot.onEvent(async context => {
  await context.sendText('Hello World');
});

const server = createServer(bot);

server.listen(5000, () => {
  console.log('server is running on 5000 port...');
});
