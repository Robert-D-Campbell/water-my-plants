import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";

const Login = ({ errors, touched, values, userLogin, history }) => {
  const handleLoginSubmit = e => {
    e.preventDefault();
    userLogin(values, history);
  };

  return (
    <div className="login-container">
      <Form className="login-form" onSubmit={handleLoginSubmit}>
        <label className="login-label"> Email: </label>
        <Field
          className="login-field"
          type="email"
          name="email"
          placeholder="Email"
        />
        {touched.email && errors.email && (
          <span className="error"> {errors.email} </span>
        )}
        <label className="login-label"> Password: </label>
        <Field
          className="login-field"
          type="password"
          name="password"
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <span className="error"> {errors.password} </span>
        )}
        <button>Login</button>
      </Form>
      <NavLink className="form-link" to="/signup">
        Dont have an account?
      </NavLink>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Must provide a valid Email Address"),
    password: Yup.string()
      .min(4, "Need at least 4 characters")
      .required("Password is required")
  })
})(Login);
//!!! withFormik validation and Yup Error Messages //

export default connect(state => state, actionCreators)(FormikLogin);
