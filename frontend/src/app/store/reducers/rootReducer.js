import { ADD_COURSE, DELETE_COURSE, UPDATE_COURSE } from '../../constants/constants';

export function reducer(state, action) {
    switch (action.type) {
        case ADD_COURSE:
            return{
                ...state,
                courses: [...state.courses, action.payload]
            };
        case UPDATE_COURSE:
            return {
                ...state,
                courses: state.courses.map(course => (course.is === action.payload)? {...course, complete: !course.complete } : course)
            };
        case DELETE_COURSE:
            return {
                ...state,
                courses : state.courses.filter(course => course.id !== action.payload)
            };
        default:
            return state;
    }
}
