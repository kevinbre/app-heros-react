import { useEffect, useContext } from 'react'
import { AppContext } from '../context/context'


export default function useUser(){
    const { user, setUser } = useContext(AppContext)
 
    //Usar token para comparar
    const login = useEffect(() => {
        const token = window.localStorage.getItem("userToken");
        if (token) {
          const user = JSON.parse(token);
          setUser(user);
        }
      }, [setUser]);

    return {
        isLogged: Boolean(user),
        login
 
    } 
    
}