import React, { createContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import uuid from 'uuid/v4'
import Button from 'react-bootstrap/Button';

const AddCourseForm = ({ parentCallback }) => {

    const [course, setCourse] = useState({
        id: uuid(),
        title: "",
        prof: "",
        domain: "",
        nrOfLessons: "",
        completed: ""
    });


    const updateCourse = event => {
        console.log(course);
        setCourse({
            ...course,
            [event.target.name]: event.target.value
        });
    };

    const sendData = () => {
        parentCallback(course);
    };

    return (
        <CourseContext.Provider value = {{ data : course}}>
            <Form.Group controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text"
                              placeholder="Enter title of the course"
                              value={course.title}
                              onChange={updateCourse}
                              name="title"
                />
                <Form.Text className="text-muted">
                    Add a valid title
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicProf">
                <Form.Label>Teacher</Form.Label>
                <Form.Control type="text"
                              placeholder="Enter the name of the teacher"
                              name="prof"
                              value={course.prof}
                              onChange={updateCourse}/>
                <Form.Text className="text-muted">
                    Add a valid name
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicDomain">
                <Form.Label>Domain</Form.Label>
                <Form.Control type="text"
                              placeholder="Enter the course domain"
                              name="domain"
                              value={course.domain}
                              onChange={updateCourse}/>
                <Form.Text className="text-muted">
                    Add a valid course domain
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicNrLessons">
                <Form.Label>Number of lessons</Form.Label>
                <Form.Control type="text"
                              placeholder="Enter the number of lessons"
                              name="nrOfLessons"
                              value={course.nrOfLessons}
                              onChange={updateCourse}/>
                <Form.Text className="text-muted">
                    Add a valid number (between 1-30)
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    label="Complete"
                    name="completed"
                    value={course.completed}
                    onChange={updateCourse}/>
            </Form.Group>

            <Button variant="primary" type="button" onClick = {() => sendData()}>
                Submit
            </Button>
        </CourseContext.Provider>
    );
};
export default AddCourseForm;


export const CourseContext = createContext(null);
