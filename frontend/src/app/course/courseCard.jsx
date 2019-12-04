// @flow
import * as React from "react";
import Card from "react-bootstrap/Card";

import './styles/courseCard.scss';
import type {Course} from "./types";


const CourseCard = (course: Course): React.Node => {
    return (
        <Card className={"card shadow-sm show-pointer"}>
            <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <hr/>
                <Card.Text>{course.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CourseCard;