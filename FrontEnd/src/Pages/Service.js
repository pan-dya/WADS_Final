import React, { useState, useEffect } from "react";
import "../Design/Service.css";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {useNavigate} from 'react-router-dom';
import E from "react-script";

const Service = () => {
  const [name, setName]= useState('');
  const [email, setEmail] = useState('');
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [regency, setRegency] = useState("");
  const [details, setDetails] = useState("");
  const [postal_code, setPostal_code] = useState("");
  const [token, setToken] = useState('');
  const[userId, setUserId] = useState('');
  const [expire, setExpire] = useState('');
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    refreshToken();
    grabAddress();
  },[]);

  const refreshToken = async ()=>{
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setEmail(decoded.email);
      setUserId(decoded.userId);
      setExpire(decoded.exp);
    } catch (error) {
        if(error.response){
          navigate("/login");
        }
    }
  }
  
  const grabAddress = async ()=>{
    try {
      const response = await axios.get(`http://localhost:5000/address/${userId}`);
      const userAddress = response.data;
      const province = userAddress.province;
      const city = userAddress.city;
      const regency = userAddress.regency;
      const details = userAddress.details;
      const postal_code = userAddress.postal_code;
      setProvince(province);
      setCity(city);
      setRegency(regency);
      setDetails(details);
      setPostal_code(postal_code);
      console.log(province);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="padding"></div>
      <div className="service-container">
        <form className="service-box">
          <div className="left">
            <h2>Details</h2>
            <p className="field">Name: {name}</p>
            <p className="field">E-mail: {email}</p> 
            <h2>Address</h2>
            <p className="field">Province: {province}</p>
            <p className="field">City: {city}</p>
            <p className="field">Regency: {regency}</p>
            <p className="field">Details: {details}</p>
            <p className="field">Postal Code: {postal_code}</p>
            
          </div>
          <div className="right">
            <h2>Job Details</h2>
            <h5>Tell us more (number of workers, days of contract, etc)</h5>
            <select className="field" placeholder="Type of Service">
              <option>Gardening</option>
              <option>Housework</option>
              <option>Mental Support</option>
              <option>Heavy Lifting</option>
              <option>Delivery</option>
              <option>Construction</option>
              <option>Medical Support</option>
              <option>Others</option>
            </select>
            <textarea placeholder="Job Details" class="field"></textarea>
            <button class="sign-btn">Send</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Service;
