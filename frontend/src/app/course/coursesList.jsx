// @flow
import * as React from 'react';
import Row from 'react-bootstrap/Row';

import type { Course } from './types';
import CourseCard from './courseCard';
import withCourses from './withCourses';

type Props = {
    courses: Course[],
};

const CoursesList = ({ courses }: Props): React.Node => {
    return courses
        ? courses.map(course => {
              return (
                  <Row key={course.id}>
                      <CourseCard course={course} />
                  </Row>
              );
          })
        : null;
};

export default withCourses(CoursesList);
