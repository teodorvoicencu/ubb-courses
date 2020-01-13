// @flow

const AppRoutes = Object.freeze({
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    COURSES: '/courses',
    COURSE: {
        DETAILS: value => `/courses/${value}`,
        CREATE: '/courses/create',
    },
    PROFILE: '/profile',
});

export default AppRoutes;
