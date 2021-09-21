import { Grid, GridItem, Icon, Typography } from '@components'
import { Color } from '@styles'
import PropTypes from 'prop-types'
import React from 'react'
import { AlertOctagon, CheckCircle, Info } from 'react-feather'
import {
  MessageBoxContainer,
  MessageBoxText,
  MessageIconContainer
} from './messageBox.styled'

export const MessageBox = ({ message, icon, variant = 'info' }) => {
  const variants = {
    success: {
      color: Color.Success,
      icon: CheckCircle,
    },
    error: {
      color: Color.Error,
      icon: AlertOctagon,
    },
    info: {
      color: Color.Info,
      icon: Info,
    },
  }

  return (
    <MessageBoxContainer variant={variant}>
      <Grid justify="center" align="center">
        <MessageIconContainer>
          <GridItem>
            <Icon
              color={variants[variant].color}
              icon={icon || variants[variant].icon}
              size={76}
            />
          </GridItem>
        </MessageIconContainer>

        <GridItem>
          <MessageBoxText>
            <Typography
              textAlign="center"
              color={variants[variant].color}
              variant="h2"
            >
              {message}
            </Typography>
          </MessageBoxText>
        </GridItem>
      </Grid>
    </MessageBoxContainer>
  )
}

MessageBox.propTypes = {
  message: PropTypes.string.isRequired,
  icon: PropTypes.object,
  variant: PropTypes.oneOf(['success', 'error', 'info']),
}
