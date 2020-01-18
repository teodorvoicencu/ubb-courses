import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import { AppRoutes } from '../../types';
import type { MediaItem } from '../../media';
import { MediaType } from '../../media';

import CourseActions from './course.redux';

const mockMediaList: MediaItem[] = [
    {
        id: 0,
        index: 0,
        title: 'a slide about slides',
        content: 'it aint much but its honest work',
        url: 'http://www.example.org',
        type: MediaType.TEXT,
    },
    {
        id: 1,
        index: 1,
        title: 'why love slides?',
        content: 'it aint much but its honest work',
        url: 'http://www.example.org',
        type: MediaType.TEXT,
    },
    {
        id: 2,
        index: 2,
        title: 'why hate slides?',
        content: 'it aint much but its honest work',
        url: 'http://www.example.org',
        type: MediaType.VIDEO,
    },
    {
        id: 3,
        index: 3,
        title: 'making a living selling used jalapenos',
        content: 'it aint much but its honest work',
        url: 'http://www.example.org',
        type: MediaType.VIDEO,
    },
];

export function* fetchCourse({ id }) {
    try {
        yield put(CourseActions.loading(true));
        const response = yield call(axios.get, `/courses/${id}`);
        if (response.status === 200) {
            yield put(
                CourseActions.fetchCourseSuccess({
                    data: { ...response.data, media: mockMediaList },
                }),
            );
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

export function* enrollCourse({ id }) {
    try {
        yield put(CourseActions.loading(true));
        const response = yield call(axios.post, `/courses/${id}/enroll`);
        if (response.status === 200) {
            yield put(CourseActions.enrollCourseSuccess());
        }
        yield put(CourseActions.loading(false));
    } catch (error) {
        yield put(CourseActions.loading(false));
        yield put(CourseActions.enrollCourseFailure());
    }
}

export function* createLesson({ courseID, title, content, url, lessonType }) {
    try {
        yield put(CourseActions.loading(true));
        const response = yield call(axios.post, `/courses/${courseID}/lessons`, {
            title,
            content,
            url,
            type: lessonType,
        });
        if (response.status === 200) {
            yield put(CourseActions.createLessonSuccess());
        }
        yield put(CourseActions.loading(false));
    } catch (error) {
        yield put(CourseActions.loading(false));
        yield put(CourseActions.createLessonFailure());
    }
}

export function* reorderLesson({ courseID, lessonID, order }) {
    try {
        yield put(CourseActions.loading(true));
        const response = yield call(axios.post, `/courses/${courseID}/lessons/${lessonID}`, order);
        if (response.status === 200) {
            yield put(CourseActions.reorderLessonSuccess());
        }
        yield put(CourseActions.loading(false));
    } catch (error) {
        yield put(CourseActions.loading(false));
        yield put(CourseActions.reorderLessonFailure());
    }
}
