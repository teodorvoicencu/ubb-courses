// @flow
import * as React from 'react';

import './styles/courseHeader.scss';

import CourseHeaderSummary from './courseHeaderSummary';
import CourseHeaderExtra from './courseHeaderExtra';

const CourseHeader = (): React.Node => {
    return (
        <div className={'row'}>
            <CourseHeaderSummary />
            <CourseHeaderExtra />
        </div>
    );
};

export default CourseHeader;
