// @flow
import { all, takeEvery, takeLatest } from 'redux-saga/effects';

import { init, login, logout, register, UserTypes } from '../redux/user';
import { CoursesTypes, fetchCourses } from '../redux/courses';
import { CourseTypes, createCourse, fetchCourse, updateCourse } from '../redux/course';

export default function* rootSaga() {
    try {
        // User Sagas
        yield all([takeLatest(UserTypes.INIT, init)]);
        yield all([takeEvery(UserTypes.LOGIN, login)]);
        yield all([takeLatest(UserTypes.REGISTER, register)]);
        yield all([takeLatest(UserTypes.LOGOUT, logout)]);
        // Courses Sagas
        yield all([takeLatest(CoursesTypes.FETCH_COURSES, fetchCourses)]);
        // Course Sagas
        yield all([takeLatest(CourseTypes.CREATE_COURSE, createCourse)]);
        yield all([takeLatest(CourseTypes.UPDATE_COURSE, updateCourse)]);
        yield all([takeLatest(CourseTypes.FETCH_COURSE, fetchCourse)]);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
    }
}
