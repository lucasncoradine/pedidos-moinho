import { Color } from '@styles'
import styled, { keyframes } from 'styled-components'

const Animation = keyframes`
  0% { transform: rotate(0deg) }
  50% { transform: rotate(180deg) }
  100% { transform: rotate(360deg) }
`

const TextAnimation = keyframes`
  0% {opacity: 1}
  50% {opacity: 0.5}
  100% {opacity: 1}
`

export const LoaderWrapper = styled.div`  
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: inline-block;
  overflow: hidden;
  background: none;

  ${props => props.fullScreen && `
    background: ${Color.White};
    opacity: 0.8;
    backdrop-filter: blur(2px);  
    z-index: 999;
  `}
`
export const LoaderElement = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & div:first-child {
    box-sizing: content-box;
    animation: ${Animation} 1s linear infinite;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    box-shadow: 0 2.6px 0 0 #800000;
    transform-origin: 38px 39.3px;
  }
`
export const TextWrapper = styled.div`
  margin-top: 50px;
  animation: ${TextAnimation} 2s ease-out infinite;
` 