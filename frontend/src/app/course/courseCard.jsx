// @flow
import * as React from 'react';
import Card from 'react-bootstrap/Card';

import './styles/courseCard.scss';
import type { Course } from './types';

type Props = {
    course: Course,
};

const CourseCard = ({ course }: Props): React.Node => {
    return (
        <Card className={'card shadow-sm show-pointer'}>
            <Card.Header as={'h5'}>{course.name}</Card.Header>
            <Card.Body>
                <Card.Text>{course.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CourseCard;
