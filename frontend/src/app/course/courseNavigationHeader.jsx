// @flow
import * as React from 'react';
import ArrowDropleft from 'react-ionicons/lib/MdArrowDropleft';
import ArrowDropright from 'react-ionicons/lib/MdArrowDropright';
import Button from 'react-bootstrap/Button';

import './styles/courseNavigationHeader.scss';

const CourseNavigationHeader = ({ onNextSlide, onPrevSlide }): React.Node => {
    return (
        <div className="navHeader">
            <h5>{'Nume Curs'}</h5>
            <div className="navButtonRow">
                <Button
                    variant="outline-primary"
                    size="sm"
                    className="navBack"
                    onClick={() => onPrevSlide()}
                >
                    <ArrowDropleft />
                    <h6>Prev</h6>
                </Button>
                <Button
                    variant="outline-primary"
                    size="sm"
                    className="navForward"
                    onClick={() => onNextSlide()}
                >
                    <h6>Next</h6>
                    <ArrowDropright />
                </Button>
            </div>
        </div>
    );
};

export default CourseNavigationHeader;