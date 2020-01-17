// @flow
import * as React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './styles/desktop.addCoursePage.scss';

import { CourseActions } from '../redux/course';
import CourseForm from '../course/courseForm';
import withCourse from '../course/withCourse';
import type { Course } from '../course/types';

type Props = {
    course: Course,
};

const UpdateCoursePage = ({ course }: Props): React.Node => {
    const dispatch = useDispatch();
    const history = useHistory();
    const onSave = React.useCallback(
        (name, description) => {
            dispatch(CourseActions.updateCourse(course.id, name, description, history));
        },
        [dispatch, history, course],
    );

    return (
        <div className={'add-course-page'}>
            <Card className={'course-form'}>
                <Card.Body>
                    <Card.Title>Edit Course</Card.Title>
                    <CourseForm save={onSave} defaultValues={course} />
                </Card.Body>
            </Card>
        </div>
    );
};

export default withCourse(UpdateCoursePage);
