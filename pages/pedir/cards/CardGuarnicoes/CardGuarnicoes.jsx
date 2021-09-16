import { Card, CheckboxGroup, Grid, GridItem, Typography } from '@components'
import { useOrder } from '@contexts'
import React from 'react'
import { Cardapio } from '@static'
import { MenuModel } from '@models'

export const CardGuarnicoes = () => {
  const { updateGarnish } = useOrder()

  const menu = new MenuModel(Cardapio)
  const options = [...menu.guarnish, ...menu.salad]

  const { size } = useOrder()

  return (
    <Card>
      <Grid spacing={2}>
        <GridItem direction="column">
          <Typography variant="h3">Guarnições e Saladas:</Typography>
          {size && (
            <Typography variant="small">
              Você pode escolher até {size.amountGarnish} itens
            </Typography>
          )}
        </GridItem>

        <GridItem>
          <CheckboxGroup
            maxItems={size?.amountGarnish}
            options={options}
            onChange={(items) => updateGarnish(items)}
          />
        </GridItem>
      </Grid>
    </Card>
  )
}
