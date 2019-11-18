import { UPDATE_COURSE } from '../../constants/constants';

export const updateCourseAction = courseId => ({
    type: UPDATE_COURSE,
    payload: courseId
});
