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
