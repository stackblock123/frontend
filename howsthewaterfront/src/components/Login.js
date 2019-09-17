import React, { useState } from "react";
import { Auth } from "aws-amplify";
import "../styles/signup.css";
// import Header from "./Header";
import logo from "../assets/Logo - htw.png";
import logoWords from "../assets/Logo - htw - words.png";
import Search from "./Search";
import Footer from "./Footer";
import useForm from "../components/helper/useForm";
import validate from "../components/helper/validateSignIn";
import { withRouter } from "react-router-dom";

function Login(props) {
  const [emailVerifyError, setEmailVerifyError] = useState("");
  const handleSignIn = async () => {
    console.log("SIGN IN CLICKED");
    try {
      const user = await Auth.signIn(values.email, values.password);
      console.log(user);
      props.history.push("/home");
    } catch (error) {
      console.log("Error is " + error.message);
      if (error.message === "User is not confirmed.") {
        setEmailVerifyError("Please verify your email address.");
      }
    }
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    handleSignIn,
    validate
  );

  return (
    <div>
      {/* <Header /> */}
      {/* Header Content for Landing page */}
      <header>
        {/* Logo section on the left of header */}
        <div className="logo-container">
          <a href="/">
            <img className="logo" src={logo} alt="How's the water logo" />
          </a>
          <img className="logo-txt" src={logoWords} alt="How's the water" />
        </div>

        {/* Navigation section on the right of header */}
        {/* Hamburger icon for smaller screen size */}
        <label className="hamburger-icon" htmlFor="toggle">
          &#9776;
        </label>
        <input type="checkbox" id="toggle" />

        {/* Navigation links - header - right */}
        <nav className="menu">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="/login">Login</a>
          <button
            className="signup-button"
            onClick={() => props.history.push("/signup")}
          >
            SIGN UP
          </button>
        </nav>
      </header>
      <div className="search-body">
        <Search />
      </div>
      <div className="signin-body">
        <div className="signin-content">
          <div>
            <button
              className="loginBtn loginBtn--facebook"
              onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}
            >
              Sign-up with Facebook
            </button>
          </div>
          <div>
            <button
              className="loginBtn loginBtn--google"
              onClick={() => Auth.federatedSignIn({ provider: "Google" })}
            >
              Sign-up with Google
            </button>
          </div>
          <div className="divider">
            <div className="hr_bar" />
            <div className="divider-text">OR</div>
            <div className="hr_bar" />
          </div>
          <form noValidate className="input-form" onSubmit={handleSubmit}>
            <input
              className="input-txt"
              type="email"
              name="email"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
            />
            {emailVerifyError && (
              <div className="error-signup">{emailVerifyError}</div>
            )}
            {errors.email && <div className="error-signup">{errors.email}</div>}

            <input
              className="input-txt"
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="error-signup">{errors.password}</div>
            )}

            <button className="signup-btn">Sign In</button>
          </form>
        </div>
        {/* FOOTER SECTION */}
        <footer className="footer">
          <Footer />
        </footer>
        {/* END OF FOOTER SECTION */}
      </div>
    </div>
  );
}

export default withRouter(Login);
