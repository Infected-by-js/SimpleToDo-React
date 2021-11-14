import React from 'react';
import { IconWrapp } from './styles';
import PropTypes from 'prop-types';

export const Icon = ({ content: Icon }) => {
	return (
		<IconWrapp>
			<Icon />
		</IconWrapp>
	);
};

Icon.propTypes = {
	content: PropTypes.elementType.isRequired,
};
