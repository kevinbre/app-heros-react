import { useFormik } from "formik";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form } from 'semantic-ui-react';
import * as Yup from "yup";
import { AppContext } from "../../context/context";
import { loginService } from "../../services/LoginService";
import alerta from '../../img/alerta.png'
import Logo from '../../img/batman-noencontrado.gif'
import "./login.css"

const Login = () => {
  const { setUser } = useContext(AppContext);
  const [errorMsg, setErrorMsg] = useState();
  const history = useHistory();

const handleLogin = async (email, password) => {
  try {
    const response = await loginService(email, password);
      if (response) {
        window.localStorage.setItem(
            "userToken",
            JSON.stringify(response.data.token)
          );          
          history.push("/");
          setUser(response.data.token);         
      }
  } catch (error) {
      if (error) {
        setErrorMsg('User or password missing');        
      }
    }
};

const formik = useFormik({
  initialValues: {
    email: "",
    password: "",
  },
  validationSchema: Yup.object({
    email: Yup.string().email("Formato de email invalido").required("Email no registrado o incorrecto"),
    password: Yup.string().required("Contraseña incorrecta")
  }),
    onSubmit: (values) => {
    handleLogin(values.email, values.password)
    },
})

return (
  <div className="align-top">  
  <Container>  
      <Form onSubmit={formik.handleSubmit}>  
        <div className="form-login">
          <img src={Logo} width="15%" alt="logo"></img>
          <h2> APP Heros Login </h2>
          {errorMsg ? (
            <div className="alerta fade-in-image fadeIn" role="alert">
              <img src={alerta} className="img-size" alt="alert"/>{errorMsg}
              <button
            type="button"
            className="btn-alert"
            onClick={() => setErrorMsg(null)}
          >X</button>              
            </div> 
            ) : (
             " "
            )}         
          <Form.Input className="inputLog" name="email" type="email" onChange={formik.handleChange} error={formik.errors.email}/>
          <Form.Input className="inputLog" name="password" type="password" onChange={formik.handleChange} error={formik.errors.password}/>
          <button type="submit" className="btn-form">Log In</button>          
        </div>
      </Form>
  </Container>
  </div>
  
    
  );
}


export default Login;
