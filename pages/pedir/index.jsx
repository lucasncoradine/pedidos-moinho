import {
  Button,
  Grid,
  GridItem,
  MessageBox,
  ProgressBar,
  Typography,
} from '@components'
import { useOrder } from '@contexts'
import { Color, Container, PageContainer, TitleContainer } from '@styles'
import { Utils } from '@utils'
import React, { useEffect, useState } from 'react'
import { CardCarnes } from './cards/CardCarnes/CardCarnes'
import { CardDados } from './cards/CardDados/CardDados'
import { CardGuarnicoes } from './cards/CardGuarnicoes/CardGuarnicoes'
import { CardObservacoes } from './cards/CardObservacoes/CardObservacoes'
import { CardResumo } from './cards/CardResumo/CardResumo'
import { CardTamanho } from './cards/CardTamanho/CardTamanho'

const Pedir = () => {
  const totalSteps = 3
  const { makeOrder } = useOrder()

  const [step, setStep] = useState(0)
  const [userDataValid, setUserDataValid] = useState(false)
  const [sizeValid, setSizeValid] = useState(false)
  const [enableNextStep, setEnableNextStep] = useState(false)
  const [showMessage, setShowMessage] = useState()
  const [responseMessage, setResponseMessage] = useState()

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

  const handleOrder = async () => {
    const response = await makeOrder()

    setShowMessage(response.data.ok ? 'success' : 'error')
    setResponseMessage(response.message || 'Pedido realizado com sucesso!')
    setStep(totalSteps + 1)
  }

  useEffect(() => {
    setEnableNextStep(validateStep())
  }, [userDataValid, sizeValid])

  const renderSteps = () => {
    return (
      <>
        <TitleContainer>
          <Typography variant={Utils.isMobile() ? 'h2' : 'h1'}>
            Monte sua marmita
          </Typography>
        </TitleContainer>

        <ProgressBar color={Color.Red} progress={step} total={totalSteps} />

        <Container visible={step === 0}>
          <CardDados onDataValid={(valid) => setUserDataValid(valid)} />
          <CardTamanho onDataValid={(valid) => setSizeValid(valid)} />
        </Container>

        {step === 1 && <CardGuarnicoes />}
        {step === 2 && <CardCarnes />}
        {step === 3 && <CardObservacoes />}
      </>
    )
  }

  const renderComplete = () => {
    return (
      <>
        <MessageBox message={responseMessage} variant={showMessage} />

        <Grid align="center">
          <GridItem col={12}>
            <CardResumo />
          </GridItem>
        </Grid>
      </>
    )
  }

  return (
    <PageContainer>
      {!showMessage && renderSteps()}

      {showMessage && renderComplete()}

      <Grid
        direction="row"
        mobileDirection="column"
        spacing={2}
        justify="flex-end"
      >
        {step > 0 && step <= totalSteps && (
          <GridItem col={12}>
            <Button
              label="Voltar"
              variant="outline"
              onClick={() => prevStep()}
            />
          </GridItem>
        )}

        {step < totalSteps && (
          <GridItem mobileCol={12}>
            <Button
              label="Continuar"
              variant="secondary"
              disabled={!enableNextStep}
              onClick={() => nextStep()}
            />
          </GridItem>
        )}

        {step === totalSteps && (
          <GridItem mobileCol={12}>
            <Button
              label="Fazer pedido"
              variant="primary"
              onClick={() => handleOrder()}
            />
          </GridItem>
        )}

        {step > totalSteps && (
          <GridItem justify="center" col={12}>
            <Button
              mobileCol={12}
              label="Voltar para o ínicio"
              variant="secondary"
              href="/pedir"
            />
          </GridItem>
        )}
      </Grid>
    </PageContainer>
  )
}

export default Pedir
