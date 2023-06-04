import React, { useState, useEffect } from "react";
import "../Design/Service.css";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {useNavigate} from 'react-router-dom';

const Service = ({selectedService}) => {
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
  const [value, setValue] = useState('');
  const [msg, setMsg] = useState("");
  const [TOS, setTOS] = useState("");
  const [serviceDetails, setServiceDet] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    refreshToken();
    grabAddress();
  },[userId]);

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
      const response = await axios.get(`http://localhost:5000/addresses/${userId}`);
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

  const AddToDB = async (e) =>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/services',{
        typeOfService: selectedService,
        details: serviceDetails,
        userId:userId
      });

      navigate('/submitted');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="padding"></div>
      <div className="service-container">
        <form onSubmit={AddToDB} className="service-box">
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
            <select className="field" value={selectedService}>
              <option value={1}>Gardening</option>
              <option value={2}>Housework</option>
              <option value={3}>Mental Support</option>
              <option value={4}>Heavy Lifting</option>
              <option value={5}>Delivery</option>
              <option value={6}>Construction</option>
              <option value={7}>Medical Support</option>
              <option value={8}>Others</option>
            </select>
            <textarea onChange={(e)=>setServiceDet(e.target.value)} placeholder="Job Details" class="field" required></textarea>
            <button type="submit" class="sign-btn">Send</button>
            <p>{msg}</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Service;
