import React from 'react'
import PropTypes from 'prop-types'
import { ProgressBarContent, ProgressBarWrapper } from './progressBar.styled'

export const ProgressBar = ({ progress, total, color }) => (
  <ProgressBarWrapper>
    <ProgressBarContent color={color} width={(progress / total) * 100} />
  </ProgressBarWrapper>
)

ProgressBar.propTypes = {
  color: PropTypes.string,
  progress: PropTypes.number,
  total: PropTypes.number,
}
