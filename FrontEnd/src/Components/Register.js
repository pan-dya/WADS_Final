import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/OddJobsIcon.png";
import image from "../Assets/imageRegister.webp";
import "../Design/Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confPwd, setConfpwd] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: pwd,
        confPassword: confPwd,
      });
      navigate("/login");
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
            <div className="image-side">
              <img className="image-wrap" src={image} alt=""></img>
            </div>
            <div className="form-wrap">
              <form onSubmit={Register} className="signup-form">
                <div className="logo">
                  <img src={logo} alt="OddJobs"></img>
                  <h4>Odd Jobs</h4>
                </div>
                <div className="heading">
                  <h2>Get Started</h2>
                  <h6>Already have an account? </h6>
                  <a href="/login" className="toggle">
                    Sign in
                  </a>
                </div>
                <div className="actual-form">
                  <div className="input-wrap">
                    {/* <label>Name</label> */}
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
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
                    {/* <label>Confirm Password</label> */}
                    <input
                      type="password"
                      className="input-field"
                      placeholder="Password"
                      value={pwd}
                      onChange={(e) => setPwd(e.target.value)}
                    />
                  </div>
                  <div className="input-wrap">
                    {/* <label>Password</label> */}
                    <input
                      type="password"
                      className="input-field"
                      placeholder="Confirm Password"
                      value={confPwd}
                      onChange={(e) => setConfpwd(e.target.value)}
                    />
                  </div>
                  <button className="sign-btn">Register</button>
                </div>
                <h5>{msg}</h5>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
