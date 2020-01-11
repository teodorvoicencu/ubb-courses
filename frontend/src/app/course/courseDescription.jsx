// @flow
import * as React from 'react';
import { Card } from 'react-bootstrap';

import './styles/courseDetails.scss';

const CourseDescription = (): React.Node => {
    return (
        <Card className={'courseDetailsCard shadow-sm'}>
            <Card.Header as={'h5'}>Description</Card.Header>
            <Card.Body className={'courseDetails'}>
                <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>
            </Card.Body>
        </Card>
    );
};

export default CourseDescription;
