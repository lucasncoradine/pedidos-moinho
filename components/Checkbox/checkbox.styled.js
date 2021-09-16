import { Color } from '@styles'
import { lighten } from 'polished'
import styled from 'styled-components'

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CheckboxCheckmark = styled.div``
export const CheckboxCheck = styled.span`
  display: flex;
  height: 20px;
  width: 20px;
  padding: 2px;
  margin-right: 10px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  transition: background-color 0.1s ease-out;
  background-color: ${(props) =>
    props.checked ? props.color || Color.Red : Color.Gray};

  & > ${CheckboxCheckmark} {
    transform: ${(props) => (props.checked ? 'scale(1)' : 'scale(0)')};
    transition: all 0.1s ease-out;
  }
`
export const CheckboxLabel = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  display: flex;
  align-items: center;

  ${(props) => props.disabled && `opacity: 0.3; pointer-events: none;`}

  &:hover {
    & > ${CheckboxCheck} {
      background-color: ${(props) =>
        !props.checked ? lighten(0.1, Color.Gray) : lighten(0.1, Color.Red)};
    }
  }
`
