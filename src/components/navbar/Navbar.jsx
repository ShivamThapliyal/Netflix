import React from "react";
import { assets } from "../../assets/assets.js";
import "./navbar.css";
import { logout } from "../../firebase.js";
function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="left">
          <img src={assets.logo} alt="" />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>Browes by langauge</li>
          </ul>
        </div>
        <div className="right">
          <img src={assets.search_icon} alt="" className="icons" />
          <p>Children</p>
          <img src={assets.bell_icon} alt="" className="icons" />
          <div className="right-div">
            <img src={assets.profile_img} alt="" className="profile" />
            <img src={assets.carte_icon} alt="" />
            <div className="drop">
              <p
                onClick={() => {
                  logout();
                }}
              >
                Sign out of Netflix
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
