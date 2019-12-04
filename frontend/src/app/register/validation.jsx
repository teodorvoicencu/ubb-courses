import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    email: yup
        .string()
        .email('Email is invalid')
        .required('Email is required'),
    name: yup
        .string()
        .min(4, 'Name is too short')
        .max(32, 'Name is too long')
        .required('Name is required'),
    password: yup
        .string()
        .min(8, 'Password is too short')
        .max(16, 'Password is too long')
        .required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});
