import styled from 'styled-components';

export const ThemeSwitcher = styled.div`
	padding: 5px 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 218px;
	height: 47px;
	background: var(--color-background-inactive);
	border-radius: 20px;
`;

export const ThemeButtonWrapp = styled.label`
	padding: 8px 16px;
	display: flex;
	visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
	align-items: center;
	justify-content: center;
	border-radius: 20px;
	background: var(--color-background);
	box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.15);
	cursor: pointer;
`;

export const ThemeIcon = styled.span`
	margin-right: 10px;
`;

export const ThemeText = styled.span`
	color: inherit;
`;

export const InputHidden = styled.input.attrs({
	type: 'radio',
	name: 'theme',
})`
	display: none;
`;
