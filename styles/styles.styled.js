import styled from 'styled-components'

export const PageContainer = styled.div`
  padding: 20px 0;
  max-width: 800px;
  margin: auto;
  min-height: 100%;
`

export const Container = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
`
