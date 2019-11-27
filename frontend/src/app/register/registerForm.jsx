// @flow
import * as React from 'react';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';

import RegisterFormInputs from './registerFormInputs';
import { registerSchema } from './validation';

const RegisterForm = (): React.Node => {
    return (
        <Formik
            initialValues={{ email: '', password: '', confirmPassword: '', authority: 'STUDENT' }}
            validationSchema={registerSchema}
            onSubmit={() => null}
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
                    <div className={'text-center'}>
                        <Button variant={'primary'} type={'submit'} onClick={handleSubmit}>
                            Register
                        </Button>
                    </div>
                </>
            )}
        </Formik>
    );
};

export default RegisterForm;
