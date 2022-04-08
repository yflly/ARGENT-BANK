import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import argentBankLogo from "../../assets/argentBankLogo.png";
import { setEmail, setToken } from "../../utils/reducers";
import { useDispatch, useSelector, connect } from "react-redux";

function Nav(props) {
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
        <div className="main-nav-item">
          <span className="fa fas fa-user-circle "></span>
          <span className="main-nav-item">{props.user.firstName}</span>
          <Link to="/" onClick={logout} className="main-nav-item">
            <span className="fa fas fa-sign-out "></span>
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

const mapStateToProps = (state) => {
  return {
    connected: state.user.connected,
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Nav);
