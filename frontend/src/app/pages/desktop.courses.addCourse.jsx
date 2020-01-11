// @flow
import * as React from 'react';
import { Card } from 'react-bootstrap';

import AddCourseForm from '../course/course.addCourseForm';
import './styles/desktop.course.addCourse.scss';

const AddCoursePage = (): React.Node => {
    return (
        <div className={'add-course-page'}>
            <Card className={'course-form'}>
                <Card.Body>
                    <Card.Title>Add Course</Card.Title>
                    <AddCourseForm />
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddCoursePage;
