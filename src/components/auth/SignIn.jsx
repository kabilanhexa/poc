import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.scss';
import { Formik , Field, Form } from 'formik';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const history = useNavigate();

    const SignInSchema = Yup.object().shape({
        email: Yup.string().email('Invalid Email Address').required("Email is required"),
      
        password: Yup.string()
          .required("Password is required")
          .min(4, "Password is too short - should be 4 chars minimum"),
    });

    return (
        <div className="login-wrapper">
            <h1>CLC Lodging - Talon</h1>

            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={SignInSchema}
                onSubmit={(values) => {
                    console.log(values);
                    history('/dashboard');
                }}
            >
                {({
                    errors,
                    touched,
                    isValid,
                    dirty
                }) => (
                    <Form className="login-box">
                        <div className={`input-wrapper`}>
                            <label>User Name</label>
                            <Field type="text" id="email" name="email" />
                            <span className='errorMsg'>{errors.email && touched.email && errors.email}</span>
                        </div>
                        <div className={`input-wrapper-password`}>
                            <label>Password</label>
                            <Field type="password" id="password" name="password" />
                            <span className='errorMsg'>{errors.password && touched.password && errors.password}</span>
                        </div>
                        <div className="input-wrapper">
                            <label>
                                <span>
                                    <Link to="/forgot">
                                        Forgot / Reset Password?
                                    </Link>
                                </span>
                            </label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={!(dirty && isValid)}
                                className="btn btn-primary full-width-btn">
                                Login
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignIn;