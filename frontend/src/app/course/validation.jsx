import * as yup from 'yup';

export const addCourseSchema = yup.object().shape({
    name: yup
        .string()
        .min(4, 'Name is too short')
        .max(32, 'Name is too long')
        .required('Name is required'),
    description: yup.string().required('Description is required'),
});
