import * as yup from 'yup';

export const addCourseSchema = yup.object().shape({
    name: yup
        .string()
        .name('Name is invalid')
        .required('Name is required'),
    description: yup.string().required('Description is required'),
});
