import { homeTheme } from "./Home.theme";


export const homeLoadingTheme = () => {
  const theme = {
    ...homeTheme,
    colors: {
      ...homeTheme.colors
    }
  }
  Object.keys(theme.colors).map(key => {
    const color = key as keyof typeof homeTheme.colors
    theme.colors[color] = "black"
  })
  theme.colors.darkBg = "white"
  theme.colors.lightBg = "white"

  return theme
}