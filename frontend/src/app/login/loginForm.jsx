// @flow
import * as React from 'react';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { UserActions } from '../redux/user';

import { loginSchema } from './validation';
import LoginFormInputs from './loginFormInputs';

import './styles/loginForm.scss';

const LoginForm = (): React.Node => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.user.loggedIn);
    const error = useSelector(state => state.user.error);

    const onLogin = React.useCallback(
        values => {
            const { email, password } = values;
            dispatch(UserActions.login(email, password));
        },
        [dispatch],
    );

    return !isLoggedIn ? (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={onLogin}
        >
            {({ handleSubmit, handleChange, values, errors }) => (
                <>
                    <Form noValidate onSubmit={handleSubmit}>
                        <LoginFormInputs
                            handleChange={handleChange}
                            values={values}
                            errors={errors}
                        />
                    </Form>
                    {error !== null ? <div className={'login-error'}>{error}</div> : null}
                    <div className={'text-center'}>
                        <Button variant={'primary'} type={'submit'} onClick={handleSubmit}>
                            Login
                        </Button>
                    </div>
                </>
            )}
        </Formik>
    ) : (
        <Redirect to="/" />
    );
};

export default LoginForm;
