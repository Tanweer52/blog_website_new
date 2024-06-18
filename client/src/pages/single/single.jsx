import "./single.css";
import Sidebar from "../../sidebar/sidebar";

import SinglePost from "../../singlepost/singlepost";

export default function single() {
  return (
    <div className="single">
      <SinglePost></SinglePost>
      <Sidebar></Sidebar>
    </div>
  );
}
