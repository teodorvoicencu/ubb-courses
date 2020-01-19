// @flow
import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import type { Course } from '../../../course/types';
import { MediaType } from '../../index';
import { CourseActions } from '../../../redux/course';

import { validationSchema } from './validationSchema';
import FormInputs from './formInputs';

/**
 * Describes the fields that the form
 * validates and submits.
 */
type Fields = {
    title: string,
    content: string,
    type: $Values<typeof MediaType>,
    url: string,
};

/**
 * Initial values of the form fields.
 */
const initialValues: Fields = {
    title: '',
    content: '',
    type: MediaType.TEXT,
    url: '',
};

type Props = {
    course: Course,
};

const LessonForm = ({ course }: Props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = React.useCallback(
        values => {
            const { title, content, url } = values;
            let { type } = values;
            type = type.toUpperCase();
            dispatch(CourseActions.createLesson(course.id, title, content, url, type, history));
        },
        [dispatch, course, history],
    );

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleSubmit, handleChange, values, errors }) => (
                <>
                    <Form noValidate onSubmit={handleSubmit}>
                        <FormInputs handleChange={handleChange} values={values} errors={errors} />
                    </Form>
                    <Button variant={'primary'} type={'submit'} onClick={handleSubmit}>
                        Save
                    </Button>
                </>
            )}
        </Formik>
    );
};

export default LessonForm;
