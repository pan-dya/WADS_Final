import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const EditForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const refreshToken = async () => {
      try {
        const response = await axios.get("http://localhost:5000/token");
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setEmail(decoded.email);
        setUserId(decoded.userId);
      } catch (error) {
        if (error.response) {
          navigate("/login");
        }
      }
    };
    refreshToken();
  }, [navigate]);

  const update_User = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/users/${userId}`, {
        name: name,
      });
      navigate(0);
    } catch (error) {
      setMsg(error.response.data.msg);
    }
  };
  return (
    <div className="form-wrap3">
      <form onSubmit={update_User} className="signup-form">
        <div className="heading">
          <h2>Edit Profile</h2>
        </div>
        <div className="actual-form">
          <div className="input-wrap"> Name : {name}</div>
          <div className="input-wrap"> Email : {email}</div>
          <div className="input-wrap">
            <input
              type="text"
              className="input-field"
              placeholder="New Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button className="sign-btn">Save Changes</button>
        </div>
        <h5>{msg}</h5>
      </form>
    </div>
  );
};

export default EditForm;
