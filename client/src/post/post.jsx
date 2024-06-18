import "./post.css";
// import X from "../Image/Post_img.jpg";
import { Link } from "react-router-dom";
// import axios from "axios";

export default function Post({ post }) {
  return (
    <div className="post">
      {post.photo && (
        <img
          src="https://images.unsplash.com/photo-1499728603263-13726abce5fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="postimg"
        />
      )}

      <div className="postinfo">
        <div className="postcats">
          {post.categories.map((c) => (
            <span className="postcat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="posttitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postdate">
          {new Date(post.createdAt).toDateString}
        </span>
      </div>

      <p className="postdesc">{post.desc}</p>
    </div>
  );
}

// c m t a d y m l
