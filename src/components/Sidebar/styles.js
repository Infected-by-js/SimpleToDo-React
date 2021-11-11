import styled from 'styled-components/macro';

export const Container = styled.div`
	padding: 48px 0 60px 40px;
	width: 300px;
	height: 100%;
	border-right: 2px solid;
	border-color: ${({ theme }) => theme.currentTheme.borderColor};
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
	background-color: ${({ theme }) => theme.currentTheme.sidebar.background};
	transition: background-color 0.3s, border-color 0.3s;
`;

export const Header = styled.div`
	position: relative;
	margin-bottom: 40px;
`;

export const MainTitle = styled.h1`
	margin-bottom: 29px;
	font-size: 24px;
	font-weight: 700;
	line-height: 1;
	color: ${({ theme }) => theme.currentTheme.fontColor};
`;

export const SidebarBtnMinify = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 0;
	bottom: 0;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	transform: translateX(50%);
	background-color: ${({ theme }) => theme.currentTheme.backgroundColor};
	transition: background-color 0.3s;
	box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);

	&:hover {
		background-color: ${({ theme }) => theme.currentTheme.primaryColor};
	}

	&::before {
		content: '';
		border: solid;
		border-width: 0 3px 3px 0;
		padding: 3px;
		border-radius: 2px;
		transform: rotate(135deg);
		transition: border-color 0.3s;
		border-color: ${({ theme }) => theme.currentTheme.fontColor};
	}
`;

export const Body = styled.div`
	margin-bottom: 190px;
`;

export const NavItem = styled.div`
	display: flex;
	margin-bottom: 27px;
	margin-right: -1px;
	padding-right: 20px;
	border-right: 4px solid transparent;
	color: ${({ theme }) => theme.currentTheme.fontColor};
	transition: color 0.3s ease-in-out, border-color 0.15s ease-in-out;

	& g {
		stroke: ${({ theme }) => theme.currentTheme.fontColor};
		transition: stroke 0.3s ease-in-out;
	}

	&:hover {
		border-color: ${({ theme }) => theme.currentTheme.primaryColor};
		color: ${({ theme }) => theme.currentTheme.primaryColor};

		& g {
			stroke: ${({ theme }) => theme.currentTheme.primaryColor};
		}
	}

	a {
		display: flex;
		align-items: center;
		flex: 1;
	}
`;

export const ItemIcon = styled.span`
	margin-right: 15px;
	display: flex;
	align-items: center;

	svg {
		width: 22px;
		height: 22px;
	}
`;
export const ItemTitle = styled.span`
	font-size: 18px;
	font-weight: 500;
	color: inherit;
	cursor: pointer;
	flex: 1;
`;

export const GroupsIcon = styled.span`
	transform: rotate(-90deg);
	cursor: pointer;
`;

export const BtnAddNewTask = styled.button`
	margin-right: 15px;
	display: flex;
	align-items: center;

	& svg {
		width: 22px;
		height: 22px;

		& path,
		& circle {
			stroke: ${({ theme }) => theme.currentTheme.fontColor};
			transition: stroke 0.15s ease-in-out;
		}

		&:hover {
			& path,
			& circle {
				stroke: ${({ theme }) => theme.currentTheme.primaryColor};
			}
		}
	}
`;
export const BannerActiveTask = styled.span`
	display: flex;
	align-self: center;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	color: ${({ theme }) => theme.currentTheme.button.fontColor};
	font-size: 16px;
	font-weight: 700;
	border-radius: 4px;
	background: ${({ theme }) => theme.currentTheme.primaryColor};
	user-select: none;
`;

//footer

export const Footer = styled.div``;
export const FooterBtnWrap = styled.div`
	margin-bottom: 50px;
`;
