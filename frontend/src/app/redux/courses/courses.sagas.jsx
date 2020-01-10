import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import CoursesActions from './courses.redux';

export function* fetchCourses() {
    try {
        yield put(CoursesActions.loading(true));
        const response = yield call(axios.get, '/courses/all/');
        if (response.status === 200) {
            yield put(CoursesActions.fetchSuccess({ data: response.data }));
        }
        yield put(CoursesActions.loading(false));
    } catch (error) {
        yield put(CoursesActions.loading(false));
        yield put(CoursesActions.fetchFailure());
    }
}
