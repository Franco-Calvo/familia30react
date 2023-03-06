import React from 'react'
import './inputbutton.css'

export default function InputButton(props) {
  return (
    <div className='input-button-container'>
    <input  type={props.type} value={props.value} />
    <p>{props.text}</p>
    </div>
  )
}
