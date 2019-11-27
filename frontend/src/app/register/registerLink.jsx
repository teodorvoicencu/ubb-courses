// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles/registerLink.scss';

const RegisterLink = (): React.Node => {
    return (
        <div className={'text-center'}>
            <p className={'register-text'}>{`Don't have an account ?`}</p>
            <Link to={'/register'}>Sign up here !</Link>
        </div>
    );
};

export default RegisterLink;
