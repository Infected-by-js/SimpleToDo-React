import styled from 'styled-components';

export const Button = styled.button.attrs({
	type: 'submit',
})`
	padding: 29px 133px;
	font-size: 24px;
	line-height: 1;
	border-radius: 20px;
	box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
	color: ${({ theme }) => theme.currentTheme.button.fontColor};
	background-color: ${({ theme }) => theme.currentTheme.button.disabled};
	transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;
	transform-origin: center center;

	&:focus-visible {
		background-color: ${({ theme }) => theme.currentTheme.button.active};
	}
	&:hover {
		background-color: ${({ theme }) => theme.currentTheme.button.active};
	}

	&:active {
		box-shadow: 0px 1px 2px #555555;
	}
`;
