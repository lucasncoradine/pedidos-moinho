import styled from 'styled-components'

export const TitleContainer = styled.div`
  margin-bottom: 10px;
`

export const FormContainer = styled.div``

export const FormItem = styled.div`
  margin-top: 10px;
  width: ${(props) => (props.col ? `${(props.col / 12) * 100}%` : '100%')};
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 20px;
`
