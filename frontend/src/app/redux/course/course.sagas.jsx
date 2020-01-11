import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import CourseActions from './course.redux';

export function* createCourse({ name, description }) {
    try {
        yield put(CourseActions.loading(true));
        const response = yield call(axios.post, '/courses/', { name, description });
        if (response.status === 200) {
            yield put(CourseActions.createCourseSuccess());
        }
        yield put(CourseActions.loading(false));
    } catch (error) {
        yield put(CourseActions.loading(false));
        yield put(CourseActions.createCourseFailure());
    }
}

export function* updateCourse({ id, name, description }) {
    try {
        yield put(CourseActions.loading(true));
        const response = yield call(axios.put, `/courses/${id}`, { name, description });
        if (response.status === 200) {
            yield put(CourseActions.updateCourseSuccess());
        }
        yield put(CourseActions.loading(false));
    } catch (error) {
        yield put(CourseActions.loading(false));
        yield put(CourseActions.updateCourseFailure());
    }
}
