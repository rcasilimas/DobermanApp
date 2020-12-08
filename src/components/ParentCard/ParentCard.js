import React from 'react';
import "./ParentCard.scss";

const ParentCard = ({picture, name, title}) => {


    return (
        <div className="parent-container">
            <h3>{title}</h3>
            <img src={picture} alt="parent" className="parent-pic" />
            <h3>{name}</h3>
        </div>
    )
}
export default ParentCard;
