// @flow
import { combineReducers } from 'redux';

import { userReducer } from '../redux/user';
import { coursesReducer } from '../redux/courses';

export default combineReducers({
    user: userReducer,
    courses: coursesReducer,
});
