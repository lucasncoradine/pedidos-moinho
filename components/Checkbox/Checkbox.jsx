import { Icon, Typography } from '@components'
import { Color } from '@styles'
import PropTypes from 'prop-types'
import React from 'react'
import { Check } from 'react-feather'
import {
  CheckboxCheck,
  CheckboxCheckmark,
  CheckboxContainer,
  CheckboxLabel
} from './checkbox.styled'

export const Checkbox = ({ label, checked, onChange, disabled }) => {
  const handleChange = () => {
    if (!disabled) onChange?.(!checked, label)
  }

  return (
    <CheckboxContainer>
      <CheckboxLabel disabled={disabled} checked={checked}>
        <CheckboxCheck tabIndex={0} type="checkbox" name={label} checked={checked} onChange={handleChange} />
        <Typography>{label}</Typography>

        <CheckboxCheckmark>
          <Icon icon={Check} size={20} color={Color.White} />
        </CheckboxCheckmark>
      </CheckboxLabel>
    </CheckboxContainer>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
}
