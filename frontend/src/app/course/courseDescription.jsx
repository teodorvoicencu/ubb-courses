// @flow
import * as React from 'react';
import { Card } from 'react-bootstrap';

import './styles/courseDetails.scss';

type Props = {
    description: string,
};

const CourseDescription = ({ description }: Props): React.Node => {
    return (
        <Card className={'courseDetailsCard shadow-sm'}>
            <Card.Header as={'h5'}>Description</Card.Header>
            <Card.Body className={'courseDetails'}>
                <p>{description}</p>
            </Card.Body>
        </Card>
    );
};

export default CourseDescription;
