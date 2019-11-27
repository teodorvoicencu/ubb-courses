// @flow
import * as React from 'react';
import { Card } from 'react-bootstrap';

import LoginForm from '../login/loginForm';
import './styles/desktop.login.scss';
import RegisterLink from '../register/registerLink';

const LoginPage = (): React.Node => {
    return (
        <div className={'login-page'}>
            <Card className={'login-form'}>
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <LoginForm />
                </Card.Body>
                <Card.Footer>
                    <RegisterLink />
                </Card.Footer>
            </Card>
        </div>
    );
};

export default LoginPage;
