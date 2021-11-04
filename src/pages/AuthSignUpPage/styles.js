import styled from 'styled-components/macro';
import signBackground from '../../assets/signup-background.png';

export const Container = styled.div`
	padding: 30px;
	width: 540px;
	height: 560px;
	background: #fff;
	border-radius: 30px;
	box-shadow: 1px 4px 40px rgba(0, 0, 0, 0.1);
	background-image: url('${signBackground}');
	background-size: 60%;
	background-repeat: no-repeat;
	background-position: right center;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: stretch;
	flex-direction: column;
	height: 100%;
	width: 50%;
`;
export const Title = styled.h1`
	margin-bottom: 20px;
	font-size: 30px;
	line-height: 1;
	font-weight: 400;
	user-select: none;
`;
export const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 15px;
	width: 100%;
`;
export const InputWrapp = styled.label`
	width: 100%;
	padding: 13px;
	display: flex;
	align-items: center;
	border: 2px solid;
	border-color: ${({ isActive }) => (isActive ? 'var(--color-violet)' : '#eee')};
	border-radius: 8px;
	background: #fff;
	box-shadow: 2px 6px 10px rgba(0, 0, 0, 0.1);
	transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out;

	&:hover {
		border-color: var(--color-violet);
	}

	&:focus-within {
		border-color: var(--color-violet);
	}

	&:not(&:last-child) {
		margin-bottom: 6px;
	}
`;
export const InputLabelIcon = styled.span`
	margin-right: 10px;
	display: flex;
	align-items: center;
	cursor: pointer;
`;
export const Input = styled.input`
	padding: 0 5px;
	font-size: 16px;
	border-radius: 8px;
	border: none;
	outline: none;
	background: none;
	width: 100%;
	color: var(--color-violet);

	&::placeholder {
		font-weight: 500;
	}
`;
export const InputEyeIcon = styled.span`
	display: flex;
	align-items: center;
	cursor: pointer;
`;
export const AlreadySection = styled.div`
	margin: 20px 0;
	font-weight: 300;
	font-size: 14px;
	user-select: none;

	a {
		color: var(--color-violet);

		&:hover {
			text-decoration: underline;
		}

		&:focus-visible {
			text-decoration: underline;
		}
	}
`;
export const MainBtn = styled.button`
	font-size: 14px;
	line-height: 1;
	padding: 18px 72px;
	border-radius: 20px;
	font-weight: 700;
	color: #fff;
	background-color: var(--color-inactive);
	box-shadow: 1px 2px 4px var(--color-black);
	transition: background-color 0.15s ease-in-out;

	&:hover {
		background-color: var(--color-violet);
	}

	&:focus-visible {
		background-color: var(--color-violet);
	}

	&:active {
		box-shadow: 0px 1px 2px var(--color-violet);
	}
`;
export const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const FooterText = styled.p`
	font-size: 12px;
	font-weight: 700;
	margin-right: 20px;
	user-select: none;
`;
export const FooterIcon = styled.button`
	margin-right: 10px;
	cursor: pointer;
	transition: transform 0.15s ease-in-out;

	&:last-child {
		margin-right: 0;
	}

	&:hover {
		transform: scale(1.3);
	}

	&:focus-visible {
		transform: scale(1.3);
	}
`;
