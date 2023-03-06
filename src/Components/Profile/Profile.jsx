import React from "react";
import "./profile.css";

export default function Profile() {
  return (
    <div className="profile-img">
      <img src="./ImagenPerfil.jpg" alt="" />
      <span>
        <label>Franco@gmail.com</label>
        <label>Franco Calvo</label>
      </span>
    </div>
  );
}
