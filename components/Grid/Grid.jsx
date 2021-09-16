import PropTypes from 'prop-types'
import React from 'react'
import { GridContainer } from './grid.styled'

export const Grid = ({
  justify,
  direction = 'column',
  mobileDirection = 'column',
  align,
  spacing,
  children,
}) => {
  return (
    <GridContainer
      mobileDirection={mobileDirection}
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
  mobileDirection: PropTypes.string,
  spacing: PropTypes.number,
  children: PropTypes.node,
}
