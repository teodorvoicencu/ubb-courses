// @flow
import * as React from 'react';

import CoursesPage from '../pages/desktom.courses';

const HomePage = React.lazy(() => import('../pages/desktop.home.jsx'));
const LoginPage = React.lazy(() => import('../pages/desktop.login.jsx'));
const RegisterPage = React.lazy(() => import('../pages/desktop.register.jsx'));

const Routes = [
    { path: '/', exact: true, name: 'Home', component: HomePage },
    { path: '/login', exact: true, name: 'Login', component: LoginPage },
    { path: '/register', exact: true, name: 'Register', component: RegisterPage },
    { path: '/courses', exact: true, name: 'Courses', component: CoursesPage },
];
export default Routes;
