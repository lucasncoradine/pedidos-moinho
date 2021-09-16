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

  sendMessage = async (message) => {
    const sendMessageUrl = `${this.#apiUrl}/sendMessage`

    const result = await axios.get(sendMessageUrl, {
      params: {
        chat_id: this.#chatId,
        text: message,
        parse_mode: 'HTML',
      },
    })

    return result
  }

  sendLines = async (array) => {
    let result = 'Array vazio. Mensagem não enviada!'

    if (array && array.length > 0) {
      const lines = array.join('\n')

      result = await this.sendMessage(lines)
    }

    return result
  }
}
