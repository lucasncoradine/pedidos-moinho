import { TelegramBot } from '@telegram-bot'
import { Utils } from '@utils'
import PropTypes from 'prop-types'
import React, { createContext, useState } from 'react'

const OrderContext = createContext()

export const OrderProvider = ({ children }) => {
  const bot = new TelegramBot()

  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [size, setSize] = useState()
  const [garnish, setGarnish] = useState([])
  const [meat, setMeat] = useState([])
  const [comments, setComments] = useState('')

  const updateUserData = (userName, userPhone) => {
    if (userName) setName(userName)
    if (userPhone) setPhone(userPhone)
  }

  const updateSize = (newSize) => {
    setSize(newSize)
  }

  const updateGarnish = (items) => {
    setGarnish(items)
  }

  const updateMeat = (items) => {
    setMeat(items)
  }

  const makeOrder = async () => {
    const lines = [
      `<b>Novo Pedido</b>`,
      `<i>Feito em: ${new Date().toLocaleString()}</i>`,
      ``,
      `<b>Nome</b>: ${name}`,
      `<b>Telefone</b>: ${phone}`,
      `<b>Tamanho</b>: ${size.description.toUpperCase()}`,
      ``,
      `<b>Guarnições</b>:`,
      `${garnish.map((item) => `   - ${item}`).join('\n')}`,
      ``,
      `<b>Carnes</b>:`,
      `${meat.map((item) => `   - ${item}`).join('\n')}`,
      ``,
      `<b>Observações</b>:`,
      `${comments}`,
    ]

    return bot.sendLines(lines)
  }

  return (
    <OrderContext.Provider
      value={{
        name,
        phone,
        size,
        garnish,
        meat,
        comments,
        updateUserData,
        updateSize,
        makeOrder,
        updateGarnish,
        updateMeat,
        setComments,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

OrderProvider.propTypes = {
  children: PropTypes.any,
}

export const useOrder = () => {
  const context = Utils.validateContext(OrderContext)

  return {
    name: context.name,
    phone: context.phone,
    size: context.size,
    garnish: context.garnish,
    meat: context.meat,
    comments: context.comments,
    updateUserData: context.updateUserData,
    updateSize: context.updateSize,
    makeOrder: context.makeOrder,
    updateGarnish: context.updateGarnish,
    updateMeat: context.updateMeat,
    setComments: context.setComments,
  }
}
