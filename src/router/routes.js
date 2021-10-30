import { HomePage } from '../pages/Home/index';
import { TasksPage } from '../pages/Tasks/index';
import { GroupsPage } from '../pages/Groups/index';
import { StatsPage } from '../pages/Stats/index';
import { CalendarPage } from '../pages/Calendar/index';
import { SettingsPage } from '../pages/Settings/index';

export const privateRoutes = [
	{ path: '/', component: HomePage, exact: true },
	{ path: '/tasks', component: TasksPage, exact: true },
	{ path: '/groups', component: GroupsPage, exact: true },
	{ path: '/stats', component: StatsPage, exact: true },
	{ path: '/calendar', component: CalendarPage, exact: true },
	{ path: '/settings', component: SettingsPage, exact: true },
];
