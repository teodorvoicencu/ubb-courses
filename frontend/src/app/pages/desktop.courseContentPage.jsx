// @flow
import * as React from 'react';

import CourseContent from '../course/courseContent';

type Props = {
    course: Course,
};

const CourseContentPage = ({ course }: Props): React.Node => {
    return <CourseContent course={course} />;
};

export default CourseContentPage;
