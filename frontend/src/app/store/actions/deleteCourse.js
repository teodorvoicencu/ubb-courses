import { DELETE_COURSE } from '../../constants/constants';

export const deleteCourseAction = courseId => ({
    type: DELETE_COURSE,
    payload: courseId
});
