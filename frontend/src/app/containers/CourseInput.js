import React from 'react';
import  { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';

import { addCourseAction } from '../store/actions/courseActions';
import AddCourseForm from './AddCourseForm';


export default () => {
    const dispatch = useDispatch();
    const addCourse = (course) => dispatch(addCourseAction(course));

    const fromChild = (data) => {
        addCourse(data);
    };


    return (
        <div className="course-input-container">
            <Form>
                <AddCourseForm parentCallback = {fromChild}/>
            </Form>
        </div>
    )}
