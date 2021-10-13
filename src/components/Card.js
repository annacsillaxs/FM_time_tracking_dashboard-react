import React from 'react';
import './Card.css';

const Card = (props) => {
  const {title, timeframes, logo, report} = props;
 
  const bgColor = {
    backgroundColor: `var(--primary-${title.toLowerCase()})`,
  }

  return (
    <div className="card">
      <div className="card__header" style={bgColor}>
        <img src={logo} alt={title} className="card__img"/>
      </div>
      <div className="card__content">
        <div className="card__title-box">
          <h2 className="card__title">{title}</h2>
          <div className="card__dot-box">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="card__details-box">
          <p className="card__hrs">{timeframes[report].current}hrs</p>
          <small className="card__small">Last week - {timeframes[report].previous}hrs</small>
        </div>
      </div>
    </div>
  )
}

export default Card
