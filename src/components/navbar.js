import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "../context/context";
import SearchComponent from "./search";
import Logo from '../img/loader.gif'
import { Icon } from 'semantic-ui-react';


const Navbar = () => {
  const { setUser } = useContext(AppContext);
  const history = useHistory();

  const handleLogout = () => {
    window.localStorage.setItem("userToken", JSON.stringify(""));
    setUser("");
    history.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-center navbar-style sticky-top">

    <i className="fas fa-bars text-white"></i>

      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex justify-content-center align-items-center"
          to="/"
        >
          <img
            src={Logo}
            alt=""      
            className="logo-style"
          />
          <span className="logo-nav ">APP Hero</span>
        </Link>
        <button
          className="button-nav navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icono-nav toggler"><Icon name="bars"/></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="active nav-items">
              <Link className="navbar-buttons text-center" aria-current="page" to="/">
                <span>Home</span>
              </Link>
            </li>
          </ul>
          <SearchComponent/>
          <ul className="nav navbar-nav">
            <li className="nav-items">
              <Link onClick={() => handleLogout()}
                    className="navbar-buttons nav-item navbar-hover text-center"
                    aria-current="page"
                    to="/"
              >
              <span className="text-uppercase fs-6 text-center">Log Out <Icon name="log out"/></span>
            </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    // <nav className="navbar-style">
    //   <div className="container-fluid" style={{width: "100%"}}>        
    //     <div className="" id="navbarSupportedContent">
    //       <ul>
    //         <li>
    //         <h1 className="logo-nav"><img src={Logo} alt="logo" className="logo-style" /> Heroes App</h1>
    //         </li>            
    //         <li>              
    //           <Link className="nav-link active" aria-current="page" to="/">
    //             <span>Home</span>
    //           </Link>
    //         </li>
    //         <li><SearchComponent /></li>            
    //         <li style={{float: "right"}}>
    //           <Link onClick={() => handleLogout()} className="nav-link active" text-align="right" aria-current="page" to="/">
    //           <Icon name="log out"/>
    //           </Link>
    //         </li>           
    //       </ul> 
    //     </div>
    //   </div>
    // </nav>
  // );
  )
};

export default Navbar;