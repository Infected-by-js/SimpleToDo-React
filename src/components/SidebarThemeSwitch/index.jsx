import React from 'react';
import * as S from './styles.js';
import { ThemeLight, ThemeDark } from '../../assets/icons';

export const SidebarThemeSwitch = () => {
	return (
		<S.ThemeSwitcher>
			<S.ThemeButtonWrapp theme="light" checked={true}>
				<S.ThemeIcon>
					<ThemeLight />
				</S.ThemeIcon>
				<S.ThemeText>Light</S.ThemeText>
				<S.InputHidden value="light" defaultChecked />
			</S.ThemeButtonWrapp>

			<S.ThemeButtonWrapp theme="dark" checked={false}>
				<S.ThemeIcon>
					<ThemeDark />
				</S.ThemeIcon>
				<S.ThemeText>Dark</S.ThemeText>
				<S.InputHidden value="dark" />
			</S.ThemeButtonWrapp>
		</S.ThemeSwitcher>
	);
};
