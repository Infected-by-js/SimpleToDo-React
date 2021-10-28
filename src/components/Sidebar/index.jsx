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

			<div className="sidebar__footer">
				<nav className="footer__nav">
					<ul>
						<li className="settings">
							<a href="#">
								<span className="icon"></span> <Images.Settings />
								<span>Settings</span>
							</a>
						</li>
						<li className="logout">
							<a href="#">
								<span className="icon"></span>
								<Images.LogOut /> <span>Log Out</span>
							</a>
						</li>
					</ul>
				</nav>

				<div className="themeSwitcher">
					<label>
						<span>
							<Images.ThemeLight />
						</span>
						<input type="radio" name="theme" value="light" defaultChecked />
					</label>
					<label>
						<input type="radio" name="theme" value="dark" />
						<span>
							<Images.ThemeDark />
						</span>
					</label>
				</div>
			</div>
		</S.Sidebar>
	);
};
