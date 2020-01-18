// @flow
import * as React from 'react';
import { Nav } from 'react-bootstrap';
import Play from 'react-ionicons/lib/MdPlay';
import Star from 'react-ionicons/lib/MdStar';

import './styles/courseNavigation.scss';
import type { MediaItem } from './types';
import { MediaType } from './types';
import CourseNavigationHeader from './courseNavigationHeader';

type Props = {
    mediaItems: MediaItem[],
};

const CourseNavigation = (props: Props): React.Node => {
    const { mediaItems } = props;
    return (
        <div className="courseNavContainer">
            <CourseNavigationHeader {...props} />
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
