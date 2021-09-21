import { Loader, Toast } from '@components'
import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Utils } from '@utils'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [showLoader, setShowLoader] = useState(false)
  const [toastOpen, setToastOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastVariant, setToastVariant] = useState("info")

  const showToast = (message, variant) => {
    setToastMessage(message)
    setToastVariant(variant)
    setToastOpen(true)
  }

  return (
    <AppContext.Provider
      value={{
        showLoader,
        setShowLoader,
        showToast
      }}
    >
      {showLoader && <Loader fullScreen />}
      {children}

      <Toast open={toastOpen} onClose={() => setToastOpen(false)} message={toastMessage} variant={toastVariant} />
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.any,
}

export const useApp = () => {
  const context = Utils.validateContext(AppContext)

  return {
    showLoader: context.showLoader,
    setShowLoader: context.setShowLoader,
    showToast: context.showToast
  }
}
