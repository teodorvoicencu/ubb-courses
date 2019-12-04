// @flow
import * as React from 'react';
import { FormikErrors, FormikValues } from 'formik';
import { Form } from 'react-bootstrap';
import './styles/registerFormInputs.scss';

type Props = {
    handleChange: any,
    values: FormikValues,
    errors: FormikErrors,
};

const RegisterFormInputs = (props: Props): React.Node => (
    <>
        <Form.Row>
            <Form.Group controlId="email" className="form-input">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={props.values.email}
                    onChange={props.handleChange}
                    isValid={!props.errors.email && !!props.values.email}
                    isInvalid={!!props.errors.email && !!props.values.email}
                />
                <Form.Control.Feedback type={'invalid'}>{props.errors.email}</Form.Control.Feedback>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group controlId="name" className="form-input">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="name"
                    name="name"
                    value={props.values.name}
                    onChange={props.handleChange}
                    isValid={!props.errors.name && !!props.values.name}
                    isInvalid={!!props.errors.name && !!props.values.name}
                />
                <Form.Control.Feedback type={'invalid'}>{props.errors.name}</Form.Control.Feedback>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group controlId="authority" className="form-input">
                <Form.Label>You are a</Form.Label>
                <Form.Control
                    as="select"
                    value={props.values.authority}
                    onChange={props.handleChange}
                >
                    <option value={'STUDENT'}>Student</option>
                    <option value={'TEACHER'}>Teacher</option>
                </Form.Control>
                <Form.Control.Feedback type={'invalid'}>{props.errors.email}</Form.Control.Feedback>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group controlId="password" className="form-input">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={props.values.password}
                    onChange={props.handleChange}
                    isValid={!props.errors.password && !!props.values.password}
                    isInvalid={!!props.errors.password && !!props.values.password}
                />
                <Form.Control.Feedback type={'invalid'}>
                    {props.errors.password}
                </Form.Control.Feedback>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group controlId="confirmPassword" className="form-input">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={props.values.confirmPassword}
                    onChange={props.handleChange}
                    isValid={!props.errors.confirmPassword && !!props.values.confirmPassword}
                    isInvalid={!!props.errors.confirmPassword && !!props.values.confirmPassword}
                />
                <Form.Control.Feedback type={'invalid'}>
                    {props.errors.confirmPassword}
                </Form.Control.Feedback>
            </Form.Group>
        </Form.Row>
    </>
);

export default RegisterFormInputs;
