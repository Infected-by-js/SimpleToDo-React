import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const NavItem = ({ Icon, title, routeTo }) => {
	return (
		<S.NavItem>
			<Link to={`/${routeTo}`}>
				<S.ItemIcon>
					<Icon />
				</S.ItemIcon>
				<S.ItemTitle>{title}</S.ItemTitle>
			</Link>
		</S.NavItem>
	);
};

NavItem.propTypes = {
	Icon: PropTypes.elementType.isRequired,
	title: PropTypes.string.isRequired,
	routeTo: PropTypes.string.isRequired,
};
