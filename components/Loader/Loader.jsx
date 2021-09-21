import { Color } from "@styles";
import { Typography } from "components/Typography/Typography";
import PropTypes from "prop-types";
import React from 'react'
import { LoaderElement, LoaderWrapper, TextWrapper } from './loader.styled'

export const Loader = ({ fullScreen }) => {
  return (
    <LoaderWrapper fullScreen={fullScreen}>
      <LoaderElement>
        <div />

        <TextWrapper>
          <Typography color={Color.Red} variant="h4">Carregando...</Typography>
        </TextWrapper>
      </LoaderElement>
    </LoaderWrapper>
  )
}
Loader.propTypes = {
  fullScreen: PropTypes.bool
}
