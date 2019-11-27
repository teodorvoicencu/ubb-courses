// @flow
import * as React from 'react';
import { Form } from 'react-bootstrap';
import { FormikErrors, FormikValues } from 'formik';
import './styles/loginFormInputs.scss';

type Props = {
    handleChange: any,
    values: FormikValues,
    errors: FormikErrors,
};

const LoginFormInputs = (props: Props): React.Node => {
    return (
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
                    <Form.Control.Feedback type={'invalid'}>
                        {props.errors.email}
                    </Form.Control.Feedback>
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
        </>
    );
};

export default LoginFormInputs;
