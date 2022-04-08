import "./Login.css";
import FormLogin from "../../components/FormLogin/FormLogin";
import React from "react";

export default function Login() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <FormLogin></FormLogin>
      </section>
    </main>
  );
}
