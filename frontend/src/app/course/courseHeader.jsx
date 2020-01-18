// @flow
import * as React from 'react';

import './styles/courseHeader.scss';

import CourseHeaderSummary from './courseHeaderSummary';
import CourseHeaderStats from './courseHeaderStats';
import type { Course } from './types';

type Props = {
    course: Course,
};

const CourseHeader = ({ course }: Props): React.Node => {
    return (
        <div className={'row'}>
            <CourseHeaderSummary {...course} ownerId={course.owner.id} />
            <CourseHeaderStats />
        </div>
    );
};

export default CourseHeader;
