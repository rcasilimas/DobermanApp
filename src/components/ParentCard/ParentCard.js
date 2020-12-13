import React from 'react';
import placeholder from '../../img/noimage.png'
import "./ParentCard.scss";

const ParentCard = ({picture, name, title}) => {

    const addDefaultSrc = (ev) => {
        ev.target.src = placeholder;
        console.log(ev.target)
      }


    return (
        <div className="parent-container">
            <h3>{title}</h3>
            <img onError={addDefaultSrc} src={picture} alt="parent" className="parent-pic" />
            <h3>{name}</h3>
        </div>
    )
}
export default ParentCard;
