import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { toast } from "react-toastify";

const Navbar = () => {
  let { isLogin, setIsLogin } = useContext(GlobalContext);

  let login = () => {
    setIsLogin(!isLogin);
    if (!isLogin) {
      toast.success("Login successfully");
    } else {
      toast.warn("Logout successfully");
    }
  };

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={!isLogin ? "showcourse" : ""}>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/post">Post</NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <button className="login-btn" onClick={login}>
              {isLogin ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
