// @flow
import * as React from 'react';
import { Nav } from 'react-bootstrap';
import Play from 'react-ionicons/lib/MdPlay';
import Star from 'react-ionicons/lib/MdStar';

import './styles/courseNavigation.scss';
import type { Course } from './types';
import { MediaType } from './types';
import CourseNavigationHeader from './courseNavigationHeader';

type Props = {
    course: Course,
};

const CourseNavigation = (props: Props): React.Node => {
    const { name, mediaItems } = props.course;
    return (
        <div className="courseNavContainer">
            <CourseNavigationHeader name={name} {...props} />
            <Nav variant="pills" className="courseNav">
                {mediaItems.map(({ id, title, type }) => {
                    return (
                        <Nav.Item className="navItem">
                            <div className="slideNavIcon">
                                {type === MediaType.TEXT && <Star className="icon" />}
                                {type === MediaType.VIDEO && <Play className="icon" />}
                            </div>
                            <Nav.Link eventKey={id} className="navLink">
                                {title}
                            </Nav.Link>
                        </Nav.Item>
                    );
                })}
            </Nav>
            <div className="navLine" />
        </div>
    );
};

export default CourseNavigation;
