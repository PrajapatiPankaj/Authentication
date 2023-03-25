import { Formik, Field, Form } from "formik";
import "../maincss/register.css";
import { useUserAuth } from "../context/authContextApi";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Register() {
  const { signUp, error } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    const mailFormate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      values.email.match(mailFormate) &&
      values.email !== "" &&
      values.name !== "" &&
      values.password !== "" &&
      values.phone !== ""
    ) {
      await signUp(values.email, values.password);
      if(error){
        actions.resetForm({
          values: {
            name: "",
            email: "",
            password: "",
            phone: "",
          },
        });
        navigate("/");
      }
    } else {
      alert("Enter Valid Data");
    }
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
