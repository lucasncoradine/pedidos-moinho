import { TelegramBot } from 'apis/telegram/telegram-api'
import { Utils } from '@utils'
import PropTypes from 'prop-types'
import React, { createContext, useState } from 'react'

const OrderContext = createContext()

export const OrderProvider = ({ children }) => {
  const bot = new TelegramBot()

  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [sector, setSector] = useState()
  const [size, setSize] = useState()
  const [garnish, setGarnish] = useState([])
  const [meat, setMeat] = useState([])
  const [comments, setComments] = useState('')
  const [menu, setMenu] = useState([])
  const [sizes, setSizes] = useState([])

  const updateUserData = (userName, userPhone, userSector) => {
    if (userName) setName(userName)
    if (userPhone) setPhone(userPhone)
    if (userSector) setSector(userSector)
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
      `${sector && `<b>Setor</b>: ${sector}`}`,
      `<b>Tamanho</b>: ${size.type.toUpperCase()}`,
      ``,
      `<b>Guarnições</b>:`,
      `${garnish.map((item) => `   - ${item}`).join('\n')}`,
      ``,
      `<b>Carnes</b>:`,
      `${meat.map((item) => `   - ${item}`).join('\n')}`,
      ``,
      `<b>Observações</b>:`,
      `${comments || '<i>Nenhuma</i>'}`,
    ]

    return bot.sendLines(lines)
  }

  return (
    <OrderContext.Provider
      value={{
        name,
        phone,
        sector,
        size,
        garnish,
        meat,
        comments,
        menu,
        sizes,
        updateUserData,
        updateSize,
        makeOrder,
        updateGarnish,
        updateMeat,
        setComments,
        setMenu,
        setSizes
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
    sector: context.sector,
    size: context.size,
    garnish: context.garnish,
    meat: context.meat,
    comments: context.comments,
    menu: context.menu,
    sizes: context.sizes,
    updateUserData: context.updateUserData,
    updateSize: context.updateSize,
    makeOrder: context.makeOrder,
    updateGarnish: context.updateGarnish,
    updateMeat: context.updateMeat,
    setComments: context.setComments,
    setMenu: context.setMenu,
    setSizes: context.setSizes
  }
}
