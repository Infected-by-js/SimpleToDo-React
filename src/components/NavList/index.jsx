import React from 'react';
import { NavItem } from '../NavItem/';
import * as S from './styles.js';
import PropTypes from 'prop-types';

export const NavList = ({ items }) => {
	return (
		<S.NavList>
			{items.map((item) => (
				<NavItem key={item.title} {...item} />
			))}
		</S.NavList>
	);
};

NavList.propTypes = {
	items: PropTypes.array,
};
