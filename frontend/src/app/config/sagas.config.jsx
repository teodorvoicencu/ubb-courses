// @flow
import { all, takeEvery } from 'redux-saga/effects';

import { login, UserTypes } from '../redux/user';

export default function* rootSaga() {
    try {
        yield all([takeEvery(UserTypes.LOGIN, login)]);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
    }
}
