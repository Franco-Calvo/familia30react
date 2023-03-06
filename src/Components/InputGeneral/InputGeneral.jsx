import React from "react";
import "./inputgeneral.css";

export default function InputGeneral(props) {
  return (
    <>
      <div className="input-general-container">
        <label className="inputL-general"> {props.text}</label>
        <span className="input-general">
          <input className="input-general-none" type={props.type} />
          <span>{props.icon}</span>
        </span>
      </div>
    </>
  );
}
