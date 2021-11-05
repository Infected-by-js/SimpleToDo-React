import styled from 'styled-components';

export const InputWrapp = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 25px;
	background-color: ${({ theme }) => theme.currentTheme.input.background};
	border: 2px solid transparent;
	border-radius: 8px;
	box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
	transition: border-color 0.15s ease-in-out;

	& > label svg path {
		transition: stroke 0.15s ease-in-out;
	}

	&:focus-within {
		& > label svg path {
			stroke: ${({ theme }) => theme.currentTheme.primaryColor};
		}
		border-color: ${({ theme }) => theme.currentTheme.primaryColor};
	}
`;

export const InputLabel = styled.label`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	cursor: pointer;
`;
export const InputIcon = styled.span`
	display: flex;
	color: ${({ theme }) => theme.currentTheme.input.placeholder};
`;

export const Input = styled.input`
	padding: 25px;
	line-height: 1;
	width: 100%;
	height: 100%;
	font-size: 20px;
	font-weight: 700;
	border: none;
	color: ${({ theme }) => theme.currentTheme.fontColor};

	background-color: ${({ theme }) => theme.currentTheme.input.background};

	&::placeholder {
		font-weight: 400;
		color: ${({ theme }) => theme.currentTheme.input.placeholder};
	}
`;

export const ButtonVisibleWrap = styled.div``;
export const ButtonVisibleLabel = styled.label`
	display: flex;
`;
export const ButtonVisible = styled.input.attrs({
	type: 'checkbox',
})`
	display: none;
`;
export const ButtonVisibleIcon = styled.span`
	display: flex;
	cursor: pointer;

	& svg path {
		transition: fill 0.15s ease-in-out;
	}

	&:hover {
		svg path {
			fill: ${({ theme }) => theme.currentTheme.primaryColor};
		}
		border-color: ${({ theme }) => theme.currentTheme.primaryColor};
	}
`;
