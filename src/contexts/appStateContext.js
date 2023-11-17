import { createContext, useState } from 'react'

export const AppStateContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {}
})

export const AppStateProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <AppStateContext.Provider
      value={{ isLoading, setIsLoading, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </AppStateContext.Provider>
  )
}
