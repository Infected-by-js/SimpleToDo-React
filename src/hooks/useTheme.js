import { useState, useMemo } from 'react';
import { themes } from '../styles/Themes';

export const useTheme = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const currentTheme = useMemo(() => {
		return isDarkTheme ? themes.dark : themes.light;
	}, [isDarkTheme]);

	return {
		currentTheme,
		isDarkTheme,
		setIsDarkTheme,
	};
};
