import "./home.css";
import Header from "../../header/header";
import Posts from "../../posts/posts";
import Sidebar from "../../sidebar/sidebar";
import Topbar from "../../topbar/topbar";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  // const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Topbar></Topbar>
      <Header></Header>
      <div className="home">
        <Posts posts={posts}></Posts>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}
