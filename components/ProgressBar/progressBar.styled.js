import { Color } from '@styles'
import styled from 'styled-components'

export const ProgressBarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 6px;
  border-radius: 100px;
  margin-bottom: 10px;
`

export const ProgressBarContent = styled.div`
  width: ${(props) => `${props.width}%`};
  background-color: ${(props) => props.color || Color.Yellow};
  border-radius: 100px;
  transition: width 0.2s ease-out;
`
