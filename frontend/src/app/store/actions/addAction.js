import { ADD_COURSE } from '../../constants/constants';

export const addCourseAction = (course) => ({
    type: ADD_COURSE,
    payload: course
});
