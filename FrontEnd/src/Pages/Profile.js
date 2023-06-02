import React, { useState } from "react";
import "../Design/Profile.css";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { BiHomeAlt2, BiLockOpenAlt } from "react-icons/bi";
import EditForm from "../Components/EditForm";
import AddressForm from "../Components/AddressForm";
import background from "../Assets/background.jpg";

function Profile() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div
      className="profile-page"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat ",
        backgroundSize: "cover",
      }}
    >
      <div className="box-profile">
        <div className="sidebar">
          <div className="user-profile">
            <FaUserCircle />
          </div>
          <h2>Username</h2>
          <ul className="sidebar-nav">
            <li>
              <div
                className={toggleState === 1 ? "active-sidenav" : "sidenav"}
                onClick={() => toggleTab(1)}
              >
                <i className="sidebar-icons">
                  <AiOutlineEdit />
                </i>
                <span>Edit Profile</span>
              </div>
            </li>
            <li>
              <div
                className={toggleState === 2 ? "active-sidenav" : "sidenav"}
                onClick={() => toggleTab(2)}
              >
                <i className="sidebar-icons">
                  <BiHomeAlt2 />
                </i>
                <span>Address</span>
              </div>
            </li>
            <li>
              <div
                className={toggleState === 3 ? "active-sidenav" : "sidenav"}
                onClick={() => toggleTab(3)}
              >
                <i className="sidebar-icons">
                  <BiLockOpenAlt />
                </i>
                <span>Security</span>
              </div>
            </li>
          </ul>
        </div>
        <div
          className={toggleState === 1 ? "active-profile-tab" : "profile-tab"}
        >
          <EditForm />
        </div>
        <div
          className={toggleState === 2 ? "active-profile-tab" : "profile-tab"}
        >
          <AddressForm />
        </div>
        <div
          className={toggleState === 3 ? "active-profile-tab" : "profile-tab"}
        >
          <h2>third tab</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
