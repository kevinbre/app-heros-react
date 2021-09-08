import { useContext, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AppContext } from "./context/context";
import LayoutComponent from "./components/layout";
import Home from "./home";
import Login from "./login";
import Search from "./search/search";
import Details from "./details/details";

function App() {
  const { user, setUser } = useContext(AppContext);

  useEffect(() => {
    const token = window.localStorage.getItem("userToken");
    if (token) {
      const user = JSON.parse(token);
      setUser(user);
    }
  }, [setUser]);

  return (
    <>
      <div className="">
        <BrowserRouter>
          <LayoutComponent>
            <div className="py-5">
              <Switch>
                <Route exact path="/">
                  {user ? <Home /> : <Redirect to="/login" />}
                </Route>
                <Route path="/search/:searchString">
                  {user ? <Search /> : <Redirect to="/login" />}
                </Route>
                <Route path="/details/:id">
                  {user ? <Details /> : <Redirect to="/login" />}
                </Route>
                <Route path="/login">
                  {!user ? <Login /> : <Redirect to="/" />}
                </Route>
              </Switch>
            </div>
          </LayoutComponent>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;