// @flow
import * as React from 'react';
import { Tab, Row, Col } from 'react-bootstrap';

import './styles/courseContent.scss';

import CourseNavigation from './courseNavigation';
import CourseSlideContent from './courseSlideContent';
import type { Course } from './types';

type Props = {
    course: Course,
};

const CourseContent = ({ course }: Props): React.Node => {
    const [slideIndex, setSlideIndex] = React.useState(0);

    // Sort based on index
    const { lessons } = course;
    lessons.sort((x, y) => x.index - y.index);

    const handleSlideIndexChange = newSlideIndex => {
        // eslint-disable-next-line radix
        const found = lessons.filter(lesson => lesson.id === parseInt(newSlideIndex));
        setSlideIndex(found[0].orderIndex);
    };

    const handleNextSlide = () => {
        setSlideIndex(Math.min(slideIndex + 1, lessons.length - 1));
    };
    const handlePrevSlide = () => {
        setSlideIndex(Math.max(slideIndex - 1, 0));
    };

    const currentMediaItem = lessons[slideIndex];
    return (
        <Tab.Container activeKey={currentMediaItem.id} onSelect={handleSlideIndexChange}>
            <Row className="tabContainer">
                <Col sm={2} className="colNoMargin dropShadow">
                    <CourseNavigation
                        course={course}
                        slideIndex={slideIndex}
                        onNextSlide={handleNextSlide}
                        onPrevSlide={handlePrevSlide}
                    />
                </Col>
                <Col sm={10} className="colNoMargin">
                    <CourseSlideContent mediaItem={currentMediaItem} />
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default CourseContent;
