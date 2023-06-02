import { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import "../Design/PageNotFound.css"


function PageNotFound() {
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

  return (
    <div className="pnf">
      <h1>Page Not Found :/</h1>
      <h3>
        Go to the Home Page: <Link className="linkPNF" to="/"> Home Page</Link>
      </h3>
    </div>
  );
}

export default PageNotFound;