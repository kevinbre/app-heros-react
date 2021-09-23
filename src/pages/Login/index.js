import { useFormik } from "formik";
import { Container, Form } from "semantic-ui-react";
import LoginCheck from "../../hooks/loginCheck";
import * as Yup from "yup";
import { Helmet } from "react-helmet";
import dictionary from "../../i18n/index";
import Logo from "../../img/loader.gif";
import "./login.css";


export default function Login() {
  const title = "Login | APPHero";
  const { handleLogin } = LoginCheck();

  //Formik para validaciones
  const { handleSubmit, handleChange, touched, errors, handleBlur } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string().email("Invalid email format").required(" "),
        password: Yup.string()
          .min(4, "Password should be longer than 4 characters")
          .required(" "),
      }),
      onSubmit: (values) => {
        handleLogin(values.email, values.password);
      },
    }
  );

  return (
    <>
      <Helmet>
        <title> {title} </title>
        <meta name="description" content={title} />
      </Helmet>
      <div className="align-top">
        <Container>
          <Form onSubmit={handleSubmit}>
            <div className="form-login">
              <img src={Logo} width="15%" alt="logo"></img>
              <h2> APP Heros Login </h2>
              <input
                style={{ width: "80%", marginTop: "10px" }}
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email ? <div>{errors.email}</div> : null}
              <input
                style={{ width: "80%", marginTop: "10px" }}
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password ? (
                <div>{errors.password}</div>
              ) : null}
              <button type="submit" className="btn-form">
                {dictionary.LOGIN_FORM.LOGIN}
              </button>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
}
