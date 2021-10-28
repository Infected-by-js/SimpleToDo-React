import styled from 'styled-components/macro';
import userAvatar from '../../assets/user-avatar.png';

export const Sidebar = styled.div`
	padding: 48px 0 60px 40px;
	width: 300px;
	height: 100%;
	border-right: 2px solid var(--color-border);
`;

export const Header = styled.div`
	position: relative;
`;

export const Title = styled.h1`
	margin-bottom: 29px;
	font-size: 20px;
	font-weight: 700;
	line-height: 1;
`;
export const UserWrapp = styled.div`
	margin-bottom: 40px;
`;

export const UserAvatar = styled.img.attrs({
	src: userAvatar,
	alt: 'user avatar',
})`
	margin-right: 10px;
	width: 30px;
	height: 30px;
`;
export const UserName = styled.span`
	font-weight: 300;
	font-size: 16px;
	line-height: 1;
`;

export const BtnMinifySidebar = styled.button`
	position: absolute;
	right: 0;
	bottom: 0;
	transform: translateX(50%);
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background: #fff;
	box-shadow: 1px 2px 4px #8ca4d8;
`;

// body

export const Body = styled.div``;
export const BodyNav = styled.nav``;
export const NavList = styled.ul``;
export const NavItem = styled.li`
	display: flex;
	margin-bottom: 27px;
`;
export const Link = styled.a`
	display: flex;
	align-items: center;
	flex: 1;
`;

export const ItemIcon = styled.span`
	margin-right: 15px;
	display: flex;
	align-items: center;

	svg {
		width: 20px;
		height: 20px;
	}
`;
export const ItemTitle = styled.span`
	font-size: 16px;
	font-weight: 500;
`;

export const BtnAddNewTask = styled.button`
	margin-right: 15px;
	display: flex;
	align-items: center;
`;
export const ActiveTasksBanner = styled.span`
	margin-right: 20px;
	display: flex;
	align-self: center;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	color: #fff;
	font-size: 10px;
	font-weight: 700;
	border-radius: 4px;
	background: var(--color-red);
`;
