import {createStore} from 'redux';
import uuid from 'uuid/v4';
import { reducer } from './reducers/rootReducer';

export const initState = {
    courses: [
        {
            id: uuid(),
            title: "Fundamentals of Programming",
            prof: "Arthur Molnar",
            domain: "Computer Science",
            nrOfLessons: 14,
            completed: true
        },
        {
            id: uuid(),
            title: "Computers' Architecture",
            prof: "Alexandru Vancea",
            domain: "Computer Science",
            nrOfLessons: 14,
            completed: false
        },
        {
            id: uuid(),
            title: "Object Oriented Programming",
            prof: "Bocicor Iuliana",
            domain: "Computer Science",
            nrOfLessons: 14,
            completed: false
        }
    ]
};


export const store = createStore(
    reducer,
    initState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);




