import React from 'react';
import * as S from './styles.js';
import * as Images from '../../assets/icons';

export const Sidebar = () => {
	return (
		<S.Sidebar>
			<S.Header>
				<S.Title>Simple To Do App</S.Title>
				<S.UserWrapp>
					<S.UserAvatar />
					<S.UserName>example@example.com</S.UserName>
				</S.UserWrapp>
				<S.BtnMinifySidebar>
					<Images.Arrow />
				</S.BtnMinifySidebar>
			</S.Header>

			<S.Body>
				<S.BodyNav>
					<S.NavList>
						<S.NavItem className="overview">
							<S.Link href="#">
								<S.ItemIcon>
									<Images.Overview />
								</S.ItemIcon>
								<S.ItemTitle>Overview</S.ItemTitle>
							</S.Link>
						</S.NavItem>
						<S.NavItem className="Tasks">
							<S.Link href="#">
								<S.ItemIcon>
									<Images.Tasks />
								</S.ItemIcon>
								<S.ItemTitle>Tasks</S.ItemTitle>
							</S.Link>
							<S.BtnAddNewTask>
								<Images.Plus />
							</S.BtnAddNewTask>
							<S.ActiveTasksBanner>4</S.ActiveTasksBanner>
						</S.NavItem>
						<S.NavItem className="groups">
							<S.Link href="#">
								<S.ItemIcon>
									<Images.Groups />
								</S.ItemIcon>
								<S.ItemTitle>Groups</S.ItemTitle>
							</S.Link>
						</S.NavItem>
						<S.NavItem className="Stats">
							<S.Link href="#">
								<S.ItemIcon>
									<Images.Stats />
								</S.ItemIcon>
								<S.ItemTitle>Stats</S.ItemTitle>
							</S.Link>
						</S.NavItem>
						<S.NavItem className="calendar">
							<S.Link href="#">
								<S.ItemIcon>
									<Images.Calendar />
								</S.ItemIcon>
								<S.ItemTitle>Calendar</S.ItemTitle>
							</S.Link>
						</S.NavItem>
					</S.NavList>
				</S.BodyNav>
			</S.Body>

			<S.Footer>
				<S.FooterNav>
					<S.NavList>
						<S.NavItem className="settings">
							<S.Link href="#">
								<S.ItemIcon>
									<Images.Settings />
								</S.ItemIcon>
								<S.ItemTitle>Settings</S.ItemTitle>
							</S.Link>
						</S.NavItem>
						<S.NavItem className="logout">
							<S.Link href="#">
								<S.ItemIcon>
									<Images.LogOut />
								</S.ItemIcon>
								<S.ItemTitle>Log Out</S.ItemTitle>
							</S.Link>
						</S.NavItem>
					</S.NavList>
				</S.FooterNav>

				<S.ThemeSwitcher>
					<S.ThemeButtonWrapp theme="light" _position="left">
						<S.ThemeIcon>
							<Images.ThemeLight />
						</S.ThemeIcon>
						<S.ThemeText>Light</S.ThemeText>
						<input type="radio" name="theme" value="light" defaultChecked />
					</S.ThemeButtonWrapp>

					<S.ThemeButtonWrapp theme="dark" _position="right">
						<S.ThemeIcon>
							<Images.ThemeDark />
						</S.ThemeIcon>
						<S.ThemeText>Dark</S.ThemeText>
						<input type="radio" name="theme" value="dark" />
					</S.ThemeButtonWrapp>
				</S.ThemeSwitcher>
			</S.Footer>
		</S.Sidebar>
	);
};
