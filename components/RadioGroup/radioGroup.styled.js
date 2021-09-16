import styled from 'styled-components'

export const RadioGoupItemWrapper = styled.div``
export const RadioGroupContainer = styled.div`
  & > ${RadioGoupItemWrapper} + ${RadioGoupItemWrapper} {
    margin-top: 20px;
  }
`
