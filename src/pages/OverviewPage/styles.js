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
export const SortIcon = styled.span`
	display: flex;

	svg {
		width: 24px;
		height: 24px;
	}
`;

export const SearchWrapp = styled.div`
	margin-right: 20px;
	&:focus-within g {
		stroke: ${({ theme }) => theme.currentTheme.primaryColor};
	}
`;

export const SearchIcon = styled.span`
	display: flex;
	svg {
		width: 24px;
		height: 24px;
	}
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

// export const SearchInput = styled.input.attrs({
// 	type: 'text',
// 	placeholder: 'Search',
// })`
// 	font-size: 16px;
// 	background: transparent;
// 	border: none;
// 	border-bottom: 2px solid transparent;
// 	transition: color 0.3s ease, border-color 0.3s ease;
// 	color: ${({ theme }) => theme.currentTheme.fontColor};
// 	font-weight: 700;

// 	&::placeholder {
// 		font-weight: 300;

// 		color: ${({ theme }) => theme.currentTheme.fontColor};
// 	}

// 	&:focus {
// 		font-weight: 700;
// 		color: ${({ theme }) => theme.currentTheme.primaryColor};
// 		border-color: ${({ theme }) => theme.currentTheme.primaryColor};
// 	}
// `;

export const ContentBody = styled.div``;
export const TasksContainer = styled.div`
	display: flex;
`;

export const SectionTodo = styled.div`
	width: 450px;
`;

export const SectionHeader = styled.div`
	margin-bottom: 25px;
	display: flex;
	align-items: center;
`;
export const SectionTitle = styled.h2`
	margin-right: 30px;
	font-size: 24px;
	line-height: 1;
	font-weight: 700;
`;

export const FilterWrapp = styled.div`
	display: flex;
	align-items: center;
`;
export const FilterIcon = styled.span`
	display: flex;
`;
export const FilterInput = styled.input.attrs({
	type: 'text',
})`
	width: 0;
	height: 0;
	opacity: 0;
`;

export const SectionBody = styled.div``;
export const TaskList = styled.div`
	margin-bottom: 20px;
`;

export const TaskItem = styled.div`
	display: flex;
	align-items: stretch;
	justify-content: space-between;
	width: 100%;
	min-height: 58px;
	border: none;
	border-radius: 10px;
	box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
	background-color: ${({ theme }) => theme.currentTheme.themeButton.color};
`;

export const CompleteButtonWrapp = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	background-color: var(--color-status-pending);
	transition: width 0.3s ease;

	&:hover {
		width: 55px;
	}
`;
export const CompleteButton = styled.button``;
export const CompleteButtonIcon = styled.span``;

export const ItemContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;

	flex: 1;
`;

export const ItemColumn = styled.div`
	margin-right: 40px;

	&:last-child {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		flex-direction: column;
		flex-shrink: 0;
		margin-right: 0;
	}
`;

export const ItemTitle = styled.h3`
	margin-bottom: 10px;
	font-size: 16px;
	font-weight: 400;
	line-height: 1;
	color: ${({ theme }) => theme.currentTheme.fontColor};
`;
export const ItemButtonsWrapp = styled.div`
	display: flex;
	align-items: center;
`;

export const ItemStatusWrapp = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
`;

export const ItemPriority = styled.span`
	margin-right: 5px;
	display: inline-block;
	border-radius: 50%;
	width: 8px;
	height: 8px;
	background-color: var(--color-priority-minor);
`;

export const ItemOptionsButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	cursor: pointer;
`;

export const SubTasksButton = styled.button`
	display: flex;
	align-items: center;
	margin-right: 15px;
	font-size: 12px;
	opacity: 0.7;
	border: none;
`;
export const SubTasksIcon = styled.span`
	margin-right: 5px;
`;

export const DescriptionButton = styled.button`
	border: none;
	opacity: 0.7;
	font-size: 12px;
`;
export const DescriptionIcon = styled.span`
	margin-right: 5px;
`;

export const DateWrapp = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const DateText = styled.span`
	margin-right: 5px;
	font-size: 12px;
`;
export const DateIcon = styled.span`
	display: flex;
	align-items: center;
`;

export const ButtonAddNewTask = styled.button`
	width: 100%;
	height: 58px;
	border-radius: 9px;
	border: 3px dashed;
	border-color: ${({ theme }) => theme.currentTheme.borderColor};
	color: ${({ theme }) => theme.currentTheme.fontColor};
	background-color: ${({ theme }) => theme.currentTheme.themeButton.background};
`;
