import { Card, Grid, GridItem, Typography } from '@components'
import { useOrder } from '@contexts'
import React from 'react'
import PropTypes from 'prop-types'

export const CardResumo = () => {
  const { name, phone, size, garnish, meat, comments } = useOrder()

  return (
    <Card>
      <Grid spacing={2}>
        <GridItem direction="column">
          <Typography variant="h3">Resumo do pedido:</Typography>
        </GridItem>

        <GridItem>
          <Grid spacing={0.5}>
            <GridItem direction="column">
              <Typography weight="regular" variant="p">
                <strong>Nome:</strong> {name}
              </Typography>
            </GridItem>

            <GridItem direction="column">
              <Typography weight="regular" variant="p">
                <strong>Telefone:</strong> {phone}
              </Typography>
            </GridItem>

            <GridItem direction="rocolumnw">
              <Typography weight="regular" variant="p">
                <strong>Tamanho:</strong> {size.description}
              </Typography>
            </GridItem>

            <GridItem direction="column">
              <Typography weight="regular" variant="p">
                <strong>Guarnições:</strong>
              </Typography>

              {garnish.map((item) => (
                <TabSpace>
                  <Typography>{`- ${item}`}</Typography>
                </TabSpace>
              ))}
            </GridItem>

            <GridItem direction="column">
              <Typography weight="regular" variant="p">
                <strong>Carnes:</strong>
              </Typography>

              {meat.map((item) => (
                <TabSpace>
                  <Typography>{`- ${item}`}</Typography>
                </TabSpace>
              ))}
            </GridItem>

            <GridItem direction="column">
              <Typography weight="regular" variant="p">
                <strong>Observações:</strong>
              </Typography>
              <TabSpace>
                <Typography>{comments}</Typography>
              </TabSpace>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Card>
  )
}

const TabSpace = ({ children }) => {
  return <div style={{ marginLeft: 10 }}>{children}</div>
}

TabSpace.propTypes = {
  children: PropTypes.any,
}

CardResumo.propTypes = {}

export default CardResumo
