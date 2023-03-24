import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import "../maincss/register.css";
import { useUserAuth } from "../context/authContextApi";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useUserAuth();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", phone: "" }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Values in Formik :", values);
        try{
            signUp(values.email, values.password);
        }catch(err){
            console.log("err in signUp:",err)
        }
          
        setTimeout(() => {
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="container-fluid mt-5">
            <div className="row justify-content-center align-items-center">
              <div className="col-6 m-auto">
                <div className="section rounded shadow ">
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
