// @flow
import * as React from 'react';
import { Nav } from 'react-bootstrap';
import Play from 'react-ionicons/lib/MdPlay';
import Star from 'react-ionicons/lib/MdStar';

import './styles/courseNavigation.scss';
import type { Slide } from './types';
import CourseNavigationHeader from './courseNavigationHeader';

type Props = {
    slides: Slide[],
};

const CourseNavigation = ({ slides, onNextSlide, onPrevSlide }: Props): React.Node => {
    return (
        <div className="courseNavContainer">
            <CourseNavigationHeader onNextSlide={onNextSlide} onPrevSlide={onPrevSlide} />
            <Nav variant="pills" className="courseNav">
                {slides.map((slide, i) => (
                    <Nav.Item className="navItem">
                        <div className="slideNavIcon">
                            {i === 0 && <Play className="icon" />}
                            {i >= 1 && <Star className="icon" />}
                        </div>
                        <Nav.Link eventKey={i} className="navLink">{`Slide ${i + 1}`}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
            <div className="navLine" />
        </div>
    );
};

export default CourseNavigation;
