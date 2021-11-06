import styled from 'styled-components/macro';

export const Switch = styled.label`
	position: relative;
	display: inline-block;
	width: 170px;
	min-height: 54px;
	background-color: ${({ theme }) => theme.currentTheme.themeButton.background};
	border-radius: 20px;
	padding: 6px;

	cursor: pointer;
`;

export const SwitchInput = styled.input.attrs({
	type: 'checkbox',
})`
	display: none;
`;

export const Slider = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 46px;
	width: 110px;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.currentTheme.themeButton.color};
	transition: transform 0.3s linear;

	${SwitchInput}:checked + & {
		transform: translateX(42%);
	}
`;

export const SliderButton = styled.span`
	display: flex;
	position: absolute;
	opacity: ${({ checked }) => (checked ? 1 : 0)};
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.currentTheme.fontColor};
	transition: opacity 0.3s;

	span {
		color: inherit;
	}
`;
