import PropTypes from 'prop-types'
import React from 'react'
import { GridContainer } from './grid.styled'

export const Grid = ({
  justify,
  direction = 'column',
  align,
  spacing,
  children,
}) => {
  return (
    <GridContainer
      direction={direction}
      justify={justify}
      align={align}
      spacing={spacing}
    >
      {children}
    </GridContainer>
  )
}

Grid.propTypes = {
  align: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
  justify: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
  ]),
  direction: PropTypes.string,
  spacing: PropTypes.number,
  children: PropTypes.node,
}
