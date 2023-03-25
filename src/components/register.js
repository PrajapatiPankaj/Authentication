import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import "../maincss/register.css";
import { useUserAuth } from "../context/authContextApi";
import { Alert } from "react-bootstrap";

function Register() {
  const { signUp, error } = useUserAuth();

  const handleSubmit = async (values,actions) => {
    await signUp(values.email, values.password);
    alert("Register Successfully...");
    actions.resetForm({ 
          values:{
              name:'',
              email:'',
              password:'',
              phone:''
          }
    })
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", phone: "" }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="container-fluid mt-5">
            <div className="row justify-content-center align-items-center">
              <div className="col-6 m-auto">
                <div className="section rounded shadow ">
                  {error && <Alert variant="danger">{error}</Alert>}
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <Field name="name" className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <Field
                        name="email"
                        className="form-control"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field
                        name="password"
                        className="form-control"
                        type="password"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <Field
                        name="phone"
                        className="form-control"
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="form-group pb-3">
                    <button
                      type="submit"
                      className="btn btn-block btn-primary mt-3 submitbtn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Please wait..." : "Submit"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Register;
