import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { OVERVIEW_ROUTE, SIGN_UP_ROUTE } from '../utils/consts';

export const AppRouter = () => {
	const user = false;

	return user ? (
		<Switch>
			{privateRoutes.map(({ path, Component, exact }) => (
				<Route key={path} path={path} component={Component} exact={exact} />
			))}
			<Redirect to={OVERVIEW_ROUTE} />
		</Switch>
	) : (
		<Switch>
			{publicRoutes.map(({ path, Component, exact }) => (
				<Route key={path} path={path} component={Component} exact={exact} />
			))}
			<Redirect to={SIGN_UP_ROUTE} />
		</Switch>
	);
};
