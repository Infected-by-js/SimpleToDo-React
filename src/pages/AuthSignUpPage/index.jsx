import { auth } from 'firebase';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import * as S from './styles.js';
import { LOGIN_ROUTE, OVERVIEW_ROUTE } from '../../contants/routes.js';
import { Link } from 'react-router-dom';

const registerWithEmailAndPassword = async ({ firstName, LastName, email, password }) => {
	try {
		const res = await auth.createUserWithEmailAndPassword(email, password);
		const user = res.user;
		console.log(user);
	} catch (e) {
		console.log(e);
		console.error(e.message);
	}
};

const enterByAnonymous = async () => {
	try {
		const res = await auth.signInAnonymously();
		console.log(res);
	} catch (e) {
		console.log(e);
		console.error(e.message);
	}
};

export const SignUpPage = () => {
	const [userData, setUserData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		secondPassword: '',
	});
	const [passwordShown, setPasswordShown] = useState(false);
	const history = useHistory();

	const saveUser = (e) => {
		e.preventDefault();
		if (userData.password !== userData.secondPassword) {
			console.log('пароли должны совпадать');
			return;
		}

		registerWithEmailAndPassword(userData);
	};

	const togglePasswordShow = () => {
		setPasswordShown((passwordShown) => !passwordShown);
	};

	const enterAnon = () => {
		enterByAnonymous();
		history.push(OVERVIEW_ROUTE);
	};

	return (
		<S.Container>
			<S.Content>
				<S.Title>Sign Up</S.Title>
				<S.Form onSubmit={saveUser}>
					<S.InputWrapp>
						<S.InputLabelIcon></S.InputLabelIcon>
						<S.Input
							type="text"
							placeholder="First Name"
							value={userData.firstName}
							onChange={({ target }) => setUserData({ ...userData, firstName: target.value })}
						/>
					</S.InputWrapp>
					<S.InputWrapp>
						<S.InputLabelIcon></S.InputLabelIcon>
						<S.Input
							type="text"
							placeholder="Last Name"
							value={userData.lastName}
							onChange={({ target }) => setUserData({ ...userData, lastName: target.value })}
						/>
					</S.InputWrapp>
					<S.InputWrapp>
						<S.InputLabelIcon></S.InputLabelIcon>
						<S.Input
							type="email"
							placeholder="Email"
							value={userData.email}
							onChange={({ target }) => setUserData({ ...userData, email: target.value })}
						/>
					</S.InputWrapp>
					<S.InputWrapp>
						<S.InputLabelIcon></S.InputLabelIcon>
						<S.Input
							type={passwordShown ? 'text' : 'password'}
							placeholder="Password"
							value={userData.password}
							onBlur={() => setPasswordShown(false)}
							onChange={({ target }) => setUserData({ ...userData, password: target.value })}
						/>
						<S.InputEyeIcon onClick={togglePasswordShow}></S.InputEyeIcon>
					</S.InputWrapp>
					<S.InputWrapp>
						<S.InputLabelIcon></S.InputLabelIcon>
						<S.Input
							type={passwordShown ? 'text' : 'password'}
							placeholder="Confirm Password"
							value={userData.secondPassword}
							onBlur={() => setPasswordShown(false)}
							onChange={({ target }) => setUserData({ ...userData, secondPassword: target.value })}
						/>
						<S.InputEyeIcon onClick={togglePasswordShow}></S.InputEyeIcon>
					</S.InputWrapp>
					<S.AlreadySection>
						Already have an account? <Link to={LOGIN_ROUTE}>Login</Link>
					</S.AlreadySection>
					<S.MainBtn>SIGN UP</S.MainBtn>
				</S.Form>

				<S.Footer>
					<S.FooterText>Or sign up with</S.FooterText>
					<S.FooterIcon></S.FooterIcon>
					<S.FooterIcon></S.FooterIcon>
					<S.FooterIcon onClick={enterAnon}></S.FooterIcon>
				</S.Footer>
			</S.Content>
		</S.Container>
	);
};
