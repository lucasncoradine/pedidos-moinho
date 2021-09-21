import { mobile } from '@styles'
import styled from 'styled-components'

export const ToastWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: ${props => props.open ? '30px' : '-40%'};
  opacity: ${props => props.open ? '1' : '0'};
  pointer-events: ${props => props.open ? 'all' : 'none'};
  transition-property: right, opacity;
  transition-duration: .4s;
  transition-timing-function: ease-out;
  min-width: 400px;

  ${mobile} {
    right: ${props => props.open ? '0' : '-40%'};
    min-width: 100%;
    padding: 0 10px;
  }
`
export const ToastIconWrapper = styled.div`
  margin-right: 10px;
`
export const ToastTextWrapper = styled.div``