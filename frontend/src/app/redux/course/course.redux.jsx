import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    addCourseLoading: ['value'],
    addCourse: ['name', 'description'],
    addCourseSuccess: ['data'],
    addCourseError: ['data'],
});

export const CourseTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false,
    error: null,
    accessToken: '',
    tokenType: '',
    added: false
};

export const courseReducer = createReducer(INITIAL_STATE, {
    [Types.ADD_COURSE_LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.ADD_COURSE_SUCCESS]:state => ({ ...state, added: true }),
    [Types.ADD_COURSE_ERROR]: (state, { data }) => ({ ...state,  error: data }),
});
