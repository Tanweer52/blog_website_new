// import React from 'react'
import "./header.css";
import HeaderImg from "../Image/Header_img.jpg";
function header() {
  return (
    <div className="header">
      <div className="headertitle">
        <span className="headertitlesmall">Publish Your Interest,</span>
        <span className="headertitleslarge">Your Way</span>
      </div>

      <img src={HeaderImg} alt="" className="headerimg" />
    </div>
  );
}

export default header;
