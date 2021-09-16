import styled, { keyframes } from 'styled-components'

const animateIcon = keyframes`
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1);
  }
`

const animateText = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const MessageIconContainer = styled.div`
  animation: ${animateIcon} 0.6s ease-out;
`

export const MessageBoxText = styled.div`
  animation: ${animateText} 0.6s ease-out;
`

export const MessageBoxContainer = styled.div`
  padding: 50px 20px;
`
