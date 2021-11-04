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

export const InputWrapp = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 25px;
	background-color: ${({ theme }) => theme.currentTheme.input.background};
	border: 2px solid transparent;
	border-radius: 8px;
	box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
	transition: border-color 0.15s ease-in-out;

	& > label svg path {
		transition: stroke 0.15s ease-in-out;
	}

	&:focus-within {
		& > label svg path {
			stroke: ${({ theme }) => theme.currentTheme.primaryColor};
		}
		border-color: ${({ theme }) => theme.currentTheme.primaryColor};
	}
`;

export const InputLabel = styled.label`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	cursor: pointer;
`;
export const InputIcon = styled.span`
	display: flex;
	color: ${({ theme }) => theme.currentTheme.input.placeholder};
`;

export const Input = styled.input`
	padding: 25px;
	line-height: 1;
	width: 100%;
	height: 100%;
	font-size: 20px;
	font-weight: 700;
	border: none;
	color: ${({ theme }) => theme.currentTheme.fontColor};

	background-color: ${({ theme }) => theme.currentTheme.input.background};

	&::placeholder {
		font-weight: 400;
		color: ${({ theme }) => theme.currentTheme.input.placeholder};
	}
`;

export const ButtonVisibleWrap = styled.div``;
export const ButtonVisibleLabel = styled.label`
	display: flex;
`;
export const ButtonVisible = styled.input.attrs({
	type: 'checkbox',
})`
	display: none;
`;
export const ButtonVisibleIcon = styled.span`
	display: flex;
	cursor: pointer;

	& svg path {
		transition: fill 0.15s ease-in-out;
	}

	&:hover {
		svg path {
			fill: ${({ theme }) => theme.currentTheme.primaryColor};
		}
		border-color: ${({ theme }) => theme.currentTheme.primaryColor};
	}
`;

export const FoggotPassword = styled.p`
	margin-bottom: 30px;
	text-align: end;
	font-weight: 300;
	font-size: 16px;
	line-height: 1;
	color: ${({ theme }) => theme.currentTheme.fontColor};

	span {
		color: ${({ theme }) => theme.currentTheme.primaryColor};
	}
`;
export const FormSubmitButton = styled.button.attrs({
	type: 'submit',
})`
	padding: 29px 133px;
	font-size: 24px;
	line-height: 1;
	border-radius: 20px;
	box-shadow: 1px 2px 4px #555555;
	color: ${({ theme }) => theme.currentTheme.button.fontColor};
	background-color: ${({ theme }) => theme.currentTheme.button.disabled};
	transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;
	transform-origin: center center;

	&:focus-visible {
		background-color: ${({ theme }) => theme.currentTheme.button.active};
	}
	&:hover {
		background-color: ${({ theme }) => theme.currentTheme.button.active};
	}

	&:active {
		box-shadow: 0px 1px 2px #555555;
	}
`;

export const CredentialWrapp = styled.div`
	margin: 30px 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const EnterWith = styled.p`
	margin-right: 25px;
	color: ${({ theme }) => theme.currentTheme.fontColor};
`;
export const CredentialList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const CredentialItem = styled.li`
	margin-right: 25px;

	&:last-child {
		margin-right: 0;
	}
`;
export const CredentialButton = styled.button`
	display: flex;
	transition: transform 0.15s ease-in-out;

	svg g {
		fill: ${({ theme }) => theme.currentTheme.fontColor};
	}

	&:hover {
		transform: scale(1.2);
	}

	&:focus-visible {
		transform: scale(1.2);
	}
`;

export const DontHaveAccount = styled.div`
	margin-bottom: 30px;
	text-align: end;
	font-weight: 300;
	font-size: 16px;
	line-height: 1;
	color: ${({ theme }) => theme.currentTheme.fontColor};

	a {
		color: ${({ theme }) => theme.currentTheme.primaryColor};
	}
`;
