import styled from 'styled-components'

const formats = {
  h1: {
    size: 48,
    weight: 800,
  },
  h2: {
    size: 38,
    weight: 800,
  },
  h3: {
    size: 28,
    weight: 700,
  },
  h4: {
    size: 20,
    weight: 700,
  },
  p: {
    size: 16,
  },
  small: {
    size: 12,
  },
}

const weights = {
  regular: 600,
  bold: 700,
  extrabold: 800,
}

export const TypographyElement = styled.span`
  color: ${(props) => props.color || 'inherit'};
  margin: 0;
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => `${formats[props.as]?.size || 16}px`};
  font-weight: ${(props) =>
    weights[props.weight] || formats[props.as]?.weight || 600};

  & > strong {
    font-weight: 800;
  }
`
