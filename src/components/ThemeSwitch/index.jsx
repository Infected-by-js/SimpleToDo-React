import React, { useContext } from 'react';
import * as S from './styles.js';
import { IconThemeLight, IconThemeDark } from '../../assets/icons';

import { ThemeContext } from 'styled-components';

export const ThemeSwitch = () => {
	const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

	const switchTheme = () => {
		setIsDarkTheme((isDarkTheme) => !isDarkTheme);
	};

	return (
		<S.Switch>
			<S.SwitchInput onChange={switchTheme} />
			<S.Slider darkTheme={isDarkTheme}>
				<S.SliderButton checked={!isDarkTheme}>
					<IconThemeLight />
					<span style={{ marginLeft: 20 }}>Light</span>
				</S.SliderButton>
				<S.SliderButton checked={isDarkTheme}>
					<span style={{ marginRight: 20 }}>Dark</span>
					<IconThemeDark />
				</S.SliderButton>
			</S.Slider>
		</S.Switch>
	);
};
