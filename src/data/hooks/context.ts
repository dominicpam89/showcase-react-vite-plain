import { useState } from "react"
import { TypeThemeSelection } from "../context/main"

export const useHooksContextMain = () => {
	const [theme, setTheme] = useState<TypeThemeSelection>("theme-default")
	const _theme = {
		current: theme,
		changeTheme: (selectedTheme:TypeThemeSelection) => setTheme(selectedTheme),
	}
  return _theme
}
