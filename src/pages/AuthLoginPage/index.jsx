import propTypes from 'prop-types';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import * as S from './styles';
import * as Images from '../../assets/icons';
import { SIGN_UP_ROUTE } from '../../contants/routes';

export const LoginPage = () => {
	const { setIsDarkTheme } = useContext(ThemeContext);

	const toggleTheme = (e) => {
		e.preventDefault();
		setIsDarkTheme((isDarkTheme) => !isDarkTheme);
	};

	return (
		<S.Container>
			<S.Content>
				<S.Form onSubmit={toggleTheme}>
					<S.FormTitle>Log In</S.FormTitle>
					<S.InputWrapp style={{ marginBottom: 10 }}>
						<S.InputLabel>
							<S.InputIcon>
								<Images.IconMessage />
							</S.InputIcon>
							<S.Input type="text" placeholder="Email" />
						</S.InputLabel>
					</S.InputWrapp>
					<S.InputWrapp style={{ marginBottom: 20 }}>
						<S.InputLabel>
							<S.InputIcon>
								<Images.IconLock />
							</S.InputIcon>
							<S.Input type="password" placeholder="Password" />
						</S.InputLabel>
						<S.ButtonVisibleWrap>
							<S.ButtonVisibleLabel>
								<S.ButtonVisible />
								<S.ButtonVisibleIcon>
									<Images.IconVisible />
								</S.ButtonVisibleIcon>
							</S.ButtonVisibleLabel>
						</S.ButtonVisibleWrap>
					</S.InputWrapp>

					<S.FoggotPassword>
						Foggot <span>Password?</span>
					</S.FoggotPassword>

					<S.FormSubmitButton>LOG IN</S.FormSubmitButton>
				</S.Form>

				<S.CredentialWrapp>
					<S.EnterWith>{'Log-in'} with</S.EnterWith>
					<S.CredentialList>
						<S.CredentialItem>
							<S.CredentialButton>
								<Images.IconGithub />
							</S.CredentialButton>
						</S.CredentialItem>
						<S.CredentialItem>
							<S.CredentialButton>
								<Images.IconGoogle />
							</S.CredentialButton>
						</S.CredentialItem>
						<S.CredentialItem>
							<S.CredentialButton>
								<Images.IconAnonymous />
							</S.CredentialButton>
						</S.CredentialItem>
					</S.CredentialList>
				</S.CredentialWrapp>

				<S.DontHaveAccount>
					Don`t have an account? <Link to={SIGN_UP_ROUTE}>Register now</Link>
				</S.DontHaveAccount>
			</S.Content>
		</S.Container>
	);
};
