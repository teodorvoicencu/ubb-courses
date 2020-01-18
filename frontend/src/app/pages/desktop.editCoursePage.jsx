// @flow
import * as React from 'react';
import PencilIcon from 'react-ionicons/lib/MdCreate';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './styles/desktop.editCoursePage.scss';

import { CourseActions } from '../redux/course';
import CourseForm from '../course/courseForm';
import withCourse from '../course/withCourse';
import type { Course } from '../course/types';
import { MediaAdminList } from '../media/admin';

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
        <div className={'content-container'}>
            <Row>
                <Col xs={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <PencilIcon className={'icon'} />
                                <span>Edit Course</span>
                            </Card.Title>
                            <CourseForm save={onSave} defaultValues={course} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Manage Lessons / Media</Card.Title>
                            <MediaAdminList course={course} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default withCourse(UpdateCoursePage);
