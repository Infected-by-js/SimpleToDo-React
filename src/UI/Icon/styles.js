import styled from 'styled-components';

export const IconWrapp = styled.span`
	display: flex;
	cursor: pointer;

	svg {
		width: 24px;
		height: 24px;

		&:hover g {
			stroke: ${({ theme }) => theme.currentTheme.primaryColor};
		}

		&:focus-within g {
			stroke: ${({ theme }) => theme.currentTheme.primaryColor};
		}
	}
`;
