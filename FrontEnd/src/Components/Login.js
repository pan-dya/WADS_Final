import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/OddJobsIcon.png";
import image from "../Assets/imageLogin.jpg";
import "../Design/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: pwd,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <>
      <main className="main">
        <div className="box">
          <div className="inner-box">
            <div className="form-wrap">
              <form onSubmit={Auth} className="signin-form">
                <div className="logo">
                  <img src={logo} alt="OddJobs"></img>
                  <h4>Odd Jobs</h4>
                </div>
                <div className="heading">
                  <h2>Welcome Back</h2>
                  <h6>Not registered yet? </h6>
                  <a href="/register" className="toggle">
                    Sign Up
                  </a>
                </div>
                <div className="actual-form">
                  <div className="input-wrap">
                    {/* <label>E-Mail</label> */}
                    <input
                      type="text"
                      className="input-field"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-wrap">
                    {/* <label>Password</label> */}
                    <input
                      type="password"
                      className="input-field"
                      placeholder="Password"
                      value={pwd}
                      onChange={(e) => setPwd(e.target.value)}
                    />
                  </div>
                  <button className="sign-btn">Login</button>
                </div>
                <h5>{msg}</h5>
              </form>
            </div>
            <div className="image-side">
              <img className="image-wrap" src={image} alt=""></img>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
