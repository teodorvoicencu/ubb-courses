// @flow
import * as React from 'react';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { CourseActions } from '../redux/course';

import { addCourseSchema } from './validation';
import AddCourseFormInputs from './addCourseFromInputs';

import './styles/addCourseForm.scss';

const AddCourseForm = (): React.Node => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.user.error);

    const onAddCourse = React.useCallback(
        values => {
            const { name, description } = values;
            dispatch(CourseActions.createCourse(name, description));
        },
        [dispatch],
    );

    return (
        <Formik
            initialValues={{ name: '', description:'' }}
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
                    {error !== null ? <div className={'add-course-error'}>{error}</div> : null}
                    <div className={'text-center'}>
                        <Button variant={'primary'} type={'submit'} onClick={handleSubmit}>
                            Add Course
                        </Button>
                    </div>
                </>
            )}
        </Formik>
    );
};

export default AddCourseForm;
