// @flow
import * as React from 'react';
import Row from 'react-bootstrap/Row';

import type { Course } from './types';
import CourseCard from './courseCard';

const mockCourses: Array<Course> = [
    {
        id: 1,
        name: 'Course 1',
        description: 'Description 1',
    },
    {
        id: 2,
        name: 'Course 2',
        description: 'Description 1',
    },
    { id: 3, name: 'Course 3', description: 'Description 1' },
    {
        id: 4,
        name: 'Course 4',
        description: 'Description 1',
    },
    { id: 5, name: 'Course 5', description: 'Description 1' },
];

const CoursesList = (): React.Node => {
    return mockCourses.map(course => {
        return (
            <Row key={course.id}>
                <CourseCard course={course} />
            </Row>
        );
    });
};

export default CoursesList;
