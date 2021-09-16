import { Color } from '@styles'
import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & input,
  & textarea {
    box-sizing: content-box;
    font-size: 16px;
    padding: 8px;
    border: none;
    border: 1px solid;
    border-color: ${(props) => (props.error ? Color.Error : Color.Gray)};
    border-radius: 8px;
    outline: none;
    transition: border-color 0.1s ease-in-out;
    resize: none;

    &:focus,
    &:active {
      border-color: ${(props) => !props.error && Color.Black};
    }
  }
`
export const InputElement = styled.div``

export const InputLabel = styled.div`
  padding-left: 4px;
`

export const InputError = styled.div`
  padding-left: 6px;
  color: ${Color.Error};
`
