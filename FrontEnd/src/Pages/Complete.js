import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BiTimeFive } from 'react-icons/bi'
import '../Design/Complete.css'

const Complete = () => {
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
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
          setEmail(decoded.email);
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
          setExpire(decoded.exp);
        }
        return config;
      },(error)=>{
          return Promise.reject(error);
      });
    

  return (
    <div>
      <div className='padding'></div>
      <h2 className='page-title'>Thank You!</h2>
        <div className='wrapper-complete'>
              <h3>Your order has been placed!</h3>
              <p>We will send an email to {email} with order confirmation and receipt. We will be in contact shortly.</p>
        </div>
    </div>
  )
}
export default Complete