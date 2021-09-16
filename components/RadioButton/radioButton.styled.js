import { Color } from '@styles'
import { lighten } from 'polished'
import styled from 'styled-components'

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
`
export const RadioCheck = styled.span`
  display: flex;
  height: 20px;
  width: 20px;
  margin-right: 10px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  transition: background-color 0.1s ease-out;
  background-color: ${(props) =>
    props.checked ? props.color || Color.Red : Color.Gray};

  &:after {
    content: '';
    border-radius: 100px;
    background-color: ${Color.White};
    transform: ${(props) => (props.checked ? 'scale(1)' : 'scale(0)')};
    width: 8px;
    height: 8px;
    transition: all 0.1s ease-out;
  }
`
export const RadioLabel = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  display: flex;
  align-items: center;

  &:hover {
    & > ${RadioCheck} {
      background-color: ${(props) =>
        !props.checked ? lighten(0.1, Color.Gray) : lighten(0.1, Color.Red)};
    }
  }
`
