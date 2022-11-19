import React from 'react'
import './Input.scss'

function Input(props) {
    const {size='small', ...rest} = props
  return (
    <>
    <input className={`input ${size}`} {...rest} ></input>
    </>
  )
}

export default Input