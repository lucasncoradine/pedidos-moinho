import axios from 'axios'

export class TelegramBot {
  #token
  #chatId
  #apiUrl

  constructor() {
    this.#token = process.env.TELEGRAM_API_TOKEN
    this.#chatId = process.env.TELEGRAM_CHAT_ID
    this.#apiUrl = `${process.env.TELEGRAM_API_URL}/bot${this.#token}`
  }

  sendMessage = (message) => {
    const sendMessageUrl = `${this.#apiUrl}/sendMessage`

    axios.get(sendMessageUrl, {
      params: {
        chat_id: this.#chatId,
        text: message,
        parse_mode: 'HTML',
      },
    })
  }

  sendLines = (array) => {
    if (array && array.length > 0) {
      const lines = array.join('\n')

      this.sendMessage(lines)
    }
  }
}
