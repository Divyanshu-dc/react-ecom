import * as Yup from 'yup';

export const SignUpSchema = Yup.object({
    userName : Yup.string().required().min(2),
    email : Yup.string().email().required(),
    password : Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
})

export const LoginSchema = Yup.object({
    email : Yup.string().email().required(),
    password : Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
})