// @flow
import * as React from 'react';

import './styles/desktop.coursesPage.scss';

import CourseList from '../course/coursesList';

const CoursePage = (): React.Node => {
    return (
        <div className={'mx-auto page-width-wrapper mx-2 padding-top'}>
            <CourseList />
        </div>
    );
};

export default CoursePage;
