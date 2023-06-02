import React, { useState, useEffect } from "react";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {useNavigate} from 'react-router-dom';
import "../Design/Profile.css";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { BiHomeAlt2, BiLockOpenAlt } from "react-icons/bi";
import EditForm from "../Components/EditForm";
import AddressForm from "../Components/AddressForm";

const Profile = () => {
  const [toggleState, setToggleState] = useState(1);
  const [name, setName]= useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();
  useEffect(()=>{
    refreshToken();
  },[]);

  const refreshToken = async ()=>{
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
        if(error.response){
          navigate("/login");
        }
    }
  }

  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(async(config)=>{
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()){
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    }
    return config;
  },(error)=>{
      return Promise.reject(error);
  });

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="profile-page">
      <div className="box-profile">
        <div className="sidebar">
          <div className="user-profile">
            <FaUserCircle />
          </div>
          <h2>Username</h2>
          <ul className="sidebar-nav">
            <li>
              <div
                className={toggleState === 1 ? "active-sidenav" : "sidenav"}
                onClick={() => toggleTab(1)}
              >
                <i className="sidebar-icons">
                  <AiOutlineEdit />
                </i>
                <span>Edit Profile</span>
              </div>
            </li>
            <li>
              <div
                className={toggleState === 2 ? "active-sidenav" : "sidenav"}
                onClick={() => toggleTab(2)}
              >
                <i className="sidebar-icons">
                  <BiHomeAlt2 />
                </i>
                <span>Address</span>
              </div>
            </li>
            <li>
              <div
                className={toggleState === 3 ? "active-sidenav" : "sidenav"}
                onClick={() => toggleTab(3)}
              >
                <i className="sidebar-icons">
                  <BiLockOpenAlt />
                </i>
                <span>Security</span>
              </div>
            </li>
          </ul>
        </div>
        <div
          className={toggleState === 1 ? "active-profile-tab" : "profile-tab"}
        >
          <EditForm/>
        </div>
        <div
          className={toggleState === 2 ? "active-profile-tab" : "profile-tab"}
        >
          <AddressForm/>
        </div>
        <div
          className={toggleState === 3 ? "active-profile-tab" : "profile-tab"}
        >
          <h2>third tab</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
