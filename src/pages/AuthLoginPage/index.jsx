import React from 'react';
import propTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

import * as S from './styles';
import { OVERVIEW_ROUTE, SIGN_UP_ROUTE } from '../../constants/routes';

import { FormInput } from '../../components/FormInput';
import { Button } from '../../UI/Button/';
import { EnterWithBlock } from '../../components/EnterWithBlock';
import { IconMessage, IconLock } from '../../assets/icons';

export const LoginPage = () => {
	const history = useHistory();

	const toggleTheme = (e) => {
		e.preventDefault();
		history.push(OVERVIEW_ROUTE);
	};

	return (
		<S.Container>
			<S.Content>
				<S.Form onSubmit={toggleTheme}>
					<S.FormTitle>Log-In</S.FormTitle>
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
						style={{ marginBottom: 20 }}
					/>
					<S.FoggotPassword>
						Foggot <span>Password?</span>
					</S.FoggotPassword>
					<Button>LOG IN</Button>
				</S.Form>

				<EnterWithBlock enterType="Login" />
				<S.DontHaveAnAccount>
					Don`t have an account?
					<Link to={SIGN_UP_ROUTE}>Register now</Link>
				</S.DontHaveAnAccount>
			</S.Content>
		</S.Container>
	);
};
