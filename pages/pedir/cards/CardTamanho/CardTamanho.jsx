import { Card, Grid, GridItem, RadioGroup, Typography } from '@components'
import { useOrder } from '@contexts'
import { SizeModel } from '@models'
import { TamanhosMarmita } from '@static'
import PropTypes from 'prop-types'
import React from 'react'

export const CardTamanho = ({ onDataValid }) => {
  const { updateSize } = useOrder()
  const sizes = TamanhosMarmita.map((x) => new SizeModel(x))

  const options = sizes.map((x) => {
    return { label: x.description, value: x.price }
  })

  const handleChange = (value) => {
    const selectedOption = sizes.find((x) => x.price === value)

    updateSize(selectedOption)
    onDataValid?.(true)
  }

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
