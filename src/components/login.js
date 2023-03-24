import React,{useState} from 'react'
import { Formik, Field, Form } from "formik";
import { Link } from 'react-router-dom';

function Login() {

    const [values, setValues] = useState({});


    const handleSubmit= (e)=> {
          setValues(preVal=>({
            ...preVal,
            [e.target.name] : e.target.value
          }))
    }

    console.log("values in state:", values)


  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", phone: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Values : ", values);
            handleSubmit(values)
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form >
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              <div className="col-6 m-auto">
                <div className="section rounded shadow mt-5">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <Field name="email" className="form-control" type="email" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                      name="password"
                      className="form-control"
                      type="password"
                    />
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary mt-3 btn-block"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Please wait..." : "Login"}
                    </button>
                    <div className=" mt-3">
                      <a className="small text-muted" href="#!">
                        Forgot password?{" "}
                      </a>

                      <p className="mb-5 pb-lg-2 " style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <Link to="/register">
                          {" "}
                          <a href="#!" style={{ color: "#393f81" }}>
                            Register here{" "}
                          </a>
                        </Link>{" "}
                      </p>
                    </div>
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

export default Login;



            // <a className="small text-muted" href="#!">
            //     Forgot password?
            //   </a>
            //   <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
            //     Don't have an account?{" "}
            //    <Link to='/register'> <a href="#!" style={{ color: "#393f81" }}>
            //       Register here
            //     </a></Link>
            //   </p>