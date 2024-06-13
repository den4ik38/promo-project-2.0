import { FC, useMemo, useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"

export type ThemeProviderProps = {
  children?: React.ReactNode;
  }
export const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
  const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT
  const [theme, setTheme] = useState(defaultTheme)
  const defaultProps = useMemo(()=>({
    theme: theme,
    setTheme: setTheme,
  }), [theme])
  return(
  <ThemeContext.Provider value={defaultProps}>
    {children}
  </ThemeContext.Provider>)
}