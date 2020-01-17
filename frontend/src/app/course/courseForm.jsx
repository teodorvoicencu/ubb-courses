// @flow
import * as React from 'react';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';

import { CourseTypes } from '../redux/course';

import { addCourseSchema } from './validation';
import CourseFormInputs from './courseFromInputs';

import './styles/addCourseForm.scss';

type CourseFields = {
    name: string,
    description: string,
};

type Props = {
    defaultValues: CourseFields,
    save: CourseFields => CourseTypes.ADD_COURSE | CourseTypes.EDIT_COURSE,
};

const CourseForm = ({ defaultValues, save }: Props): React.Node => {
    const onAddCourse = React.useCallback(
        values => {
            const { name, description } = values;
            save(name, description);
        },
        [save],
    );

    return (
        <Formik
            initialValues={defaultValues}
            validationSchema={addCourseSchema}
            onSubmit={onAddCourse}
        >
            {({ handleSubmit, handleChange, values, errors }) => (
                <>
                    <Form noValidate onSubmit={handleSubmit}>
                        <CourseFormInputs
                            handleChange={handleChange}
                            values={values}
                            errors={errors}
                        />
                    </Form>
                    <div className={'text-center'}>
                        <Button variant={'primary'} type={'submit'} onClick={handleSubmit}>
                            Save
                        </Button>
                    </div>
                </>
            )}
        </Formik>
    );
};

export default CourseForm;
