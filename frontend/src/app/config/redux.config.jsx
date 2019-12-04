// @flow
import { combineReducers } from 'redux';

import { userReducer } from '../redux/user';

export default combineReducers({
    user: userReducer,
});
