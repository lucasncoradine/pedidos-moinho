import { Card, CheckboxGroup, Grid, GridItem, Typography } from '@components'
import { useOrder } from '@contexts'
import React, { useEffect, useState } from 'react'

export const CardCarnes = () => {
  const { updateMeat, size, menu } = useOrder()

  const [options, setOptions] = useState([])

  useEffect(() => {
    setOptions(menu.filter(x => x.type === "Carne").map(x => x.name))
  }, [menu])

  // TODO: Validar seleção minima
  return (
    <Card>
      <Grid spacing={2}>
        <GridItem direction="column">
          <Typography variant="h3">Carnes:</Typography>
          {size && (
            <Typography variant="small">
              Você pode escolher até {size.amountMeat} itens
            </Typography>
          )}
        </GridItem>

        <GridItem>
          <CheckboxGroup
            maxItems={size?.amountMeat}
            options={options}
            onChange={(items) => updateMeat(items)}
          />
        </GridItem>
      </Grid>
    </Card>
  )
}

export default CardCarnes
