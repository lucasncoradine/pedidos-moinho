import { Color, mobile } from '@styles'
import { darken, lighten } from 'polished'
import styled from 'styled-components'

const variants = {
  primary: {
    backgroundColor: Color.Yellow,
    color: Color.RedDark,
    hoverBackground: darken(0.03, Color.Yellow),
    hoverColor: Color.RedDark,
  },
  secondary: {
    backgroundColor: Color.Red,
    color: Color.White,
    hoverBackground: lighten(0.03, Color.Red),
    hoverColor: Color.White,
  },
  transparent: {
    backgroundColor: 'transparent',
    color: Color.Red,
    hoverColor: Color.RedLighter,
    hoverBackground: 'transparent',
  },
  outline: {
    backgroundColor: 'transparent',
    color: Color.Red,
    hoverColor: Color.RedLighter,
    hoverBackground: 'transparent',
  },
}

const noScale = ['secondary', 'transparent', 'outline']

export const StyledButton = styled.a`
  display: flex;
  width: max-content;
  background-color: ${(props) => variants[props.variant].backgroundColor};
  color: ${(props) => variants[props.variant].color};
  cursor: pointer;
  transition: all 0.05s ease-in-out;
  padding: 12px 20px;
  border-radius: 18px;
  user-select: none;

  ${(props) => props.disabled && `opacity: 0.3; pointer-events: none; `}

  ${(props) =>
    props.variant === 'outline' &&
    `border: 2px solid; border-color: ${variants[props.variant].color};`}

  &:hover {
    color: ${(props) => variants[props.variant].hoverColor};
    background-color: ${(props) => variants[props.variant].hoverBackground};
    transform: ${(props) =>
      !noScale.includes(props.variant) ? 'scale(1.03)' : 'none'};

    border-color: ${(props) => `${variants[props.variant].hoverColor};`};
  }

  &:active {
    transform: scale(1);
    background-color: ${(props) =>
      lighten(0.05, variants[props.variant].backgroundColor)};
  }

  ${mobile} {
    width: 100%;
    justify-content: center;
  }
`

export const ButtonIconContainer = styled.div`
  ${(props) =>
    `${props.iconPosition === 'right' ? 'margin-left' : 'margin-right'}: 10px`};
`
