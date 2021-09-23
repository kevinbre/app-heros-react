import { useContext, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AppContext } from "./context/context";
import LayoutComponent from "./components/Layout/layout";
import Home from "./pages/Home";
import Login from "./pages/Login/index";
import Search from "./pages/Search";
import Details from "./pages/Details";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUser from './hooks/useUser'


function App() {

  const {isLogged} = useUser()

  return (
    <>
    
      <div className="">
        <BrowserRouter>
          <LayoutComponent>
            <div className="py-5">
              <Switch>
                <Route exact path="/">
                  {isLogged ? <Home /> : <Redirect to="/login" />}
                </Route>
                <Route path="/search/:searchString">
                  {isLogged ? <Search /> : <Redirect to="/login" />}
                </Route>
                <Route path="/details/:id">
                  {isLogged ? <Details /> : <Redirect to="/login" />}
                </Route>
                <Route path="/login">
                  {!isLogged ? <Login /> : <Redirect to="/" />}
                </Route>
              </Switch>
            </div>
            <ToastContainer
              theme="dark"
              position="top-center"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            </LayoutComponent>
        </BrowserRouter>
      </div>
   
    </>
  );
}

export default App;