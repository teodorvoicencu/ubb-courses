// @flow
import { all, takeEvery, takeLatest } from 'redux-saga/effects';

import { init, login, logout, register, UserTypes } from '../redux/user';

export default function* rootSaga() {
    try {
        yield all([takeLatest(UserTypes.INIT, init)]);
        yield all([takeEvery(UserTypes.LOGIN, login)]);
        yield all([takeLatest(UserTypes.REGISTER, register)]);
        yield all([takeLatest(UserTypes.LOGOUT, logout)]);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
    }
}
