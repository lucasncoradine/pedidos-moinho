import { Button, Card, Grid, GridItem, Icon, Typography } from '@components'
import { Color } from '@styles'
import { lighten } from 'polished'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { AlertOctagon, CheckCircle, Info, X } from 'react-feather'
import { ToastCloseWrapper, ToastIconWrapper, ToastTextWrapper, ToastWrapper } from './toast.styled'

export const Toast = ({ message, onClose, variant = "info", open = false, timeoutSeconds = 5 }) => {
  const variants = {
    error: {
      icon: AlertOctagon,
      color: Color.Error
    },
    info: {
      icon: Info,
      color: Color.Info
    },
    success: {
      icon: CheckCircle,
      color: Color.Success
    }
  }

  const [counter, setCounter] = useState(timeoutSeconds)

  useEffect(() => {
    let openTimeout

    if (open && counter > 0) {
      openTimeout = setTimeout(() => {
        setCounter(prev => prev - 1)
      }, 1000)
    } else {
      setCounter(timeoutSeconds)
      onClose?.()

      clearTimeout(openTimeout)
    }

    return () => clearTimeout(openTimeout)
  }, [open, counter])

  return (
    <ToastWrapper open={open}>
      <Card color={lighten(0.52, variants[variant].color)}>
        <Grid direction="row" justify="space-between" align="center">
          <GridItem>
            <ToastIconWrapper>
              <Icon color={variants[variant].color} icon={variants[variant].icon} />
            </ToastIconWrapper>
          </GridItem>

          <GridItem col={8}>
            <ToastTextWrapper>
              <Typography textAlign="left" weight="bold" color={variants[variant].color}>{message}</Typography>
            </ToastTextWrapper>
          </GridItem>

          <GridItem>
            <ToastCloseWrapper>
              <Button variant="transparent" icon={X} onClick={() => onClose?.()} />
            </ToastCloseWrapper>
          </GridItem>
        </Grid>
      </Card>
    </ToastWrapper>
  )
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool,
  timeoutSeconds: PropTypes.number,
  variant: PropTypes.oneOf(['error', 'info', 'success']),
  onClose: PropTypes.func
}