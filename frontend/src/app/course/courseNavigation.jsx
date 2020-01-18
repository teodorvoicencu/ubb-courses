// @flow
import * as React from 'react';
import { Nav } from 'react-bootstrap';

import './styles/courseNavigation.scss';
import type { Slide } from './types';

type Props = {
    slides: Slide[],
};

const CourseNavigation = ({ slides }: Props): React.Node => {
    return (
        <Nav variant="pills" className="courseNav">
            {slides.map((slide, i) => (
                <Nav.Item>
                    <Nav.Link eventKey={i} className="navLink">{`Slide ${i + 1}`}</Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    );
};

export default CourseNavigation;
