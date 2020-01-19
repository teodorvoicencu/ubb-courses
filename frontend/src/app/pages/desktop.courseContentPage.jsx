// @flow
import * as React from 'react';

import CourseContent from '../course/courseContent';
import type { Course } from '../course/types';
import withCourse from '../course/withCourse';

type Props = {
    course: Course,
};

const CourseContentPage = ({ course }: Props): React.Node => {
    return <CourseContent course={course} />;
};

export default withCourse(CourseContentPage);
