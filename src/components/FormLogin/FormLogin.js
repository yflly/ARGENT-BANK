import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ApiProvider from "../../Api/Api";
//import { Navigate } from "react-router";
//import { setEmail, setToken } from "../../utils/reducers";
import "./FormLogin.css";
import { setToken } from "../../utils/reducers";
import InputEditName from "../InputEditName/InputEditName";
import ButtonEditName from "../ButtonEditName/ButtonEditName";
import { useNavigate } from "react-router";
import getLocalStorageKey from "../../Storage/Storage";

export default function FormLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [remember, setRemember] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    // POST request
    const response = await new ApiProvider().userLogIn(
      userName,
      password,
      remember
    );
    console.log(response);
    if (remember) {
      localStorage.setItem(
        "rememberUser",
        JSON.stringify({ remember, userName, password })
      );
    } else {
      localStorage.setItem(
        "rememberUser",
        JSON.stringify({ remember: false, userName: "", password: "" })
      );
    }

    if (userName.trim().length === 0 || password.length === 0) {
      return setErrorMessage("Error");
    }
    if (response.status !== 200) {
      return setErrorMessage(response.message);
    }

    dispatch(setToken(response.body.token));
    navigate("/profile");
  };

  useEffect(() => {
    let login = getLocalStorageKey("rememberUser", false);
    setRemember(login.remember);
    setUserName(login.userName);
    setPassword(login.password);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <InputEditName
          className="username"
          type="text"
          autoComplete="current-username"
          value={userName}
          action={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <InputEditName
          className="password"
          type="password"
          autoComplete="current-username"
          value={password}
          action={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          checked={remember}
          onChange={() => {
            setRemember(!remember);
          }}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <span className="errorMessage">{errorMessage}</span>
      <ButtonEditName className="sign-in-button" text="Sign In" />
    </form>
  );
}
