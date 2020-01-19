// @flow
import * as React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import './styles/desktop.addLessonPage.scss';

import withCourse from '../course/withCourse';
import type { Course } from '../course/types';
import { LessonForm } from '../media/admin/lessonForm';

type Props = {
    course: Course,
};

const AddLessonPage = ({ course }: Props) => {
    return (
        <div className={'content-container'}>
            <Row>
                <Col>
                    <Card className={'course-form'}>
                        <Card.Body>
                            <Card.Title>Add Media Item / Lesson</Card.Title>
                            Add below a title and description for the newly added item. Then, select
                            a type of content and fill in the necessary details.
                            <div className={'lesson-form-container'}>
                                <LessonForm course={course} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default withCourse(AddLessonPage);
