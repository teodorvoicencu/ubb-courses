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

    const handleSlideIndexChange = newSlideIndex => setSlideIndex(newSlideIndex);

    const slides = course.slides;
    const handleNextSlide = () => {
        setSlideIndex(Math.min(slideIndex + 1, slides.length - 1));
    };
    const handlePrevSlide = () => {
        setSlideIndex(Math.max(slideIndex - 1, 0));
    };

    return (
        <Tab.Container activeKey={slideIndex} onSelect={handleSlideIndexChange}>
            <Row className="tabContainer">
                <Col sm={2} className="colNoMargin dropShadow">
                    <CourseNavigation
                        slides={course.slides}
                        onNextSlide={handleNextSlide}
                        onPrevSlide={handlePrevSlide}
                    />
                </Col>
                <Col sm={10} className="colNoMargin">
                    <CourseSlideContent mediaItem={course.slides[slideIndex]} />
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default CourseContent;
