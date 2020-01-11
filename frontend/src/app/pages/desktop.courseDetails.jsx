import * as React from 'react';

import './styles/desktop.courseDetails.scss';

import CourseDetails from '../course/courseDetails';
import CourseHeader from '../course/courseHeader';

const CourseDetailsPage = (): React.Node => {
    return (
        <div className={'details'}>
            <CourseHeader />
            <CourseDetails />
        </div>
    );
};

export default CourseDetailsPage;
