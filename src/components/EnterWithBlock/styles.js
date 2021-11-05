import styled from 'styled-components';

export const CredentialWrapp = styled.div`
	margin: 30px 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const EnterWith = styled.p`
	margin-right: 25px;
	user-select: none;
	color: ${({ theme }) => theme.currentTheme.fontColor};
`;
export const CredentialList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const CredentialItem = styled.li`
	margin-right: 25px;

	&:last-child {
		margin-right: 0;
	}
`;
export const CredentialButton = styled.button`
	display: flex;
	transition: transform 0.15s ease-in-out;

	svg g {
		fill: ${({ theme }) => theme.currentTheme.fontColor};
	}

	&:hover {
		transform: scale(1.2);
	}

	&:focus-visible {
		transform: scale(1.2);
	}
`;
