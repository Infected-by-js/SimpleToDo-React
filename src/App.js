import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { AppRouter } from './router/AppRouter';
import { useTheme } from './hooks/useTheme';

const App = () => {
	const { currentTheme, isDarkTheme, setIsDarkTheme } = useTheme();

	return (
		<ThemeProvider theme={{ currentTheme, isDarkTheme, setIsDarkTheme }}>
			<StyledApp>
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
			</StyledApp>
		</ThemeProvider>
	);
};

export default App;

// TODO refactor this
const StyledApp = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme }) => theme.currentTheme.overlayColor};
`;
