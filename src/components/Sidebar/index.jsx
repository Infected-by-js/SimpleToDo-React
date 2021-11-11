import React from 'react';
import * as S from './styles.js';
import * as Images from '../../assets/icons';
import { Link, NavLink, useHistory } from 'react-router-dom';
import {
	CALENDAR_ROUTE,
	LOGIN_ROUTE,
	OVERVIEW_ROUTE,
	STATS_ROUTE,
} from '../../constants/routes.js';
import { UserProfile } from '../UserProfile/index.jsx';
import { IconStats } from '../../assets/icons/IconStats';
import { ThemeSwitch } from '../ThemeSwitch/index.jsx';

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
				<S.SidebarBtnMinify />
			</S.Header>
			<S.Body>
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
				{/*  button */}
				<S.NavItem>
					<S.ItemIcon>
						<Images.IconGroups />
					</S.ItemIcon>
					<S.ItemTitle>Groups</S.ItemTitle>

					<S.GroupsIcon>
						<Images.IconArrow />
					</S.GroupsIcon>
				</S.NavItem>

				<S.NavItem>
					<NavLink to={STATS_ROUTE}>
						<S.ItemIcon>
							<Images.IconStats />
						</S.ItemIcon>
						<S.ItemTitle>Stats</S.ItemTitle>
					</NavLink>
				</S.NavItem>
				<S.NavItem>
					<NavLink to={CALENDAR_ROUTE}>
						<S.ItemIcon>
							<Images.IconCalendar />
						</S.ItemIcon>
						<S.ItemTitle>Calendar</S.ItemTitle>
					</NavLink>
				</S.NavItem>
			</S.Body>
			<S.Footer>
				<S.FooterBtnWrap>
					<S.NavItem>
						<S.ItemIcon>
							<Images.IconSettings />
						</S.ItemIcon>
						<S.ItemTitle>Settings</S.ItemTitle>
					</S.NavItem>
					<S.NavItem onClick={handleSignOut}>
						<S.ItemIcon>
							<Images.IconLogOut />
						</S.ItemIcon>
						<S.ItemTitle>Log-Out</S.ItemTitle>
					</S.NavItem>
				</S.FooterBtnWrap>
				<ThemeSwitch />
			</S.Footer>
		</S.Container>
	);
};
