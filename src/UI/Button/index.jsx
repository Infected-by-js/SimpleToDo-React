import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';

export const Button = ({ children, ...props }) => {
	return <S.Button {...props}>{children}</S.Button>;
};

Button.propTypes = {
	children: PropTypes.any,
};
