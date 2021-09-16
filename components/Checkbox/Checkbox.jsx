import { Icon, Typography } from '@components'
import { Color } from '@styles'
import PropTypes from 'prop-types'
import React from 'react'
import { Check } from 'react-feather'
import {
  CheckboxCheck,
  CheckboxCheckmark,
  CheckboxContainer,
  CheckboxLabel,
} from './checkbox.styled'

export const Checkbox = ({ label, checked, onChange, disabled }) => {
  return (
    <CheckboxContainer>
      <CheckboxLabel
        disabled={disabled}
        checked={checked}
        onClick={() => onChange?.(!checked, label)}
      >
        <CheckboxCheck checked={checked}>
          <CheckboxCheckmark>
            <Icon icon={Check} size={20} color={Color.White} />
          </CheckboxCheckmark>
        </CheckboxCheck>
        <Typography>{label}</Typography>
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
