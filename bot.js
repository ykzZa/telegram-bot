const TelegramBot = require('node-telegram-bot-api');

// Create a new bot instance with the token passed as a command line argument
const bot = new TelegramBot(process.argv[2], { polling: true });

// Listen for the /start command and send a "Hello World" message
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello World');
});
