// @flow
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import CourseActions from './course.redux';

export function* createCourse({ name, description }: { name: *, description: * }) {
    try {
        yield put(CourseActions.addCourseLoading(true));
        const response = yield call(axios.post, '/courses/', { name, description });
        if (response.status === 200) {
            yield put(CourseActions.addCourseSuccess({ ...response.data, added: true }));
        }
        yield put(CourseActions.addCourseLoading(false));
    } catch (error) {
        yield put(CourseActions.addCourseError('Invalid name or description!'));
    }
}
