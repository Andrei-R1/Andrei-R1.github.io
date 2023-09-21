import React, { createContext, useContext, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext)

export function ThemeProviderWrapper({ children }) {
  const [mode, setMode] = useState('dark')

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
  }

  const theme = createTheme({
    palette: {
      mode,
      background: {
        default: mode === 'dark' ? '#000000' : '#ffffff',
      },
      text: {
        primary: mode === 'dark' ? '#ffffff' : '#000000',
      },
    },
  })

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
