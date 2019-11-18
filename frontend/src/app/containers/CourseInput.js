import React, { useState } from 'react';
import  { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uuid from 'uuid/v4'
import { addCourseAction } from '../store/actions/addAction';

export default () => {

    const [title, setTitle] = useState('');
    const [prof, setProf] = useState('');
    const [domain, setDomain] = useState('');
    const [nrOfLessons, setNrOfLessons] = useState('');
    const [completed, setCompleted] = useState('');
    const dispatch = useDispatch();
    const addCourse = (course) => dispatch(addCourseAction(course))


    const onChangeTitle = event => {
        setTitle(event.target.value);
    };

    const onChangeProf = event => {
        setProf(event.target.value);
    };
    const onChangeDomain = event => {
        setDomain(event.target.value);
    };
    const onChangeNrOfLessons = event => {
        setNrOfLessons(event.target.value);
    };
    const onChangeCompleted = event => {
        setCompleted(event.target.value);
    };

    const onSubmitBtn = event => {
        event.preventDefault();
        addCourse({
            id : uuid(),
            title: title,
            prof:  prof,
            domain: domain,
            nrOfLessons: nrOfLessons,
            completed: completed
        });
    };

    return (
        <div className="course-input-container">
            <Form onSubmit={onSubmitBtn}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title of the course" name="title" value={title} onChange={onChangeTitle}/>
                    <Form.Text className="text-muted">
                        Add a valid title
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicProf">
                    <Form.Label>Teacher</Form.Label>
                    <Form.Control type="text" placeholder="Enter the name of the teacher" name="prof" value={prof} onChange={onChangeProf}/>
                    <Form.Text className="text-muted">
                        Add a valid name
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicDomain">
                    <Form.Label>Domain</Form.Label>
                    <Form.Control type="text" placeholder="Enter the course domain" name="domain" value={domain} onChange={onChangeDomain}/>
                    <Form.Text className="text-muted">
                        Add a valid course domain
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicNrLessons">
                    <Form.Label>Number of lessons</Form.Label>
                    <Form.Control type="text" placeholder="Enter the number of lessons" name="nrOfLessons" value={nrOfLessons} onChange={onChangeNrOfLessons}/>
                    <Form.Text className="text-muted">
                        Add a valid number (between 1-30)
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Complete" name="completed" value={completed} onChange={onChangeCompleted}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )}
