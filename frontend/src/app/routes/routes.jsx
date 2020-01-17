// @flow
import * as React from 'react';

import { AppRoutes } from '../types';

import { RouteTypes } from './types';

const HomePage = React.lazy(() => import('../pages/desktop.homePage.jsx'));
const LoginPage = React.lazy(() => import('../pages/desktop.loginPage.jsx'));
const RegisterPage = React.lazy(() => import('../pages/desktop.registerPage.jsx'));
const CoursePage = React.lazy(() => import('../pages/desktop.coursesPage.jsx'));
const AddCoursePage = React.lazy(() => import('../pages/desktop.addCoursePage.jsx'));
const CourseDetailsPage = React.lazy(() => import('../pages/desktop.courseDetailsPage.jsx'));
const ProfilePage = React.lazy(() => import('../pages/desktop.userProfilePage.jsx'));

const Routes = [
    {
        path: AppRoutes.HOME,
        exact: true,
        name: 'Home',
        component: HomePage,
        type: RouteTypes.PUBLIC,
    },
    {
        path: AppRoutes.LOGIN,
        exact: true,
        name: 'Login',
        component: LoginPage,
        type: RouteTypes.PUBLIC,
    },
    {
        path: AppRoutes.REGISTER,
        exact: true,
        name: 'Register',
        component: RegisterPage,
        type: RouteTypes.PUBLIC,
    },
    {
        path: AppRoutes.COURSES,
        exact: true,
        name: 'Courses',
        component: CoursePage,
        type: RouteTypes.PUBLIC,
    },
    {
        path: AppRoutes.COURSE.CREATE,
        exact: true,
        name: 'AddCourse',
        component: AddCoursePage,
        type: RouteTypes.PRIVATE.TEACHER,
    },
    {
        path: AppRoutes.COURSE.DETAILS(':id'),
        exact: true,
        name: 'Course',
        component: CourseDetailsPage,
        type: RouteTypes.PUBLIC,
    },
    {
        path: AppRoutes.PROFILE,
        exact: true,
        name: 'ProfilePage',
        component: ProfilePage,
        type: RouteTypes.PRIVATE.STUDENT,
    },
];
export default Routes;
