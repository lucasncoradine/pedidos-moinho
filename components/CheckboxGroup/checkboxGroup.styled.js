import styled from 'styled-components'

export const CheckboxGoupItemWrapper = styled.div``
export const CheckboxGroupContainer = styled.div`
  & > ${CheckboxGoupItemWrapper} + ${CheckboxGoupItemWrapper} {
    margin-top: 20px;
  }
`
