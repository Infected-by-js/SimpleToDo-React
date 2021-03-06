const themeLight = {
	title: 'light',
	primaryColor: '#AE80CF',
	fontColor: '#555555',
	backgroundColor: '#FCFDFF',
	overlayColor: '#bac2cc',
	button: {
		fontColor: '#FCFDFF',
		active: '#AE80CF',
		disabled: '#959EA6',
	},
	input: {
		borderDefault: 'transparent',
		placeholder: '#A6AEB4',
		background: '#FFFFFF',
	},
};

const themeDark = {
	title: 'dark',
	primaryColor: '#FAD958',
	fontColor: '#E7EAEE',
	backgroundColor: '#313133',
	overlayColor: '#3e4c5e',

	button: {
		fontColor: '#313133',
		active: '#FAD958',
		disabled: '#575759',
	},
	input: {
		borderDefault: 'transparent',
		placeholder: '#E7EAEE',
		background: '#575759',
	},
};

export const themes = {
	light: themeLight,
	dark: themeDark,
};
