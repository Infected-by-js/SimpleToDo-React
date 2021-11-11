const themeLight = {
	title: 'light',
	primaryColor: '#AE80CF',
	fontColor: '#555555',
	borderColor: '#DEE4EB',
	backgroundColor: '#FCFDFF',
	overlayColor: '#E7EAEE',
	sidebar: {
		background: '#FBFBFD',
	},
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
	mainButton: {
		color: '#313133',
		background: '#FAD958',
		backgroundActive: '#F1CB36',
		backgroundHovered: '#FFE684',
	},
	themeButton: {
		color: '#FCFDFF',
		background: '#F4F5F7',
	},
};

const themeDark = {
	title: 'dark',
	primaryColor: '#FAD958',
	fontColor: '#E7EAEE',
	borderColor: '#4B4A4F',
	backgroundColor: '#313133',
	overlayColor: '#4B5059',
	sidebar: {
		background: '#3D3D3F',
	},
	mainButton: {
		color: '#FCFDFF',
		background: '#AE80CF',
		backgroundActive: '#884CB2',
		backgroundHovered: '#C89FE5',
	},
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
	themeButton: {
		color: '#4D4C52',
		background: '#313133',
	},
};

export const themes = {
	light: themeLight,
	dark: themeDark,
};
