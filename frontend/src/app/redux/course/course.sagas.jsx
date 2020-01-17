import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import { AppRoutes } from '../../types';

import CourseActions from './course.redux';

export function* fetchCourse({ id }) {
    try {
        yield put(CourseActions.loading(true));
        const response = yield call(axios.get, `/courses/${id}`);
        if (response.status === 200) {
            yield put(CourseActions.fetchCourseSuccess({ data: response.data }));
        }
        yield put(CourseActions.loading(false));
    } catch (error) {
        yield put(CourseActions.loading(false));
        yield put(CourseActions.fetchCourseFailure());
    }
}

export function* createCourse({ name, description, history }) {
    try {
        yield put(CourseActions.loading(true));
        const response = yield call(axios.post, '/courses/', { name, description });
        if (response.status === 200) {
            yield put(CourseActions.createCourseSuccess());
        }
        yield call(history.push, AppRoutes.COURSES);
        yield put(CourseActions.loading(false));
    } catch (error) {
        yield put(CourseActions.loading(false));
        yield put(CourseActions.createCourseFailure());
    }
}

export function* updateCourse({ id, name, description, history }) {
    try {
        yield put(CourseActions.loading(true));
        const response = yield call(axios.put, `/courses/${id}`, { name, description });
        if (response.status === 200) {
            yield put(CourseActions.updateCourseSuccess());
        }
        yield call(history.push, AppRoutes.COURSE.DETAILS(id));
        yield put(CourseActions.loading(false));
    } catch (error) {
        yield put(CourseActions.loading(false));
        yield put(CourseActions.updateCourseFailure());
    }
}

export function* deleteCourse({ id, history }) {
    try {
        yield put(CourseActions.loading(true));
        const response = yield call(axios.delete, `/courses/${id}`);
        if (response.status === 200) {
            yield put(CourseActions.deleteCourseSuccess());
        }
        yield call(history.push, AppRoutes.COURSES);
        yield put(CourseActions.loading(false));
    } catch (error) {
        yield put(CourseActions.loading(false));
        yield put(CourseActions.deleteCourseFailure());
    }
}
