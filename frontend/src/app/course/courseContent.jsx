// @flow
import * as React from 'react';
import { Tab, Row, Col } from 'react-bootstrap';

import CourseNavigation from './courseNavigation';
import CourseSlideContent from './courseSlideContent';
import type { Course } from './types';

type Props = {
    course: Course,
};

const CourseContent = ({ course }: Props): React.Node => {
    const [slideIndex, setSlideIndex] = React.useState(0);

    const handleSlideIndexChange = newSlideIndex => setSlideIndex(newSlideIndex);

    return (
        <Tab.Container activeKey={slideIndex} onSelect={handleSlideIndexChange}>
            <Row>
                <Col sm={2}>
                    <CourseNavigation slides={course.slides} />
                </Col>
                <Col sm={10}>
                    <CourseSlideContent slide={course.slides[slideIndex]} />
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default CourseContent;
