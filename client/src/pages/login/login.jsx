import "./login.css";
// import { Link } from "react-router-dom";
import Topbar from "../../topbar/topbar";
import { Link } from "react-router-dom";
// import { useContext, useRef } from "react";
// import { Context } from "../../context/Context";
// import axios from "axios";

export default function login() {
  return (
    <>
      <Topbar></Topbar>
      <div className="login">
        <form className="loginform">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your mail..."
            className="logininput"
          ></input>
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter your password..."
            className="logininput"
          ></input>
          <button className="loginbutton">Login</button>
        </form>
        <Link to="/Register">
          <button className="loginRegisterbutton">Register</button>
        </Link>
      </div>
    </>
  );
}

// const userRef= useRef();
// const passwordRef= useRef();

// const {dispatch,isFetching}=useContext(Context);

//  const handleSubmit=(e)=>{
//   e.preventDefault();
//   dispatch({type:"LOGIN_START"});
//   try{
//     const res=axios.post("auth/login", {
//       username: userRef.current.value,
//       password: passwordRef.current.value,
//     })
//     dispatch({type:"LOGIN_SUCCESS", payload:res.data});
//   }
//   catch(err){
//     dispatch({type:"LOGIN_FAILURE"});
//   }

//  };

//  console.log(user)
