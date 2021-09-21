import styled from 'styled-components'

export const ToastWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: ${props => props.open ? '30px' : '-40%'};
  opacity: ${props => props.open ? '1' : '0'};
  transition-property: right, opacity;
  transition-duration: .4s;
  transition-timing-function: ease-out;
  min-width: 400px;
`
export const ToastIconWrapper = styled.div``
export const ToastTextWrapper = styled.div``
export const ToastCloseWrapper = styled.div`
  a {
    padding-left: 0;
    padding-right: 0;
  }
`