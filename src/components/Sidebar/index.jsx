import React from 'react';
import * as S from './styles.js';
import * as Images from '../../assets/icons';
import { NavList } from '../NavList';
import { UserProfile } from '../UserProfile/';
import { SidebarThemeSwitch } from '../SidebarThemeSwitch/';

// TODO: need refactor below
const bodyNavItems = [
	{ Icon: Images.Overview, title: 'Overview', value: 'overview' },
	{ Icon: Images.Tasks, title: 'Tasks', value: 'tasks' },
	{ Icon: Images.Groups, title: 'Groups', value: 'groups' },
	{ Icon: Images.Stats, title: 'Stats', value: 'stats' },
	{ Icon: Images.Calendar, title: 'Calendar', value: 'calendar' },
];

const footerNavItems = [
	{ Icon: Images.Settings, title: 'Settings', value: 'settings' },
	{ Icon: Images.LogOut, title: 'LogOut', value: 'logOut' },
];

const userName = 'example@example.com';

export const Sidebar = () => {
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
					<NavList items={footerNavItems} />
				</S.FooterNav>
				<SidebarThemeSwitch />
			</S.Footer>
		</S.Sidebar>
	);
};
