import styled from 'styled-components/macro';
import loginBackgroundLight from '../../assets/login-background-light.png';
import loginBackgroundDark from '../../assets/login-background-dark.png';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 90px 60px 60px;
	width: 894px;
	height: 640px;
	border-radius: 30px;
	background-image: url('${({ theme }) =>
		theme.currentTheme.title === 'light' ? loginBackgroundLight : loginBackgroundDark}');

	background-color: ${({ theme }) => theme.currentTheme.backgroundColor};
	background-size: 650px 450px;
	background-repeat: no-repeat;
	background-position: center left;
	box-shadow: 1px 4px 30px rgba(0, 0, 0, 0.15);
	transition: background-color 0.15s ease-in-out;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const Form = styled.form``;
export const FormTitle = styled.h1`
	text-align: center;
	margin-bottom: 40px;
	font-size: 42px;
	line-height: 1;
	color: ${({ theme }) => theme.currentTheme.fontColor};
`;

export const FoggotPassword = styled.p`
	margin-bottom: 30px;
	text-align: end;
	font-weight: 300;
	font-size: 16px;
	line-height: 1;
	color: ${({ theme }) => theme.currentTheme.fontColor};
	user-select: none;

	span {
		cursor: pointer;
		color: ${({ theme }) => theme.currentTheme.primaryColor};

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const DontHaveAnAccount = styled.div`
	margin-bottom: 30px;
	text-align: end;
	font-weight: 300;
	font-size: 16px;
	line-height: 1;
	user-select: none;
	color: ${({ theme }) => theme.currentTheme.fontColor};

	a {
		margin-left: 5px;
		color: ${({ theme }) => theme.currentTheme.primaryColor};

		&:hover {
			text-decoration: underline;
		}
	}
`;
