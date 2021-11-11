import React, { useContext } from 'react';

import * as S from './styles.js';
import { IconUser, IconMessage, IconLock } from '../../assets/icons';

import { auth } from 'firebase';
import { Link, useHistory } from 'react-router-dom';
import { LOGIN_ROUTE, OVERVIEW_ROUTE } from '../../constants/routes.js';

import { Button } from '../../UI/Button/';
import { FormInput } from '../../components/FormInput/';
import { EnterWith } from '../../components/EnterWith/';

export const SignUpPage = () => {
	const history = useHistory();

	const toggleTheme = (e) => {
		e.preventDefault();
		history.push(OVERVIEW_ROUTE);
	};

	return (
		<S.Container>
			<S.Content>
				<S.Form onSubmit={toggleTheme}>
					<S.FormTitle>Sign-Up</S.FormTitle>
					<FormInput Icon={IconUser} type="text" placeholder="Name" style={{ marginBottom: 10 }} />
					<FormInput
						Icon={IconMessage}
						type="email"
						placeholder="Email"
						style={{ marginBottom: 10 }}
					/>
					<FormInput
						Icon={IconLock}
						type="password"
						placeholder="Password"
						style={{ marginBottom: 10 }}
					/>
					<FormInput
						Icon={IconLock}
						type="password"
						placeholder="Confrim password"
						style={{ marginBottom: 20 }}
					/>

					<S.AlreadyHaveAnAccount>
						Already have an account? <Link to={LOGIN_ROUTE}>Login</Link>
					</S.AlreadyHaveAnAccount>
					<Button>SIGN UP</Button>
				</S.Form>

				<EnterWith enterType="Sign-Up" />
			</S.Content>
		</S.Container>
	);
};
