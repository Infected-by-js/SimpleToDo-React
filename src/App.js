import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AppRouter } from './router/AppRouter';
import { useTheme } from './hooks/useTheme';

const App = () => {
	const { currentTheme, setIsDarkTheme } = useTheme();

	return (
		<ThemeProvider theme={{ currentTheme, setIsDarkTheme }}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
