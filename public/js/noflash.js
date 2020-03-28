;(function () {
  const storageKey = 'darkMode'

  const classNameDark = 'dark-mode'
  const classNameLight = 'light-mode'

  function setClassOnDocumentBody(darkMode) {
    document.documentElement.classList.add(
      darkMode ? classNameDark : classNameLight
    )
    document.documentElement.classList.remove(
      darkMode ? classNameLight : classNameDark
    )
  }

  const preferDarkQuery = '(prefers-color-scheme: dark)'
  const mql = window.matchMedia(preferDarkQuery)
  const supportsColorSchemeQuery = mql.media === preferDarkQuery

  let localStorageTheme = null

  try {
    localStorageTheme = localStorage.getItem(storageKey)
  } catch (err) {}

  const localStorageExists = localStorageTheme !== null

  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme)
  }

  if (localStorageExists) {
    setClassOnDocumentBody(localStorageTheme)
  } else if (supportsColorSchemeQuery) {
    setClassOnDocumentBody(mql.matches)

    localStorage.setItem(storageKey, mql.matches)
  } else {
    const isDarkMode = document.documentElement.classList.contains(
      classNameDark
    )

    localStorage.setItem(storageKey, JSON.stringify(isDarkMode))
  }
})()
