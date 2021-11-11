import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';
import { IconGithub, IconGoogle, IconAnonymous } from './assets';

export const EnterWith = ({ enterType, ...props }) => {
	return (
		<S.CredentialWrapp>
			<S.EnterWith>{enterType} with</S.EnterWith>
			<S.CredentialList>
				<S.CredentialItem>
					<S.CredentialButton>
						<IconGithub />
					</S.CredentialButton>
				</S.CredentialItem>
				<S.CredentialItem>
					<S.CredentialButton>
						<IconGoogle />
					</S.CredentialButton>
				</S.CredentialItem>
				<S.CredentialItem>
					<S.CredentialButton>
						<IconAnonymous />
					</S.CredentialButton>
				</S.CredentialItem>
			</S.CredentialList>
		</S.CredentialWrapp>
	);
};

EnterWith.propTypes = {
	enterType: PropTypes.string,
};
