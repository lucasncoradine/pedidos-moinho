import { Button, Grid, GridItem, ProgressBar, Typography } from '@components'
import { useOrder } from '@contexts'
import { Color, Container, PageContainer, TitleContainer } from '@styles'
import React, { useEffect, useState } from 'react'
import { CardCarnes } from './cards/CardCarnes/CardCarnes'
import { CardDados } from './cards/CardDados/CardDados'
import { CardGuarnicoes } from './cards/CardGuarnicoes/CardGuarnicoes'
import { CardObservacoes } from './cards/CardObservacoes/CardObservacoes'
import { CardTamanho } from './cards/CardTamanho/CardTamanho'

const Pedir = () => {
  const totalSteps = 3
  const { makeOrder } = useOrder()

  const [step, setStep] = useState(0)
  const [userDataValid, setUserDataValid] = useState(false)
  const [sizeValid, setSizeValid] = useState(false)
  const [enableNextStep, setEnableNextStep] = useState(false)

  const nextStep = () => {
    if (step < totalSteps) setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    if (step > 0) setStep((prev) => prev - 1)
  }

  const validateStep = () => {
    if (step === 0 && userDataValid && sizeValid) return true

    return false
  }

  useEffect(() => {
    setEnableNextStep(validateStep())
  }, [userDataValid, sizeValid])

  return (
    <PageContainer>
      <TitleContainer>
        <Typography variant="h1">Fazer pedido</Typography>
      </TitleContainer>

      <ProgressBar color={Color.Red} progress={step} total={totalSteps} />

      <Container visible={step === 0}>
        <CardDados onDataValid={(valid) => setUserDataValid(valid)} />
        <CardTamanho onDataValid={(valid) => setSizeValid(valid)} />
      </Container>

      {step === 1 && <CardGuarnicoes />}
      {step === 2 && <CardCarnes />}
      {step === 3 && <CardObservacoes />}

      <Grid direction="row" justify="flex-end">
        {step > 0 && (
          <GridItem col={12}>
            <Button
              label="Voltar"
              variant="outline"
              onClick={() => prevStep()}
            />
          </GridItem>
        )}

        {step < totalSteps && (
          <GridItem>
            <Button
              label="Continuar"
              variant="secondary"
              disabled={!enableNextStep}
              onClick={() => nextStep()}
            />
          </GridItem>
        )}

        {step === totalSteps && (
          <GridItem>
            <Button
              label="Fazer pedido"
              variant="primary"
              onClick={() => makeOrder()}
            />
          </GridItem>
        )}
      </Grid>
    </PageContainer>
  )
}

export default Pedir
