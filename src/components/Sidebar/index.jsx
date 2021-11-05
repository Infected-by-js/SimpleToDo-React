import React from 'react';
import * as S from './styles.js';
import * as Images from '../../assets/icons';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { LOGIN_ROUTE, OVERVIEW_ROUTE } from '../../constants/routes.js';
import { UserProfile } from '../UserProfile/index.jsx';

// const bodyNavItems = [
// 	{ Icon: Images.Overview, title: 'Overview', routeTo: OVERVIEW_ROUTE },
// 	{ Icon: Images.Groups, title: 'Groups', routeTo: OVERVIEW_ROUTE },
// 	{ Icon: Images.Stats, title: 'Stats', routeTo: OVERVIEW_ROUTE },
// 	{ Icon: Images.Calendar, title: 'Calendar', routeTo: OVERVIEW_ROUTE },
// ];

export const Sidebar = () => {
	const history = useHistory();

	const handleSignOut = () => {
		history.push(LOGIN_ROUTE);
	};

	return (
		<S.Container>
			<S.MainTitle>Simple To Do React</S.MainTitle>
			<S.Header>
				<UserProfile userName={'example@example.com'} />
				<S.SidebarBtnMinify>
					<Images.IconArrow />
				</S.SidebarBtnMinify>
			</S.Header>
			<S.Body>
				<nav>
					<ul>
						<S.NavItem>
							<NavLink to={OVERVIEW_ROUTE}>
								<S.ItemIcon>
									<Images.IconOverview />
								</S.ItemIcon>
								<S.ItemTitle>Overview</S.ItemTitle>
							</NavLink>
							<S.BtnAddNewTask>
								<Images.IconPlus />
							</S.BtnAddNewTask>
							<S.BannerActiveTask>{'9'}</S.BannerActiveTask>
						</S.NavItem>
					</ul>
				</nav>
			</S.Body>
			<S.Footer></S.Footer>
		</S.Container>
	);
};
