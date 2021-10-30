import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';

export const NavItem = ({ Icon, title }) => {
	return (
		<S.NavItem>
			<S.Link href="#">
				<S.ItemIcon>
					<Icon />
				</S.ItemIcon>
				<S.ItemTitle>{title}</S.ItemTitle>
			</S.Link>
		</S.NavItem>
	);
};

NavItem.propTypes = {
	Icon: PropTypes.elementType.isRequired,
	title: PropTypes.string.isRequired,
};
