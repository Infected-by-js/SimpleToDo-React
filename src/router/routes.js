import { OverviewPage } from '../pages/OverviewPage';
import { SignUpPage } from '../pages/AuthPage';

import * as R from '../utils/consts';

export const publicRoutes = [{ path: R.SIGN_UP_ROUTE, Component: SignUpPage, exact: true }];

export const privateRoutes = [{ path: R.OVERVIEW_ROUTE, Component: OverviewPage, exact: true }];
