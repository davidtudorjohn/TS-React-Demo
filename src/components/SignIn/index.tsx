import React from "react";
import "./signin.css";

const SignIn = () => {
  const handleSignIn = () => {
    alert("You are now signed in");
  };
  return (
    <div id="sign-in-container">
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSignIn()}
        id="sign-in-form"
        name="sign-in-form"
      >
        <h2>Sign In</h2>
        <section>
          <label>Email</label>
          <br />
          <input id="sign-in-email-input" type="email" />
        </section>
        <section>
          <label>Password</label>
          <br />
          <input id="sign-in-password-input" type="password" />
        </section>
        <section>
          <br />
          <button type="submit" form="sign-in-form">
            Sign In
          </button>
        </section>
      </form>
    </div>
  );
};
export default SignIn;
