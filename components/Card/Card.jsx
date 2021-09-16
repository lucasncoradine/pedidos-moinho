import React from 'react'
import PropTypes from 'prop-types'
import { CardContainer } from './card.styled'

export const Card = ({ children }) => <CardContainer>{children}</CardContainer>

Card.propTypes = {
  children: PropTypes.any,
}
