import * as React from 'react';

import "./styles/desktop.courses.scss";

import CoursesList from "../course/coursesList";


const CoursesPage = (): React.Node => {
    return (
        <div className={"page-width-wrapper mx-2 padding-top"}>
            <CoursesList/>
        </div>
    );
};

export default CoursesPage;
