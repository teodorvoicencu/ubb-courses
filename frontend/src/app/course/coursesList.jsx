// @flow
import * as React from "react";
import Row from "react-bootstrap/Row";

import type {Course} from "./types";
import CourseCard from "./courseCard";


const mockCourses: Array<Course> = [
    {
        id: 1,
        name: "Course 1",
        description: "Description 1"
    }, {
        id: 1,
        name: "Course 1",
        description: "Description 1"
    }, {id: 1, name: "Course 1", description: "Description 1"}, {
        id: 1,
        name: "Course 1",
        description: "Description 1"
    },
    {id: 1, name: "Course 1", description: "Description 1"}];

const CoursesList = (): React.Node => {
    return (
        mockCourses.map((course) => {
            return (
                <Row>
                    <CourseCard
                        id={course.$id}
                        name={course.name}
                        description={course.description}
                    />
                </Row>
            );
        })
    );
};

export default CoursesList;