import { Typography } from '@components'
import PropTypes from 'prop-types'
import React from 'react'
import { Icon } from '../Icon/Icon'
import { ButtonIconContainer, StyledButton } from './button.styled'

export const Button = ({
  label,
  variant = 'primary',
  icon,
  iconPosition = 'right',
  href,
  disabled = false,
  onClick,
}) => (
  <StyledButton
    disabled={disabled}
    variant={variant}
    onClick={() => onClick?.()}
    href={href}
  >
    {icon && iconPosition === 'left' && (
      <ButtonIconContainer iconPosition={label && iconPosition}>
        <Icon icon={icon} />
      </ButtonIconContainer>
    )}

    {label && <Typography weight="bold">{label}</Typography>}

    {icon && iconPosition === 'right' && (
      <ButtonIconContainer iconPosition={label && iconPosition}>
        <Icon icon={icon} />
      </ButtonIconContainer>
    )}
  </StyledButton>
)

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'transparent', 'outline']),
  icon: PropTypes.object,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  href: PropTypes.string,
  onClick: PropTypes.func,
}
