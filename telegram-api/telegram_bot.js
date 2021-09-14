import TelegramBot from 'node-telegram-bot-api'
import { config as dotEnvConfig } from 'dotenv'

dotEnvConfig()

console.log('Telegram bot started!')

let chatId
const bot = new TelegramBot(process.env.TELEGRAM_API_KEY, {
  polling: true,
})

bot.onText(/\/start/, (msg) => {
  chatId = msg.chat.id

  bot.sendMessage(msg.chat.id, `Olá, bem vindo à Moinho!`)
})

bot.onText(/\/chatid/, (msg) => {
  bot.sendMessage(msg.chat.id, `O ID desse chat é: ${msg.chat.id}`)
})

export const sendMessage = (message) => {
  if (chatId) bot.sendMessage(chatId, message)
}
