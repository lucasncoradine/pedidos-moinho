import React from 'react'
import PropTypes from 'prop-types'
import { GridItemContainer } from './grid.styled'

export const GridItem = ({
  col,
  direction = 'row',
  justify,
  align,
  children,
}) => {
  return (
    <GridItemContainer
      direction={direction}
      col={col}
      justify={justify}
      align={align}
    >
      {children}
    </GridItemContainer>
  )
}

GridItem.propTypes = {
  align: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
  children: PropTypes.any,
  col: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
  direction: PropTypes.string,
}
