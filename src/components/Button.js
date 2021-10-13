import React from 'react'

const Button = (props) => {
  const {onChangeHandler, report} = props;

  return (
    <button onClick={(e) => onChangeHandler(e)} type="button" className={`${report === props.text ? "btn-box__btn active" : "btn-box__btn"}`}>{props.text[0].toUpperCase()+props.text.substring(1)}</button>
  )
}

export default Button
