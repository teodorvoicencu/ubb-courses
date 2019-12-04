// @flow
import * as React from 'react';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { UserActions } from '../redux/user';

import RegisterFormInputs from './registerFormInputs';
import { registerSchema } from './validation';
import './styles/registerForm.scss';

const RegisterForm = (): React.Node => {
    const error = useSelector(state => state.user.error);
    const registered = useSelector(state => state.user.registered);
    const dispatch = useDispatch();

    const onRegister = React.useCallback(
        values => {
            const { email, name, authority, password } = values;
            dispatch(UserActions.register(email, name, authority, password));
        },
        [dispatch],
    );

    return !registered ? (
        <Formik
            initialValues={{
                email: '',
                name: '',
                password: '',
                confirmPassword: '',
                authority: 'STUDENT',
            }}
            validationSchema={registerSchema}
            onSubmit={onRegister}
        >
            {({ handleSubmit, handleChange, values, errors }) => (
                <>
                    <Form noValidate onSubmit={handleSubmit}>
                        <RegisterFormInputs
                            handleChange={handleChange}
                            values={values}
                            errors={errors}
                        />
                    </Form>
                    {error !== null ? <div className={'register-error'}>{error}</div> : null}
                    <div className={'text-center'}>
                        <Button variant={'primary'} type={'submit'} onClick={handleSubmit}>
                            Register
                        </Button>
                    </div>
                </>
            )}
        </Formik>
    ) : (
        <Redirect to="/login" />
    );
};

export default RegisterForm;
