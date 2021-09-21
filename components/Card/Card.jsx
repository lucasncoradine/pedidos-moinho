import React from 'react'
import PropTypes from 'prop-types'
import { CardContainer } from './card.styled'

export const Card = ({ color, children }) => <CardContainer color={color}>{children}</CardContainer>

Card.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string
}
