import { Card, CheckboxGroup, Grid, GridItem, Typography } from '@components'
import { useOrder } from '@contexts'
import React, { useEffect, useState } from 'react'

export const CardGuarnicoes = () => {
  const { updateGarnish, size, menu } = useOrder()

  const [options, setOptions] = useState([])

  useEffect(() => {
    setOptions(menu.filter(x => ['Salada', 'Guarnicao'].includes(x.type)).map(x => x.name))
  }, [menu])

  // TODO: Validar seleção minima
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

export default CardGuarnicoes
