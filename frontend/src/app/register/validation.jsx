import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    email: yup
        .string()
        .email('Email is invalid')
        .required('Email is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});
