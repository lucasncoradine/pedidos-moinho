import { OrderProvider } from '@contexts'
import PropTypes from 'prop-types'
import React from 'react'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
  <OrderProvider>
    <Component {...pageProps} />
  </OrderProvider>
)

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
}

export default MyApp
