// @flow
import * as React from 'react';

const HomePage = React.lazy(() => import('../pages/desktop.home.jsx'));

const Routes = [{ path: '/', exact: true, name: 'Home', component: HomePage }];
export default Routes;
