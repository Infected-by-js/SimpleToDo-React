import styled from 'styled-components/macro';

export const Sidebar = styled.div`
	padding: 48px 0 60px 40px;
	width: 301px;
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

export const BtnMinifySidebar = styled.button`
	position: absolute;
	right: 0;
	bottom: 0;
	transform: translateX(50%);
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: #fff;
	box-shadow: 1px 2px 4px #8ca4d8;
`;

// body
export const BodyNav = styled.nav`
	margin-bottom: 180px;
`;

export const BtnAddNewTask = styled.button`
	margin-right: 15px;
	display: flex;
	align-items: center;

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
	background: var(--color-violet);
`;

//footer

export const Footer = styled.div``;
export const FooterNav = styled.nav`
	margin-bottom: 50px;
`;
