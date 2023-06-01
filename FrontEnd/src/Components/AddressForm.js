import React from "react";

function AddressForm() {
  return (
    <div className="form-wrap4">
      <form className="signup-form">
        <div className="heading">
          <h2>Edit Address</h2>
        </div>
        <div className="actual-form">
          <div className="input-wrap">
            <input
              type="text"
              className="input-field2"
              placeholder="Province"
              //   value={name}
              //   onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-wrap">
            <input
              type="text"
              className="input-field2"
              placeholder="City"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrap">
            <input
              type="text"
              className="input-field2"
              placeholder="Regency"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrap">
            <input
              type="text"
              className="input-field2"
              placeholder="Details"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrap">
            <input
              type="text"
              className="input-field2"
              placeholder="Postal Code"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="sign-btn">Save Changes</button>
        </div>
        {/* <h5>{msg}</h5> */}
      </form>
    </div>
  );
}

export default AddressForm;
