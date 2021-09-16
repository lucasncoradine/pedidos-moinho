import { useContext } from 'react'
import { v4 } from 'uuid'

export class Utils {
  static generateUUID = () => v4()

  static validateContext = (reactContext) => {
    const context = useContext(reactContext)

    if (context == null)
      throw new Error('useContext mus be used within a Provider.')

    return context
  }
}
