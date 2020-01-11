// @flow
import { Button, Card } from 'react-bootstrap';
import * as React from 'react';

import './styles/courseHeaderSummary.scss';

const isEnrolled = true;

type Props = {
    title: string,
};

const CourseHeaderSummary = ({ title }: Props): React.Node => {
    return (
        <Card className={'courseHeader'} bg={'light'}>
            <div className={'courseSummary'}>
                <h1>{title}</h1>
                <div className={'courseOrigin'}>
                    <h5 className={'courseTeacher'}>Course Teacher</h5>
                    <h5>Course University</h5>
                </div>
            </div>
            <Button className={'enrollButton'} variant={'primary'} size={'lg'} block>
                {isEnrolled ? 'Open Course' : 'Enroll'}
            </Button>
        </Card>
    );
};

export default CourseHeaderSummary;
