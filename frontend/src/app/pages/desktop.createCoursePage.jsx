// @flow
import * as React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './styles/desktop.addCoursePage.scss';

import { CourseActions } from '../redux/course';
import CourseForm from '../course/courseForm';

const defaultValues = {
    name: '',
    description: '',
};

const CreateCoursePage = (): React.Node => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onSave = React.useCallback(
        (name, description) => {
            dispatch(CourseActions.createCourse(name, description, history));
        },
        [dispatch, history],
    );

    return (
        <div className={'add-course-page'}>
            <Card className={'course-form'}>
                <Card.Body>
                    <Card.Title>Add Course</Card.Title>
                    <CourseForm defaultValues={defaultValues} save={onSave} />
                </Card.Body>
            </Card>
        </div>
    );
};

export default CreateCoursePage;
