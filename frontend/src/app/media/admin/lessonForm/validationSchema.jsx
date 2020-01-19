import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    title: yup
        .string()
        .min(4, 'Title is too short')
        .max(32, 'Title is too long')
        .required('Title is required'),
    content: yup.string().required('Content is required'),
});
