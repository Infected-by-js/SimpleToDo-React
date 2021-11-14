import styled, { css } from 'styled-components/macro';
import userAvatar from '../../assets/user-avatar.png';

export const Container = styled.div`
	margin: 0 auto;
	display: flex;
	align-items: stretch;
	justify-content: flex-start;
	width: 1366px;
	min-height: 768px;
	height: 100%;
	border-radius: 30px;
	background: ${({ theme }) => theme.currentTheme.backgroundColor};
	box-shadow: 1px 4px 40px rgba(0, 0, 0, 0.1);
	transition: background-color 0.3s;
`;

export const PageContent = styled.div`
	flex: 1;
	padding: 50px;
`;

export const PageHeader = styled.header`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 30px;
`;

export const UserProfile = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;
export const UserOptions = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 10px;

	&::before {
		content: '';
		width: 10%;
		height: 10%;
		border: solid;
		border-width: 0 2px 2px 0;
		padding: 3px;
		border-radius: 2px;
		transform: rotate(45deg);
		transition: border-color 0.3s;
		border-color: ${({ theme }) => theme.currentTheme.fontColor};
	}
`;
export const UserName = styled.p`
	color: ${({ theme }) => theme.currentTheme.fontColor};
	font-size: 16px;
	margin-right: 20px;
`;
export const UserAvatar = styled.span`
	display: inline-block;
	width: 30px;
	height: 30px;
	background-image: url(${userAvatar});
	background-size: contain;
	background-repeat: no-repeat;
`;

export const MainContent = styled.main`
	width: 100%;
	height: 100%;
`;

export const ContentHeader = styled.div`
	margin-bottom: 25px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const MainTitle = styled.h1`
	margin-right: 20px;
	font-size: 30px;
	font-weight: 700;
	color: ${({ theme }) => theme.currentTheme.fontColor};
`;

export const ButtonsWrapp = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
`;

export const SortWrapp = styled.div`
	margin-right: 15px;
`;

export const SearchWrapp = styled.div`
	margin-right: 20px;
`;

export const ButtonCreateTask = styled.button`
	width: 150px;
	height: 30px;
	border-radius: 6px;
	border: 2px solid transparent;
	color: ${({ theme }) => theme.currentTheme.mainButton.color};
	background-color: ${({ theme }) => theme.currentTheme.mainButton.background};
	box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.35);
	transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
		box-shadow 0.15s ease-in-out;

	&:hover,
	&:focus-visible {
		background-color: ${({ theme }) => theme.currentTheme.mainButton.backgroundHovered};
	}
	&:active {
		background-color: ${({ theme }) => theme.currentTheme.mainButton.backgroundActive};
		box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
	}
`;

// export const Search = styled.label`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// `;
// export const SearchIcon = styled.span`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	margin-right: 10px;
// 	cursor: pointer;

// 	& g {
// 		stroke: ${({ theme }) => theme.currentTheme.fontColor};
// 		transition: stroke 0.3s;
// 	}
// `;

export const ContentBody = styled.div``;
export const ListWrapp = styled.div``;
export const TaskList = styled.div``;
export const Aside = styled.aside``;

export const TasksContainer = styled.div`
	display: flex;
`;
