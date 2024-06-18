import "./sidebar.css";
// import Sidebarimg from "../Image/Sidebar_img.jpg";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit iure
          nostrum optio tempora voluptatum ab quisquam repellat, culpa ducimus
          ratione
        </p>
      </div>

      <div className="sidebaritem">
        <span className="sidebartitle">CATEGORIES</span>
        <ul className="sidebarlist">
          <li className="sidebarlistitem">Music</li>
          <li className="sidebarlistitem">Video</li>
          <li className="sidebarlistitem">Collge</li>
          <li className="sidebarlistitem">Movie</li>
        </ul>
      </div>

      <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW ME</span>
        <div className="sidebarsocial">
          <i className="sidebaricon fa-brands fa-facebook"></i>
          <i className="sidebaricon fa-brands fa-twitter"></i>
          <i className="sidebaricon fa-brands fa-linkedin"></i>
          <i className="sidebaricon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}

// const [cats,setCats]= useState([]);

// useEffect(()=>{
//   const getCats=async()=>{

//     const res=await axios.get("/categories");
//     setCats(res.data);
//   };

//   getCats();
// },[]);
