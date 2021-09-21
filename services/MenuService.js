import axios from "axios"

export const getItens = async (type) => {
  const result = await axios.get('/api/cardapio/get', {
    params: {
      type
    }
  })

  return result.data
}

export const getSizes = async (type) => {
  const result = await axios.get('/api/tamanhos/get', {
    params: {
      type
    }
  })

  return result.data
}
