import React from 'react';
import * as S from './styles.js';
import * as Images from '../../assets/icons';
import { NavList } from '../NavList';
import { UserProfile } from '../UserProfile/';
import { SidebarThemeSwitch } from '../SidebarThemeSwitch/';
import { Link, useHistory } from 'react-router-dom';
import { LOGIN_ROUTE, OVERVIEW_ROUTE } from '../../constants/routes.js';
import { useAuth } from '../../hooks/useAuth.js';

// TODO: need refactor below
const bodyNavItems = [
	{ Icon: Images.Overview, title: 'Overview', routeTo: OVERVIEW_ROUTE },
	{ Icon: Images.Groups, title: 'Groups', routeTo: OVERVIEW_ROUTE },
	{ Icon: Images.Stats, title: 'Stats', routeTo: OVERVIEW_ROUTE },
	{ Icon: Images.Calendar, title: 'Calendar', routeTo: OVERVIEW_ROUTE },
];

const userName = 'example@example.com';

export const Sidebar = () => {
	const history = useHistory();

	const handleSignOut = () => {
		history.push(LOGIN_ROUTE);
	};

	return (
		<S.Sidebar>
			<S.Header>
				<S.Title>Simple To Do App</S.Title>
				<UserProfile userName={userName} />
				<S.BtnMinifySidebar>
					<Images.Arrow />
				</S.BtnMinifySidebar>
			</S.Header>

			<S.BodyNav>
				<NavList items={bodyNavItems} />
			</S.BodyNav>

			<S.Footer>
				<S.FooterNav>
					<ul>
						<li>
							<button>Setting</button>
						</li>
						<li>
							<button onClick={handleSignOut}>Log Out</button>
						</li>
					</ul>
				</S.FooterNav>
			</S.Footer>
			<SidebarThemeSwitch />
		</S.Sidebar>
	);
};
