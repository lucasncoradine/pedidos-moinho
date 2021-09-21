import { AppProvider, OrderProvider } from '@contexts'
import PropTypes from 'prop-types'
import React from 'react'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
  <AppProvider>
    <OrderProvider>
      <Component {...pageProps} />
    </OrderProvider>
  </AppProvider>
)

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
}

export default MyApp
