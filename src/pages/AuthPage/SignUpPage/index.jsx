import React from 'react';
import * as S from './styles.js';
import * as Images from '../../../assets/icons';

export const SignUpPage = () => {
	return (
		<S.Container>
			<S.Content>
				<S.Title>Sign Up</S.Title>
				<S.Form>
					<S.InputWrapp>
						<S.InputLabelIcon>
							<Images.FormUser />
						</S.InputLabelIcon>
						<S.Input type="text" placeholder="First Name" />
					</S.InputWrapp>
					<S.InputWrapp>
						<S.InputLabelIcon>
							<Images.FormUser />
						</S.InputLabelIcon>
						<S.Input type="text" placeholder="Last Name" />
					</S.InputWrapp>
					<S.InputWrapp>
						<S.InputLabelIcon>
							<Images.FormMail />
						</S.InputLabelIcon>
						<S.Input type="email" placeholder="Email" />
					</S.InputWrapp>
					<S.InputWrapp>
						<S.InputLabelIcon>
							<Images.FormPassword />
						</S.InputLabelIcon>
						<S.Input type="password" placeholder="Password" />
						<S.InputEyeIcon>
							<Images.FormEye />
						</S.InputEyeIcon>
					</S.InputWrapp>
					<S.InputWrapp>
						<S.InputLabelIcon>
							<Images.FormPassword />
						</S.InputLabelIcon>
						<S.Input type="password" placeholder="Confirm Password" />
						<S.InputEyeIcon>
							<Images.FormEye />
						</S.InputEyeIcon>
					</S.InputWrapp>
					<S.AlreadySection>
						Already have an account? <a href="#">Login</a>
					</S.AlreadySection>
					<S.MainBtn>SIGN UP</S.MainBtn>
				</S.Form>

				<S.Footer>
					<S.FooterText>Or sign up with</S.FooterText>
					<S.FooterIcon>
						<Images.Google />
					</S.FooterIcon>
					<S.FooterIcon>
						<Images.Github />
					</S.FooterIcon>
					<S.FooterIcon>
						<Images.Anonymous />
					</S.FooterIcon>
				</S.Footer>
			</S.Content>
		</S.Container>
	);
};
