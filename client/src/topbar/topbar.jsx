import "./topbar.css";
import Me from "../Image/Sidebar_img.jpg";
import { Link } from "react-router-dom";

function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="top-left">
        <i className="topicon fa-brands fa-facebook"></i>
        <i className="topicon fa-brands fa-twitter"></i>
        <i className="topicon fa-brands fa-linkedin"></i>
        <i className="topicon fa-brands fa-square-instagram"></i>
      </div>
      <div className="top-center">
        <ul className="toplist">
          <li className="toplistitem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="toplistitem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="toplistitem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="toplistitem">
            <Link to="/settings" className="link">
              SETTINGS
            </Link>
          </li>
          <li className="toplistitem">{user && "LOGOUT"}</li>
        </ul>
      </div>

      <div className="top-right">
        {user ? (
          <img src={Me} alt="" className="topimg" />
        ) : (
          <ul className="toplist">
            <li className="toplistitem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>

            <li className="toplistitem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        {user ? (
          <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
        ) : null}
      </div>
    </div>
  );
}

export default Topbar;
