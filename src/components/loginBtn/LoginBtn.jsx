import React from "react";
import "./loginBtn.css";
import UserImg from "../../assets/images/user.png";


export const LoginBtn = () => {
     return (
          <button type="button" className="loginBtn">
            <img className="loginBtnIcon" width={20} height={20} src={UserImg}  alt="icon" />
               Login/Register
          </button>
     );
}

export default LoginBtn;