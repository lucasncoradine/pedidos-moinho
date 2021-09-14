import PropTypes from 'prop-types'
import React from 'react'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
}

export default MyApp
