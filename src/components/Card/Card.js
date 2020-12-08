import React from 'react';
import './Card.scss'

const Card = (props) => {
    
    /* dogId, name, link, color, pedigree, dob, picture, fatherName, fatherPicture, 
    motherName, motherPicture, grandfatherName, grandfatherPicture, grandmotherName, grandmotherPicture, clickHandler */ 

    const clicked = () => {
      props.clickHandler(props);
  }

  const addDefaultSrc = (ev) => {
    var parent = ev.target.parentNode;
    parent.className = "hidden";
  }


    return (
        <div onClick={clicked} className='card'>
          <img onError={addDefaultSrc} className='card-pic' alt='dobermans' src={props.picture} />
          <div className='dog-name'>
              <h2 style={{marginBottom: 0}} >{props.name}</h2>
          </div>
        </div>
    );
}

export default Card;
