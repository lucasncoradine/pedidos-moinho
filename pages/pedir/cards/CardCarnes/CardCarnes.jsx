import { Card, CheckboxGroup, Grid, GridItem, Typography } from '@components'
import { useOrder } from '@contexts'
import React from 'react'
import { Cardapio } from '@static'
import { MenuModel } from '@models'

export const CardCarnes = () => {
  const { updateMeat } = useOrder()

  const menu = new MenuModel(Cardapio)
  const options = menu.meat

  const { size } = useOrder()

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
