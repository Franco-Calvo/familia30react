import React from "react";
import Profile from "../Profile/Profile";
import InputGeneral from "../InputGeneral/InputGeneral";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";
import {AiOutlineSearch} from 'react-icons/ai'
import './homeview.css'

export default function HomeView() {
  return (
    <div className="home-view">
      <NavBar/>
      <Profile />
      <InputGeneral type="search" icon={<AiOutlineSearch />} />
      <Card/>
    </div>
  );
}
