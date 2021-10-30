import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';

export const UserProfile = ({ userName }) => {
	return (
		<S.UserWrapp>
			<S.UserAvatar />
			<S.UserName>{userName} </S.UserName>
		</S.UserWrapp>
	);
};

UserProfile.propTypes = {
	userName: PropTypes.string,
};
