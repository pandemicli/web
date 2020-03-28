class Theme {
  get(): 'dark' | 'light' {
    const hours = new Date().getHours()

    return hours > 7 && hours < 18 ? 'light' : 'dark'
  }
}

export const theme = new Theme()
