import React from "react";

function EditForm() {
  return (
    <div className="form-wrap3">
      <form className="signup-form">
        <div className="heading">
          <h2>Edit Profile</h2>
        </div>
        <div className="actual-form">
          <div className="input-wrap">
            <input
              type="text"
              className="input-field"
              placeholder="Name"
            //   value={name}
            //   onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-wrap">
            {/* <label>E-Mail</label> */}
            <input
              type="text"
              className="input-field"
              placeholder="E-mail"
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

export default EditForm;