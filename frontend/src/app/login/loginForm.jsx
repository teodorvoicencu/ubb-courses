// @flow
import * as React from 'react';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';

import { loginSchema } from './validation';
import LoginFormInputs from './loginFormInputs';

const LoginForm = (): React.Node => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={() => null}
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
                    <div className={'text-center'}>
                        <Button variant={'primary'} type={'submit'} onClick={handleSubmit}>
                            Login
                        </Button>
                    </div>
                </>
            )}
        </Formik>
    );
};

export default LoginForm;
