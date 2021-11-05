import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { OverviewPage } from '../pages/OverviewPage';
import { SignUpPage } from '../pages/AuthSignUpPage';
import { LoginPage } from '../pages/AuthLoginPage';
import { LOGIN_ROUTE, OVERVIEW_ROUTE, SIGN_UP_ROUTE } from '../constants/routes';
import PropTypes from 'prop-types';

export const AppRouter = () => {
	return (
		<Switch>
			{/* <ProtectedRoute path={OVERVIEW_ROUTE} exact>
				<OverviewPage />
			</ProtectedRoute> */}
			<Route path={OVERVIEW_ROUTE} exact>
				<OverviewPage />
			</Route>
			<Route path={SIGN_UP_ROUTE}>
				<SignUpPage />
			</Route>
			<Route path={LOGIN_ROUTE}>
				<LoginPage />
			</Route>
			<Redirect to={OVERVIEW_ROUTE} />
		</Switch>
	);
};

const ProtectedRoute = ({ children, ...rest }) => {
	const authed = false;

	return (
		<Route
			{...rest}
			render={({ location }) => {
				return authed ? (
					children
				) : (
					<>
						<Redirect to={LOGIN_ROUTE} />
					</>
				);
			}}
		/>
	);
};

ProtectedRoute.propTypes = {
	path: PropTypes.string.isRequired,
	children: PropTypes.object.isRequired,
	rest: PropTypes?.any,
};
