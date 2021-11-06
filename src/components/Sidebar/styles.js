import styled from 'styled-components';

export const Container = styled.div`
	padding: 48px 0 60px 40px;
	width: 300px;
	height: 100%;
	border-right: 2px solid var(--color-border);
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
`;

export const SidebarBtnMinify = styled.button`
	position: absolute;
	right: 0;
	bottom: 0;
	transform: translateX(50%);
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-image: url();
	background-color: ${({ theme }) => theme.currentTheme.backgroundColor};
	box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);
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
	transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out;

	& g {
		transition: stroke 0.15s ease-in-out;
	}

	&:hover {
		border-color: var(--color-violet);
		color: var(--color-violet);

		& g {
			stroke: var(--color-violet);
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
			transition: stroke 0.15s ease-in-out;
		}

		&:hover {
			& path,
			& circle {
				stroke: var(--color-violet);
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
