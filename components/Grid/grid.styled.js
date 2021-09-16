import { mobile } from '@styles'
import styled from 'styled-components'

export const GridItemContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  width: ${(props) => (props.col ? `${(props.col / 12) * 100}%` : 'auto')};

  ${mobile} {
    width: ${(props) =>
      props.mobileCol ? `${(props.mobileCol / 12) * 100}%` : 'auto'};
  }
`
export const GridContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  width: 100%;

  & > ${GridItemContainer} + ${GridItemContainer} {
    ${(props) =>
      props.spacing &&
      (props.direction === 'row' || props.direction === 'row-reverse') &&
      `
        margin-left: ${props.spacing * 10 || 0}px;
    `};

    ${(props) =>
      props.spacing &&
      (props.direction === 'column' || props.direction === 'column-reverse') &&
      `
        margin-top: ${props.spacing * 10 || 0}px;
    `};
  }

  ${mobile} {
    flex-direction: ${(props) => props.mobileDirection};

    & > ${GridItemContainer} + ${GridItemContainer} {
      ${(props) =>
        props.spacing &&
        (props.mobileDirection === 'row' ||
          props.mobileDirection === 'row-reverse') &&
        `
        margin: 0;
        margin-left: ${props.spacing * 10 || 0}px;
    `};

      ${(props) =>
        props.spacing &&
        (props.mobileDirection === 'column' ||
          props.mobileDirection === 'column-reverse') &&
        `
        margin: 0;
        margin-top: ${props.spacing * 10 || 0}px;
    `};
    }
  }
`
