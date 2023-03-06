import React from 'react'
import './navbar.css'
import {FaHome, FaGraduationCap, FaCommentDots, FaUserAlt } from 'react-icons/fa'

export default function NavBar(props) {
  return (
    <nav>
      <a href="#" className='active'><span className='icon-a active'><FaHome/></span>Inicio</a>
      <a href="#"><span className='icon-a'><FaGraduationCap/></span>Cursos</a>
      <a href="#"><span className='icon-a'><FaCommentDots/></span>Chat</a>
      <a href="#"><span className='icon-a'><FaUserAlt/></span>Perfil</a>
    </nav>
  )
}
