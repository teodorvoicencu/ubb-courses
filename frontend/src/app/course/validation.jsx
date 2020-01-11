import * as yup from 'yup';

export const addCourseSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, 'Name is too short')
        .required('Name is required'),
    description: yup.string().required('Description is required'),
});
