import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/authContextApi";
import {Alert} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

function Login() {
  const { logIn, logerr } = useUserAuth();
  const navigate= useNavigate();

  const handleSubmit = async (values, actions) => {
    const mailFormate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (values.email.match(mailFormate)) {
      await logIn(values.email, values.password);
      actions.resetForm({
        values: {
          name: "",
          email: "",
          password: "",
          phone: "",
        },
      });
      navigate('/home')
    } else {
      alert("Enter Valid Email...!");
    }
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              <div className="col-6 m-auto">
                <div className="section rounded shadow mt-5">
                  {logerr && <Alert variant="danger">{logerr}</Alert>}
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
