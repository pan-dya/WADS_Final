import React from "react";
import "../Design/Service.css";

const Service = () => {
  return (
    <>
      <div className="padding"></div>
      <div className="service-container">
        <form className="service-box">
          <div className="left">
            <h2>Details</h2>
            <input type="text" className="field" placeholder="Your Name" />
            <input type="text" className="field" placeholder="Your Email" />
            <input type="text" className="field" placeholder="Phone" />
            <h2>Address</h2>
            <input type="text" className="field" placeholder="Province" />
            <input type="text" className="field" placeholder="City" />
            <input type="text" className="field" placeholder="Regency" />
            <input type="text" className="field" placeholder="Details" />
            <input type="text" className="field" placeholder="Post Code" />
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
