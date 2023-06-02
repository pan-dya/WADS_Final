import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import jwt_decode from 'jwt-decode';

const AddressForm = () => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [regency, setRegency] = useState("");
  const [details, setDetails] = useState("");
  const [postal_Code, setPostal_code] = useState("");
  const [msg, setMsg] = useState("");
  const prov = useRef("");
  const cty = useRef("");
  const rgn = useRef("");
  const det = useRef("");
  const pos = useRef("");
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState('');

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setUserId(decoded.userId);
      // setExpire(decoded.exp);
    } catch (error) {
      console.log(error);
    }
  };

  const createAddress = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/address", {
        province: province,
        city: city,
        regency: regency,
        details: details,
        postal_code: postal_Code,
        userId: userId,
      });

      setProvince("");
      setCity("");
      setRegency("");
      setDetails("");
      setPostal_code("");
      setMsg("Address Successfully Added");

    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="form-wrap4">
      <form onSubmit={createAddress} className="signup-form">
        <div className="heading">
          <h2>Edit Address</h2>
          <br />
        </div>
        <div className="actual-form">
          <div className="input-wrap">
            <input
              type="text"
              className="input-field2"
              placeholder="Province"
              ref={prov}
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
          </div>
          <div className="input-wrap">
            <input
              type="text"
              className="input-field2"
              placeholder="City"
              ref={cty}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="input-wrap">
            <input
              type="text"
              className="input-field2"
              placeholder="Regency"
              ref={rgn}
              value={regency}
              onChange={(e) => setRegency(e.target.value)}
            />
          </div>
          <div className="input-wrap">
            <input
              type="text"
              className="input-field2"
              placeholder="Details"
              ref={det}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <div className="input-wrap">
            <input
              type="text"
              className="input-field2"
              placeholder="Postal Code"
              ref={pos}
              value={postal_Code}
              onChange={(e) => setPostal_code(e.target.value)}
            />
          </div>
          <button className="sign-btn">Save Changes</button>
        </div>
        <h5>{msg}</h5>
      </form>
    </div>
  );
};

export default AddressForm;
