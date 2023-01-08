import React from "react";
import "../../assets/styles/PrimaryButton.css";


const PrimaryButton = ({title}) => {
  return (
    <div id="container">
      <img src="../../assets/" alt="" />
      <div className="button">
        <button className="primary" onClick={title}>
          <div className="label">
            <span className="hover-effect"></span>
            <span className="label-text">{title}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PrimaryButton;
