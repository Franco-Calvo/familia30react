import React from 'react'
import './card.css'

export default function Card(props) {
  return (
      <div className="card-container">
        <div className="img-coursee">
          <img className="img-course-img" src="./stockmarket.jpg" alt="" />
        </div>
        <h5>Opciones Binarias</h5>
      </div>
    )
}
