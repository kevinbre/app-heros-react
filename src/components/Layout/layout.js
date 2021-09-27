import { useContext } from "react";
import { AppContext } from "../../context/context";
import Navbar from "../Navbar/navbar";

const LayoutComponent = ({ children }) => {
  const { user } = useContext(AppContext);
  return (
    <div className="d-flex flex-column">
      {user ? <Navbar /> : ""}
      <div className="container">{children}</div>
    </div>
  );
};

export default LayoutComponent;
