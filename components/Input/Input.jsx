import { Typography } from '@components'
import { Color } from '@styles'
import PropTypes from 'prop-types'
import React from 'react'
import NumberFormat from 'react-number-format'
import {
  InputElement,
  InputError,
  InputLabel,
  InputWrapper,
} from './input.styled'

export const Input = ({
  value,
  label,
  placeholder,
  error,
  onChange,
  onBlur,
  variant = 'input',
  format,
}) => (
  <InputWrapper>
    {label && (
      <InputLabel>
        <Typography>{label}</Typography>
      </InputLabel>
    )}

    {!format ? (
      <InputElement
        as={variant}
        error={error}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        onBlur={(e) => onBlur?.(e.target.value)}
        rows={variant === 'textarea' ? 3 : undefined}
      />
    ) : (
      <NumberFormat
        placeholder="Telefone com DDD"
        format={format}
        onValueChange={(values) => onChange?.(values.formattedValue)}
        onBlur={(e) => onBlur?.(e.target.value)}
      />
    )}

    {error && (
      <InputError>
        <Typography variant="small" color={Color.Error}>
          {error}
        </Typography>
      </InputError>
    )}
  </InputWrapper>
)

Input.propTypes = {
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['input', 'textarea']),
  format: PropTypes.string,
}
