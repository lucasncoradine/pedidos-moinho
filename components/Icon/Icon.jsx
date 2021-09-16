import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { IconWrapper } from './icon.styled'

export const Icon = ({ icon, size = 24, color }) => {
  const renderIcon = () => {
    if (typeof icon === 'string') {
      return <Image src={icon} width={size} height={size} />
    }
    const IconElement = icon

    return <IconElement color={color} size={size} />
  }

  return <IconWrapper>{renderIcon()}</IconWrapper>
}

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
}
