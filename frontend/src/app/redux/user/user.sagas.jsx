// @flow
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import UserActions from './user.redux';

export function* login({ email, password }) {
    try {
        yield put(UserActions.loginLoading(true));
        const response = yield call(axios.post, '/auth/login/', { email, password });
        if (response.status === 200) {
            yield put(UserActions.loginSuccess({ ...response.data, loggedIn: true }));
        }
        yield put(UserActions.loginLoading(false));
    } catch (error) {
        yield put(UserActions.loginError('Invalid username or password!'));
    }
}

export function* register({ email, name, authority, password }) {
    try {
        yield put(UserActions.registerLoading(true));
        const response = yield call(axios.post, '/auth/register/', {
            email,
            name,
            authority,
            password,
        });
        if (response.status === 200) {
            yield put(UserActions.registerSuccess());
        }
        yield put(UserActions.registerLoading(false));
    } catch (error) {
        yield put(UserActions.registerError('Email address already in use!'));
    }
}
