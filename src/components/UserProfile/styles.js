import styled from 'styled-components';
import userAvatar from '../../assets/user-avatar.png';

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
