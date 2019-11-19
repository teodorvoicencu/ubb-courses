import { ADD_COURSE, DELETE_COURSE, UPDATE_COURSE } from '../../constants/constants';

export const addCourseAction = (course) => ({
    type: ADD_COURSE,
    payload: course
});

export const deleteCourseAction = courseId => ({
    type: DELETE_COURSE,
    payload: courseId
});

export const updateCourseAction = courseId => ({
    type: UPDATE_COURSE,
    payload: courseId
});
