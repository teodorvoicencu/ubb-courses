import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    createCourse: ['name', 'description'],
    createCourseSuccess: ['data'],
    createCourseFailure: [],
    loading: ['value'],
});

export const CourseTypes = Types;
export default Creators;

const INITIAL_STATE = {
    data: null,
    loading: false,
    error: null,
};

export const courseReducer = createReducer(INITIAL_STATE, {
    [Types.LOADING]: (state, { value }) => ({ ...state, loading: value }),
});
