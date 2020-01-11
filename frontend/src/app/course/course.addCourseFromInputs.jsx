// @flow
import * as React from 'react';
import { Form } from 'react-bootstrap';
import { FormikErrors, FormikValues } from 'formik';
import './styles/course.addCourseFormInputs.scss';

type Props = {
    handleChange: any,
    values: FormikValues,
    errors: FormikErrors,
};

const AddCourseFormInputs = (props: Props): React.Node => {
    return (
        <>
            <Form.Row>
                <Form.Group controlId="name" className="form-input">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={props.values.name}
                        onChange={props.handleChange}
                        isValid={!props.errors.name && !!props.values.name}
                        isInvalid={!!props.errors.name && !!props.values.name}
                    />
                    <Form.Control.Feedback type={'invalid'}>
                        {props.errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group controlId="description" className="form-input">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        value={props.values.description}
                        onChange={props.handleChange}
                        isValid={!props.errors.description && !!props.values.description}
                        isInvalid={!!props.errors.description && !!props.values.description}
                    />
                    <Form.Control.Feedback type={'invalid'}>
                        {props.errors.description}
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
        </>
    );
};

export default AddCourseFormInputs;
