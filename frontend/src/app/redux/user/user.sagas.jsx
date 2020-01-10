// @flow
import {call, put} from 'redux-saga/effects';
import axios from 'axios';

import parseJWT from "../../util/JWT";

import UserActions from './user.redux';

export function* init() {
    try {
        const token = yield call([localStorage, localStorage.getItem], 'token');
        if (token) {
            const data = parseJWT(token);
            if (data.exp > new Date().getTime()/1000) {
                yield put(UserActions.initSuccess({loggedIn: true, ...data,}));
                return;
            }
        }
        yield put(UserActions.initSuccess({loggedIn: false}));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        yield put(UserActions.initFailure());
    }

}

export function* login({email, password}) {
    try {
        yield put(UserActions.loginLoading(true));
        const response = yield call(axios.post, '/auth/login/', {email, password});
        if (response.status === 200) {
            const token = response.data.accessToken;
            yield call([localStorage, localStorage.setItem], 'token', token);
            const data = parseJWT(token);
            yield put(UserActions.loginSuccess({loggedIn: true, ...data}));
        }
        yield put(UserActions.loginLoading(false));
    } catch (error) {
        yield put(UserActions.loginFailure('Invalid username or password!'));
    }
}

export function* register({email, name, authority, password}) {
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
        yield put(UserActions.registerFailure('Email address already in use!'));
    }
}

export function* logout(){
    try{
        yield call([localStorage, localStorage.removeItem], 'token');
        yield put(UserActions.logoutSuccess());
    }catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        yield put(UserActions.logoutFailure());
    }
}
