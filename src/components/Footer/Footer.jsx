import React from "react";
import { assets } from "../../assets/assets";
import "./Footer.css";

function Footer() {
  return (
    <div className="foot">
      <div className="foot-icon">
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.youtube_icon} alt="" />
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.instagram_icon} alt="" />
      </div>
      <ul>
        <li>Media centre</li>
        <li>Gift Centre</li>
        <li>Jobs</li>
        <li>Privacy</li>
        <li>Contact us</li>
      </ul>
      <p className="copyright">&copy; 1997-2024 Netflix, Inc.</p>
    </div>
  );
}

export default Footer;
