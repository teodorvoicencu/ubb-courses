import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    loginLoading: ['value'],
    loginSuccess: ['data'],
    loginError: ['data'],
    login: ['email', 'password'],
});

export const UserTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false,
    error: null,
    loggedIn: false,
    accessToken: '',
    tokenType: '',
};

export const userReducer = createReducer(INITIAL_STATE, {
    [Types.LOGIN_LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.LOGIN_SUCCESS]: (state, { data }) => ({ ...state, ...data }),
    [Types.LOGIN_ERROR]: (state, { data }) => ({ ...state, error: data }),
});
