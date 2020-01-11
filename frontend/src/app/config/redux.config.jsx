// @flow
import { combineReducers } from 'redux';

import { userReducer } from '../redux/user';
import { coursesReducer } from '../redux/courses';
import { courseReducer } from '../redux/course';

export default combineReducers({
    user: userReducer,
    courses: coursesReducer,
    course: courseReducer,
});
