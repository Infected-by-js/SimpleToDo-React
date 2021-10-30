import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import * as S from './AppStyled';
import { Sidebar } from './components/Sidebar';
import { privateRoutes } from './router/routes';

const App = () => {
	return (
		<BrowserRouter>
			<S.App>
				<Sidebar />
				<Switch>
					{privateRoutes.map(({ path, component, exact }) => (
						<Route key={path} path={path} component={component} exact={exact} />
					))}
					<Redirect to="/" />
				</Switch>
			</S.App>
		</BrowserRouter>
	);
};

export default App;
