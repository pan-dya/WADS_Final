import React, {useState, useRef} from "react";
import axios from "axios";

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


    const createAddress = async (e)=>{
      e.preventDefault();
      prov.current.value = "";
      cty.current.value = "";
      rgn.current.value = "";
      det.current.value = "";
      pos.current.value = "";
      try {
        await axios.post("http://localhost:5000/address", {
          province: province,
          city: city,
          regency: regency,
          details: details,
          postal_code: postal_Code
        });
        
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
}

export default AddressForm;
