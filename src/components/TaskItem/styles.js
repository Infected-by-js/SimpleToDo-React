import styled, { css } from 'styled-components/macro';

export const TaskWrapp = styled.div`
	margin-bottom: 20px;
	padding: 20px 30px;
	border-radius: 8.5px;
	border: 1px solid ${({ theme }) => theme.currentTheme.borderColor};
	box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
`;
export const Content = styled.div`
	display: grid;
	grid-template-columns: 3% 75% 9% 9%;
	grid-template-rows: repeat(2, auto);
	grid-column-gap: 10px;
	grid-row-gap: 15px;
	grid-template-areas: 'complete title priority options' 'complete description date sub-tasks';
`;

export const CompleteCheckboxWrapp = styled.label`
	grid-area: complete;
	display: flex;
	align-items: center;
	justify-content: center;
	align-self: flex-start;
	width: 24px;
	height: 24px;
	border: 3px solid;
	border-radius: 50%;
	border-color: ${({ theme }) => theme.currentTheme.fontColor};
	cursor: pointer;
	opacity: 0.7;
	transition: opacity 0.15s ease-in-out, background-color 0.15s ease-in-out;

	&:hover {
		opacity: 1;
	}

	${({ done }) =>
		done &&
		css`
			background-color: ${({ theme }) => theme.currentTheme.fontColor};
		`}
`;
export const CompleteHiddenCheckbox = styled.input.attrs({
	type: 'checkbox',
	name: 'complete',
})`
	display: none;
`;

export const Title = styled.h2`
	grid-area: title;
	font-size: 20px;
	font-weight: 400;
	line-height: 1.5;
	color: ${({ theme }) => theme.currentTheme.fontColor};
	text-decoration: ${({ done }) => done && 'line-through'};
	transition: text-decoration 0.3s ease-in-out;
`;

export const Description = styled.div`
	grid-area: description;
	display: flex;
	align-items: center;
	opacity: 0.7;
	color: ${({ theme }) => theme.currentTheme.fontColor};
	text-decoration: ${({ done }) => done && 'line-through'};
	transition: text-decoration 0.3s ease-in-out;

	& g {
		min-width: 24px;
		max-height: 24px;
		stroke: ${({ theme }) => theme.currentTheme.fontColor};
	}

	span {
		color: inherit;
		text-decoration: inherit;
		margin-left: 10px;
	}
`;

export const Priority = styled.div`
	grid-area: priority;
	justify-self: center;
	align-self: center;
	font-size: 12px;
	line-height: 1;
	padding: 5px 16px;
	border-radius: 10px;
	color: ${({ theme }) => theme.currentTheme.fontColor};
	border: 2px solid;
	background-color: transparent;
	border-color: ${({ theme }) => theme.currentTheme.borderColor};
	transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out,
		background-color 0.15s ease-in-out;
	user-select: none;

	${({ important }) =>
		important &&
		css`
			color: ${({ theme }) => theme.currentTheme.button.fontColor};
			background-color: ${({ theme }) => theme.currentTheme.button.active};
			border-color: transparent;
		`}
`;

export const Date = styled.div`
	grid-area: date;
	align-self: center;
	justify-self: center;

	& g {
		stroke: ${({ theme }) => theme.currentTheme.fontColor};
	}
`;

export const OptionsButton = styled.button`
	grid-area: options;
	align-self: center;
	justify-self: center;

	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	border: 2px solid;
	border-radius: 4px;
	border-color: ${({ theme }) => theme.currentTheme.borderColor};
	background-color: transparent;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;

	& g {
		transition: fill 0.15s ease-in-out;
	}

	&:hover {
		background-color: ${({ theme }) => theme.currentTheme.borderColor};
	}

	&:active {
		border-color: ${({ theme }) => theme.currentTheme.primaryColor};
	}

	& g {
		fill: ${({ theme }) => theme.currentTheme.fontColor};
	}
`;
export const SubTasksButton = styled.button`
	grid-area: sub-tasks;
	align-self: center;
	justify-self: center;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0.7;
	transition: opacity 0.15s ease-in-out;

	& g {
		transition: fill 0.15s ease-in-out;
	}

	&:hover {
		opacity: 1;
	}

	&:active {
		& g {
			fill: ${({ theme }) => theme.currentTheme.primaryColor};
		}
	}

	& g {
		fill: ${({ theme }) => theme.currentTheme.fontColor};
	}
`;
