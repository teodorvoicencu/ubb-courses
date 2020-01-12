// @flow
import * as React from 'react';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CourseActions } from '../redux/course';

import { addCourseSchema } from './validation';
import AddCourseFormInputs from './addCourseFromInputs';

import './styles/addCourseForm.scss';

const AddCourseForm = (): React.Node => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.user.loggedIn);
    const authorities = useSelector(state => state.user.authorities);

    const onAddCourse = React.useCallback(
        values => {
            const { name, description } = values;
            dispatch(CourseActions.createCourse(name, description));
        },
        [dispatch],
    );

    return isLoggedIn && authorities.length === 2 ? (
        <Formik
            initialValues={{ name: '', description: '' }}
            validationSchema={addCourseSchema}
            onSubmit={onAddCourse}
        >
            {({ handleSubmit, handleChange, values, errors }) => (
                <>
                    <Form noValidate onSubmit={handleSubmit}>
                        <AddCourseFormInputs
                            handleChange={handleChange}
                            values={values}
                            errors={errors}
                        />
                    </Form>
                    <div className={'text-center'}>
                        <Button variant={'primary'} type={'submit'} onClick={handleSubmit}>
                            Add Course
                        </Button>
                    </div>
                </>
            )}
        </Formik>
    ) : (
        <Redirect to="/" />
    );
};

export default AddCourseForm;
