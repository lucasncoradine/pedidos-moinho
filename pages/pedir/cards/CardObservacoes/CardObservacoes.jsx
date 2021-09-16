import { Card, Grid, GridItem, Input, Typography } from '@components'
import { useOrder } from '@contexts'
import React from 'react'

export const CardObservacoes = () => {
  const { setComments } = useOrder()

  return (
    <Card>
      <Grid spacing={2}>
        <GridItem direction="column">
          <Typography variant="h3">Observações do pedido:</Typography>
          <Typography variant="small">(Opcional)</Typography>
        </GridItem>

        <GridItem col={6} mobileCol={12}>
          <Input
            placeholder="Exemplo: Sem cebola"
            variant="textarea"
            onChange={(value) => setComments(value)}
          />
        </GridItem>
      </Grid>
    </Card>
  )
}

CardObservacoes.propTypes = {}

export default CardObservacoes
