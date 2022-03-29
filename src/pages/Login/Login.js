import "./Login.css";
import FormLogin from "../../components/FormLogin/FormLogin";
import React from "react";

export default function Login() {
  return (
    <main class="main bg-dark">
      <section class="sign-in-content">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <FormLogin></FormLogin>
      </section>
    </main>
  );
}
