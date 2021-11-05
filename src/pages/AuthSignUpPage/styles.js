import styled from 'styled-components/macro';
import signupBackgroundLight from '../../assets/signup-background-light.png';
import signupBackgroundDark from '../../assets/signup-background-dark.png';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 40px;
	width: 800px;
	height: 860px;
	background: #fff;
	border-radius: 30px;
	box-shadow: 1px 4px 40px rgba(0, 0, 0, 0.1);
	background-image: url('${({ theme }) =>
		theme.currentTheme.title === 'light' ? signupBackgroundLight : signupBackgroundDark}');

	background-color: ${({ theme }) => theme.currentTheme.backgroundColor};
	background-size: 560px 500px;
	background-repeat: no-repeat;
	background-position: center right;
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
	margin-bottom: 25px;
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

	span {
		cursor: pointer;
		color: ${({ theme }) => theme.currentTheme.primaryColor};

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const AlreadyHaveAnAccount = styled.div`
	margin-bottom: 30px;
	text-align: start;
	font-weight: 300;
	font-size: 16px;
	line-height: 1;
	color: ${({ theme }) => theme.currentTheme.fontColor};
	user-select: none;

	a {
		margin-left: 5px;
		color: ${({ theme }) => theme.currentTheme.primaryColor};

		&:hover {
			text-decoration: underline;
		}
	}
`;
