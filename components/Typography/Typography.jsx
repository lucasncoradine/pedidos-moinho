import React from 'react'
import PropTypes from 'prop-types'
import { TypographyElement } from './typography.styled'

export const Typography = ({
  variant = 'p',
  color,
  weight,
  textAlign = 'left',
  children,
}) => (
  <TypographyElement
    color={color}
    as={variant}
    textAlign={textAlign}
    weight={weight}
  >
    {children}
  </TypographyElement>
)

Typography.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'p', 'small', 'span']),
  color: PropTypes.string,
  weight: PropTypes.oneOf(['regular', 'bold', 'extrabold']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node,
}
