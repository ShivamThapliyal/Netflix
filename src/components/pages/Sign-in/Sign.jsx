import React from "react";
import { useState } from "react";
import "./sing-in.css";
import { assets } from "../../../assets/assets";
import { login, singup } from "../../../firebase";

function Sign() {
  const [change, setchange] = useState(true);
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);
  // const [confirm, setconfirm] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    setloading(true);
    if (change === true) {
      await login(email, password);
    } else {
      await singup(user, email, password);
    }
    setloading(false);
  };

  return loading ? (
    <div className="gif">
      <img src={assets.netflix_spinner} alt="" />
    </div>
  ) : (
    <div className="log-in">
      <img src={assets.logo} alt="" />
      <div className="main">
        <div className="head">{change ? <p>Log In</p> : <p>Sign Up</p>}</div>
        {change ? (
          <div className="login">
            <div className="inputs">
              <img src={assets.gmail} alt="" />
              <input
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type="text"
                placeholder="Email"
              />
            </div>

            <div className="inputs">
              <img src={assets.password} alt="" />
              <input
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="text"
                placeholder="Password"
              />
            </div>
          </div>
        ) : (
          <div className="sign">
            <div className="inputs">
              <img src={assets.user} alt="" />
              <input
                type="text"
                placeholder="Name"
                value={user}
                onChange={(e) => {
                  setuser(e.target.value);
                }}
              />
            </div>
            <div className="inputs">
              <img src={assets.gmail} alt="" />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="inputs">
              <img src={assets.password} alt="" />
              <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            {/* <div className="inputs">
              <img src={assets.password} alt="" />
              <input
                type="text"
                placeholder="Confirm Password"
                value={confirm}
                onChange={(e) => {
                  setconfirm(e.target.value);
                }}
              />
            </div> */}
          </div>
        )}

        <div className="btn">
          <button
            className={change === true ? "buttons" : "buttons gray"}
            onClick={() => {
              setchange(true);
            }}
          >
            Log In
          </button>
          <button
            className={change === false ? "buttons" : "buttons gray"}
            onClick={() => {
              setchange(false);
            }}
          >
            Sign Up
          </button>
        </div>
        <div className="submit">
          <button className="sub" onClick={user_auth}>
            SUBMIT
          </button>
          <div className="check">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember Me</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
