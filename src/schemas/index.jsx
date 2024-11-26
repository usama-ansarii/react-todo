import * as Yup from 'yup'; // we use steric to get all data get from yup library

export const signUpSchema = Yup.object({
    fname : Yup.string().min(2).max(25).required("Please enter your First Name"),
    lname : Yup.string().min(2).max(25).required("Please enter your Last Name"),
    email : Yup.string().email('Invalid email format').required("Please enter your email"),
    password : Yup.string().min(6,'Password must be at least 6 characters long').required("Please enter your password")
})

