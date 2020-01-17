import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import parseJWT from '../../util/JWT';

import UserActions from './user.redux';

export function* init() {
    try {
        // Get the access token and from the local storage
        const accessToken = yield call([localStorage, localStorage.getItem], 'accessToken');
        const tokenType = yield call([localStorage, localStorage.getItem], 'tokenType');

        // If it is present take the data from it
        if (accessToken) {
            const data = parseJWT(accessToken);
            // Verify if it is not expired
            if (data.exp > new Date().getTime() / 1000) {
                // Add the authorization header to axios
                axios.defaults.headers.common.Authorization = `${tokenType} ${accessToken}`;
                yield put(
                    UserActions.initSuccess({
                        loggedIn: true,
                        id: data.id,
                        name: data.name,
                        username: data.username,
                        authorities: data.authorities,
                    }),
                );
                return;
            }
        }
        yield put(UserActions.initSuccess({ loggedIn: false }));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        yield put(UserActions.initFailure());
    }
}

export function* login({ email, password }) {
    try {
        yield put(UserActions.loginLoading(true));
        const response = yield call(axios.post, '/auth/login/', { email, password });
        if (response.status === 200) {
            const { accessToken, tokenType } = response.data;

            // Add authorization header for backend to know the current logged in user
            axios.defaults.headers.common.Authorization = `${tokenType} ${accessToken}`;

            // Save access token and type in localstorage
            yield call([localStorage, localStorage.setItem], 'accessToken', accessToken);
            yield call([localStorage, localStorage.setItem], 'tokenType', tokenType);

            const data = parseJWT(accessToken);
            yield put(
                UserActions.loginSuccess({
                    loggedIn: true,
                    id: data.id,
                    name: data.name,
                    username: data.username,
                    authorities: data.authorities,
                }),
            );
        }
        yield put(UserActions.loginLoading(false));
    } catch (error) {
        yield put(UserActions.loginFailure('Invalid username or password!'));
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
        yield put(UserActions.registerFailure('Email address already in use!'));
    }
}

export function* logout() {
    try {
        // Remove the JWT from local storage
        yield call([localStorage, localStorage.removeItem], 'accessToken');
        yield call([localStorage, localStorage.removeItem], 'tokenType');

        // Remove the authorization header to be completely logged out
        delete axios.defaults.headers.common.Authorization;

        yield put(UserActions.logoutSuccess());
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        yield put(UserActions.logoutFailure());
    }
}
