import "./settings.css";
import Sidebar from "../../sidebar/sidebar";
import Topbar from "../../topbar/topbar";
export default function settings() {
  return (
    <>
      <Topbar></Topbar>
      <div className="settings">
        <div className="settingswrapper">
          <div className="settingstitle">
            <span className="settingupdatetitle">Update Your Account</span>
            <span className="settingdeletetitle">Delete Your Account</span>
          </div>

          <form className="settingsform">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src="https://images.unsplash.com/photo-1685703206141-a18e41aa8e75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80
              "
                alt=""
              />
              <label htmlFor="fileinput">
                <i class="settingsPPicon fa-solid fa-user"></i>
              </label>
              <input type="file" id="fileinput" style={{ display: "none" }} />
            </div>
            <label>UserName</label>
            <input type="text" placeholder="Tanweer" />
            <label>Email</label>
            <input type="text" placeholder="Tanweer@gmail.com" />
            <label>Password</label>
            <input type="text" placeholder="Tanwee1234r" />

            <button className="settingssubmit">Update</button>
          </form>
        </div>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}
