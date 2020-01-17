import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    init: [],
    initSuccess: ['data'],
    initFailure: [],
    loginLoading: ['value'],
    loginSuccess: ['data'],
    loginFailure: ['data'],
    login: ['email', 'password'],
    registerLoading: ['value'],
    registerSuccess: [],
    registerFailure: ['data'],
    register: ['email', 'name', 'authority', 'password'],
    logout: [],
    logoutSuccess: [],
    logoutFailure: [],
});

export const UserTypes = Types;
export default Creators;

const INITIAL_STATE = {
    loading: false,
    error: null,
    loggedIn: undefined,
    registered: false,
    name: null,
    username: null,
    authorities: [],
    id: null,
};

export const userReducer = createReducer(INITIAL_STATE, {
    [Types.INIT_SUCCESS]: (state, { data }) => ({ ...state, ...data }),
    [Types.LOGIN_LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.LOGIN_SUCCESS]: (state, { data }) => ({ ...state, ...data }),
    [Types.LOGIN_FAILURE]: (state, { data }) => ({ ...state, error: data }),
    [Types.REGISTER_LOADING]: (state, { value }) => ({ ...state, loading: value }),
    [Types.REGISTER_SUCCESS]: state => ({ ...state, registered: true }),
    [Types.REGISTER_FAILURE]: (state, { data }) => ({ ...state, error: data }),
    [Types.LOGOUT_SUCCESS]: state => ({
        ...state,
        loggedIn: false,
        name: null,
        username: null,
        authorities: [],
    }),
});
