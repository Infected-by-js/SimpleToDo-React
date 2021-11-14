import styled, { css } from 'styled-components';

export const FilterRadioWrapp = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.currentTheme.overlayColor};
`;
export const FilterRadioLabel = styled.label`
	color: ${({ theme }) => theme.currentTheme.fontColor + '70'};
	border: none;
	cursor: pointer;
	transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

	${({ checked }) =>
		checked &&
		css`
			background-color: ${({ theme }) => theme.currentTheme.primaryColor};
			color: ${({ theme }) => theme.currentTheme.backgroundColor};
		`};

	&:first-child {
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}

	&:last-child {
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
	}

	&:not(&:last-child) {
		border-right: 2px solid ${({ theme }) => theme.currentTheme.sidebar.background};
	}
`;
export const FilterRadioText = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px 10px;
	font-size: 12px;
	font-weight: 500;
	color: inherit;
`;
export const FilterRadioInput = styled.input.attrs({
	type: 'radio',
	name: 'filterTasks',
})`
	display: none;
`;
