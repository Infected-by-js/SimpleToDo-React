import React from 'react';
import * as S from './styles.js';
import * as Images from '../../assets/icons';
// import { NavList } from '../NavList';
import { UserProfile } from '../UserProfile/';
import { SidebarThemeSwitch } from '../SidebarThemeSwitch/';

// TODO: need refactor below
// const bodyNavItems = [
// 	{ Icon: Images.Overview, title: 'Overview', routeTo: 'overview' },
// 	{ Icon: Images.Groups, title: 'Groups', routeTo: 'groups' },
// 	{ Icon: Images.Stats, title: 'Stats', routeTo: 'stats' },
// 	{ Icon: Images.Calendar, title: 'Calendar', routeTo: 'calendar' },
// ];

// const footerNavItems = [
// 	{ Icon: Images.Settings, title: 'Settings', routeTo: 'settings' },
// 	{ Icon: Images.LogOut, title: 'LogOut', routeTo: 'login' },
// ];

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

			<S.BodyNav>{/* <NavList items={bodyNavItems} /> */}</S.BodyNav>

			<S.Footer>
				<S.FooterNav>{/* <NavList items={footerNavItems} /> */}</S.FooterNav>
			</S.Footer>
			<SidebarThemeSwitch />
		</S.Sidebar>
	);
};
