import "./posts.css";
import Post from "../post/post";
// import About from "../pages/about/about"

export default function Posts({ posts }) {
  return (
    <>
      <div className="posts">
        {posts.map((p) => (
          <Post post={p}></Post>
        ))}
        <Post />
      </div>
    </>
  );
}
