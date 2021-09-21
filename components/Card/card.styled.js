import { BoxShadow, Color } from '@styles'
import styled from 'styled-components'

export const CardContainer = styled.div`
  box-shadow: ${BoxShadow};
  background-color: ${props => props.color || Color.White};
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
`
