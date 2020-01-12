// @flow
import * as React from 'react';

import './styles/desktop.courseDetailsPage.scss';

import CourseDescription from '../course/courseDescription';
import CourseHeader from '../course/courseHeader';
import withCourse from '../course/withCourse';
import type { Course } from '../course/types';

type Props = {
    course: Course,
};

const CourseDetailsPage = ({ course }: Props): React.Node => {
    return (
        <div className={'details'}>
            <CourseHeader course={course} />
            <CourseDescription description={course.description} />
        </div>
    );
};

export default withCourse(CourseDetailsPage);
