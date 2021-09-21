import { Card, Grid, GridItem, RadioGroup, Typography } from '@components'
import { useOrder } from '@contexts'
import { SizeModel } from '@models'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

export const CardTamanho = ({ onDataValid }) => {
  const { updateSize, sizes } = useOrder()
  const [options, setOptions] = useState([])

  const handleChange = (value) => {
    const selectedOption = new SizeModel(sizes.find((x) => x.Tipo.toLowerCase() === value))

    updateSize(selectedOption)
    onDataValid?.(true)
  }

  useEffect(() => {
    setOptions(sizes.map(x => {
      return {
        label: x.Tipo,
        value: x.Tipo.toLowerCase()
      }
    }))
  }, [sizes])

  return (
    <Card>
      <Grid spacing={2}>
        <GridItem>
          <Typography variant="h3">Escolha o tamanho:</Typography>
        </GridItem>

        <GridItem>
          <RadioGroup options={options} onChange={handleChange} />
        </GridItem>
      </Grid>
    </Card>
  )
}

CardTamanho.propTypes = {
  onDataValid: PropTypes.func,
}

export default CardTamanho
