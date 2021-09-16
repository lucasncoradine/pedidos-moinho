import { Card, Grid, GridItem, Input, Typography } from '@components'
import { useOrder } from '@contexts'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const CardDados = ({ onDataValid }) => {
  const { updateUserData } = useOrder()

  const [name, setName] = useState('')
  const [nameError, setNameError] = useState()
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState()

  const validateName = (value) => {
    if (!value || value.length === 0) {
      setNameError('É necessário informar seu nome!')
    } else {
      setNameError(null)
      setName(value)
    }
  }

  const validatePhone = (value) => {
    const rawValue = value
      .replace('(', '')
      .replace(')', '')
      .replace(' ', '')
      .split('-')
      .map((x) => x.trim())
      .join()
      .replace(',', '')

    if (!rawValue || rawValue.length < 11) {
      setPhoneError('É necessário informar seu número de telefone!')
    } else {
      setPhoneError(null)
      setPhone(value)
    }
  }

  useEffect(() => {
    updateUserData(name, phone)
  }, [name, phone])

  useEffect(() => {
    const dataValid = nameError === null && phoneError === null

    onDataValid?.(dataValid)
  }, [nameError, phoneError])

  return (
    <Card>
      <Grid spacing={2}>
        <GridItem>
          <Typography variant="h3">Seus dados:</Typography>
        </GridItem>

        <GridItem col={12} mobileCol={12}>
          <Grid direction="row" mobileDirection="column" spacing={3}>
            <GridItem col={5} mobileCol={12}>
              <Input
                label="Nome:"
                placeholder="Seu nome"
                onChange={() => setNameError('')}
                onBlur={(value) => validateName(value)}
                error={nameError}
              />
            </GridItem>

            <GridItem col={3} mobileCol={12}>
              <Input
                label="Telefone:"
                placeholder="Telefone"
                format="(##) #####-####"
                onChange={() => setPhoneError('')}
                onBlur={(value) => validatePhone(value)}
                error={phoneError}
              />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Card>
  )
}

CardDados.propTypes = {
  onDataValid: PropTypes.func,
}

export default CardDados
