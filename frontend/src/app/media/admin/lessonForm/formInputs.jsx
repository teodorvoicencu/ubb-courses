// @flow
import * as React from 'react';
import { Form } from 'react-bootstrap';
import { FormikErrors, FormikValues } from 'formik';

import { MediaType } from '../../types';

type Props = {
    handleChange: any => void,
    values: FormikValues,
    errors: FormikErrors,
};

const TitleGroup = ({ handleChange, values, errors }: Props) => (
    <Form.Group controlId={'title'} className={'form-input'}>
        <Form.Label>Title</Form.Label>
        <Form.Control
            type={'text'}
            name={'title'}
            value={values.title}
            onChange={handleChange}
            isValid={!errors.title && !!values.title}
            isInvalid={!!errors.title && !!values.title}
        />
        <Form.Control.Feedback type={'invalid'}>{errors.title}</Form.Control.Feedback>
    </Form.Group>
);

const ContentGroup = ({ handleChange, values, errors }: Props) => (
    <Form.Group controlId={'content'} className={'form-input'}>
        <Form.Label>Content</Form.Label>
        <Form.Control
            as={'textarea'}
            rows={'6'}
            type={'text'}
            name={'content'}
            value={values.content}
            onChange={handleChange}
            isValid={!errors.content && !!values.content}
            isInvalid={!!errors.content && !!values.content}
        />
        <Form.Control.Feedback type={'invalid'}>{errors.content}</Form.Control.Feedback>
    </Form.Group>
);

const TypeGroup = ({ handleChange, values, errors }: Props) => (
    <Form.Group controlId={'type'} className={'form-input'}>
        <Form.Label>Type</Form.Label>
        <Form.Control
            as={'select'}
            type={'text'}
            name={'type'}
            value={values.type}
            onChange={handleChange}
            isValid={!errors.type && !!values.type}
            isInvalid={!!errors.type && !!values.type}
        >
            {Object.keys(MediaType).map(type => (
                <option value={type}>{type.toLowerCase()}</option>
            ))}
        </Form.Control>
        <Form.Control.Feedback type={'invalid'}>{errors.type}</Form.Control.Feedback>
    </Form.Group>
);

const UrlGroup = ({ handleChange, values, errors }: Props) => (
    <Form.Group controlId={'url'} className={'form-input'}>
        <Form.Label>URL</Form.Label>
        <Form.Control
            type={'text'}
            name={'url'}
            value={values.url}
            onChange={handleChange}
            isValid={!errors.url && !!values.url}
            isInvalid={!!errors.url && !!values.url}
        />
        <Form.Control.Feedback type={'invalid'}>{errors.url}</Form.Control.Feedback>
    </Form.Group>
);

const FormInputs = (props: Props) => {
    return (
        <>
            <TitleGroup {...props} />
            <ContentGroup {...props} />
            <TypeGroup {...props} />
            <UrlGroup {...props} />
        </>
    );
};

export default FormInputs;
