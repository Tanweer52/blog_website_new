import { useEffect, useState } from "react";
import "./singlepost.css";
// import Y from "../Image/Sidebar_img.jpg";
import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Topbar from "../topbar/topbar";

import axios from "axios";

export default function Singlepost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setpost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setpost(res.data);
    };

    getPost();
  }, [path]);
  return (
    <>
      <div className="singlepost">
        <div className="singlepostwrapper">
          {post.photo && (
            <img
              src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="singlepostimg"
            />
          )}
          <h1 className="singleposttitle">
            {post.title}
            <div className="singlepostedit">
              <i className="singleposticon far fa-edit"></i>
              <i className="singleposticon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlepostinfo">
            <span className="singlepostauthor">
              Author:<b>{post.username}</b>
            </span>
            <span className="singlepostdate">
              {new Date(post.createdAt)}.toDateString
            </span>
          </div>

          <p className="singlepostdesc">{post.desc}</p>
        </div>
      </div>
    </>
  );
}
