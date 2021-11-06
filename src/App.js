import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AppRouter } from './router/AppRouter';
import { useTheme } from './hooks/useTheme';

const App = () => {
	const { currentTheme, isDarkTheme, setIsDarkTheme } = useTheme();

	return (
		<ThemeProvider theme={{ currentTheme, isDarkTheme, setIsDarkTheme }}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
