import "./about.css";
import Sidebar from "../../sidebar/sidebar";
import Topbar from "../../topbar/topbar";
export default function about() {
  return (
    <div className="about">
      <Topbar></Topbar>
      <Sidebar />
    </div>
  );
}
