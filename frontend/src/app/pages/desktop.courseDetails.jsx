// @flow
import * as React from 'react';

import './styles/desktop.courseDetails.scss';

import CourseDescription from '../course/courseDescription';
import CourseHeader from '../course/courseHeader';

const CourseDetailsPage = (): React.Node => {
    return (
        <div className={'details'}>
            <CourseHeader />
            <CourseDescription />
        </div>
    );
};

export default CourseDetailsPage;
