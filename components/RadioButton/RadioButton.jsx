import { Typography } from '@components'
import PropTypes from 'prop-types'
import React from 'react'
import { RadioCheck, RadioContainer, RadioLabel } from './radioButton.styled'

export const RadioButton = ({ value, label, checked, onClick }) => {
  return (
    <RadioContainer>
      <RadioLabel checked={checked} onClick={() => onClick?.(value)}>
        <RadioCheck checked={checked} />
        <Typography>{label}</Typography>
      </RadioLabel>
    </RadioContainer>
  )
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}
