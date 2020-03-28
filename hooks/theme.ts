import useDarkMode, { DarkModeConfig } from 'use-dark-mode'

export const useTheme = () => {
  const options: DarkModeConfig = {}

  if (process.browser) {
    options.element = document.documentElement
  }

  const darkMode = useDarkMode(true, options)

  return {
    dark: darkMode,
    light: !darkMode
  }
}
