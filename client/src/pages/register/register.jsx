import "./register.css";
import { Link } from "react-router-dom";
import Topbar from "../../topbar/topbar";
// import { useState } from "react";
// import axios from "axios";
export default function Register() {
  return (
    <>
      <Topbar></Topbar>
      <div className="register">
        <span className="registertitle">Register</span>
        <form action="" className="registerform">
          <label>Username</label>
          <input
            type="text"
            className="registerinput"
            placeholder="Enter Your Username"
          />
          <label>Email</label>
          <input
            type="text"
            className="registerinput"
            placeholder="Enter Your Email"
          />
          <label>Password</label>
          <input
            type="text"
            className="registerinput"
            placeholder="Enter Your Password"
          />
          <button className="registerbutton" type="submit">
            Register
          </button>
        </form>
        <button className="registerLoginbutton">
          <Link to="/login" className="link" style={{ color: "white" }}>
            Login
          </Link>
        </button>
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went Wrong!
        </span>
      </div>
    </>
  );
}
