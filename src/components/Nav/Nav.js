import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import argentBankLogo from "../../assets/argentBankLogo.png";
import { setEmail, setToken } from "../../utils/reducers";
import { useDispatch, useSelector } from "react-redux";

export default function Nav() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setEmail(""));
    dispatch(setToken(""));
  };

  return (
    <nav className="main-nav">
      <Link to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {token ? (
        <div className="main-nav-logout">
          <span className="fas fa-user main-nav-user"></span>
          <span className="main-nav-name">[USER NAME]</span>
          <Link to="/" onClick={logout}>
            <span className="fas fa-sign-out-alt main-nav-out"></span>
            Sign out
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}
