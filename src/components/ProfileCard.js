import React from 'react';
import './ProfileCard.css';
import Button from './Button';

const ProfileCard = (props) => {
  const {onChangeHandler, report, active, details} = props;

  const keys = Object.keys(details[0].timeframes);

  return (
    <div className="profile-card">
      <div className="profile-card__header-box">
        <img src="./images/image-jeremy.png" className="profile__img" alt="profile picture"/>
        <div className="profile__text-box">
          <small className="profile__small">Report for</small>
          <h1 className="profile__name">Jeremy Robson</h1>
        </div>
      </div>
      <div className="profile-card__btn-box">
        {keys.map(key => {
          return (
            <Button key={key} onChangeHandler={onChangeHandler} report={report} text={key}/>
          )
        })}
      </div>
    </div>
  )
}

export default ProfileCard
