// @flow
import { combineReducers } from 'redux';

import { userReducer } from '../redux/user';
import { courseReducer } from '../redux/course';

export default combineReducers({
    user: userReducer,
    course: courseReducer
});
