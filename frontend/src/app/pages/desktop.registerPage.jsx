// @flow
import * as React from 'react';
import { Card } from 'react-bootstrap';

import './styles/desktop.registerPage.scss';
import RegisterForm from '../register/registerForm';

const RegisterPage = (): React.Node => (
    <div className={'register-page'}>
        <Card className={'register-form'}>
            <Card.Body>
                <Card.Title>Register</Card.Title>
                <RegisterForm />
            </Card.Body>
        </Card>
    </div>
);

export default RegisterPage;
