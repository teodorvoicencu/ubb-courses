import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    fetchCourses: [],
    fetchSuccess: ['data'],
    fetchFailure: [],
    loading: ['value'],
});

export const CoursesTypes = Types;
export default Creators;

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: null,
};

export const coursesReducer = createReducer(INITIAL_STATE, {
    [Types.LOADING]: (state, { value }) => ({ ...state, loading: value }),
});
