import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    fetchCourse: ['id'],
    fetchCourseSuccess: ['data'],
    fetchCourseFailure: [],
    createCourse: ['name', 'description', 'history'],
    createCourseSuccess: [],
    createCourseFailure: [],
    updateCourse: ['id', 'name', 'description', 'history'],
    updateCourseSuccess: [],
    updateCourseFailure: [],
    deleteCourse: ['id', 'history'],
    deleteCourseSuccess: [],
    deleteCourseFailure: [],
    enrollCourse: ['id'],
    enrollCourseSuccess: [],
    enrollCourseFailure: [],
    createLesson: ['courseID', 'title', 'content', 'url', 'lessonType', 'history'],
    createLessonSuccess: [],
    createLessonFailure: [],
    reorderLesson: ['courseID', 'lessonID', 'order', 'history'],
    reorderLessonSuccess: [],
    reorderLessonFailure: [],
    loading: ['value'],
});

export const CourseTypes = Types;
export default Creators;

const INITIAL_STATE = {
    data: null,
    loading: false,
};

export const courseReducer = createReducer(INITIAL_STATE, {
    [Types.LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.FETCH_COURSE_SUCCESS]: (state, { data }) => ({ ...state, ...data }),
});
