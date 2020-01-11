// @flow
import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import { addCourse, CourseTypes } from '../redux/course';

import { login, register, UserTypes } from '../redux/user';

export default function* rootSaga() {
    try {
        yield all([takeEvery(UserTypes.LOGIN, login)]);
        yield all([takeLatest(UserTypes.REGISTER, register)]);
        yield all([takeLatest(CourseTypes.ADD_COURSE, addCourse)]);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
    }
}
