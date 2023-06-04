import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

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

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      const decoded = jwt_decode(response.data.accessToken);
      setUserId(decoded.userId);
    } catch (error) {
      console.log(error);
    }
  };

  const createAddress = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:5000/address/${userId}`
      );
      const existingAddress = response.data;

      if (existingAddress.length > 0) {
        // Address exists, perform update
        await axios.put(`http://localhost:5000/address/${userId}`, {
          province: province,
          city: city,
          regency: regency,
          details: details,
          postal_code: postal_Code,
        });

        setMsg("Address Successfully Updated");
      } else {
        // Address does not exist, perform create
        await axios.post("http://localhost:5000/address", {
          province: province,
          city: city,
          regency: regency,
          details: details,
          postal_code: postal_Code,
          userId: userId,
        });

        setMsg("Address Successfully Added");
      }
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
              required
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
              required
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
              required
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
              required
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
              maxLength="5"
              required
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
