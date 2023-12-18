import React from "react";
import "./homeAddBtn.css";
import HomeIcon from "../../assets/images/home-icon.png"


export const HomeAddBtn = () => {
     return (
          <button type="button" className="addBtn">
            <img className="addBtnicon" width={20} height={20} src={HomeIcon}  alt="icon" />
               Add Listing
          </button>
     );
}

export default HomeAddBtn;