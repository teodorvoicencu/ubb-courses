// @flow
import * as React from 'react';

const HomePage = React.lazy(() => import('../pages/desktop.homePage.jsx'));
const LoginPage = React.lazy(() => import('../pages/desktop.loginPage.jsx'));
const RegisterPage = React.lazy(() => import('../pages/desktop.registerPage.jsx'));
const CoursePage = React.lazy(() => import('../pages/desktop.coursesPage.jsx'));
const AddCoursePage = React.lazy(() => import('../pages/desktop.addCoursePage.jsx'));

const Routes = [
    { path: '/', exact: true, name: 'Home', component: HomePage },
    { path: '/login', exact: true, name: 'Login', component: LoginPage },
    { path: '/register', exact: true, name: 'Register', component: RegisterPage },
    { path: '/courses', exact: true, name: 'Courses', component: CoursePage },
    { path: '/courses/create', exact: true, name: 'AddCourse', component: AddCoursePage },
];
export default Routes;
