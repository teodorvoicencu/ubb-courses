// @flow

const AppRoutes = Object.freeze({
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    COURSES: '/courses',
    COURSE: {
        DETAILS: value => `/courses/${value}`,
        CREATE: '/courses/create',
        EDIT: value => `/courses/${value}/update`,
        ADD_LESSON: value => `/courses/${value}/add-lesson`,
        CONTENT: value => `/courses/${value}/content`,
    },
    PROFILE: '/profile',
});

export default AppRoutes;
