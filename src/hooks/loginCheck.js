import { loginService } from "../services/LoginService";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import { AppContext } from "../context/context";

//Creacion de Login
export default function LoginCheck() {
  
    const history = useHistory();
    const { setUser } = useContext(AppContext);

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
          toast.error('User or password missing');        
        } else {
  
        }
    }
  } 
  return {
    handleLogin
}
}

  