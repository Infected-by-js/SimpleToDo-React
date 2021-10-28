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

			<div className="sidebar__body">
				<nav className="body__nav">
					<ul>
						<li className="overview">
							<a href="#">
								<span className="icon">
									<Images.Overview />
								</span>
								<span>Overview</span>
							</a>
						</li>
						<li className="Tasks">
							<a href="#">
								<span className="icon">
									<Images.Overview />
								</span>{' '}
								<span>Tasks</span>
							</a>
							<button className="addNewTask">
								<span className="addNewTaskIcon"></span>
							</button>
							<span className="activeTasksBanner">4</span>
						</li>
						<li className="groups">
							<a href="#">
								<span className="icon">
									<Images.Groups />
								</span>{' '}
								<span>Groups</span>
							</a>
						</li>
						<li className="stats">
							<a href="#">
								<span className="icon">
									<Images.Stats />
								</span>{' '}
								<span>Stats</span>
							</a>
						</li>
						<li className="calendar">
							<a href="#">
								<span className="icon"></span> <Images.Calendar />
								<span>Calendar</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>

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
