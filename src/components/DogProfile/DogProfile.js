import React from 'react';
import ParentCard from '../ParentCard/ParentCard';
import MdArrowBack from 'react-ionicons/lib/MdArrowBack'
import './DogProfile.scss';

const DogProfile = ({props, clickHandler}) => {


    const clicked = () => {
        clickHandler();
    }

    return (

        <div className='dog-profile-container'>
            <div className="back-container">
                <MdArrowBack fontSize="40px" style={{cursor: "pointer"}} onClick={clicked} />
            </div>
            <div className="dog-profile">
                <img src={props.picture} alt="doberman" className="profile-pic" />
                <div className="dog-info">
                    <h2>Name: {props.name}</h2>
                    <h2>Color: {props.color}</h2>
                    <h2>Date Of Birth: {props.dob}</h2>
                </div>
            </div>
            <div className="parent-info">
                <h2 style={{marginBottom: "0"}}>Ancestry</h2>
                <ParentCard title="Father" picture={props.fatherPicture} name={props.fatherName} />
                <ParentCard title="Mother" picture={props.motherPicture} name={props.motherName} />
                <ParentCard title="Grandfather" picture={props.grandfatherPicture} name={props.grandfatherName} />
                <ParentCard title="Grandmother" picture={props.grandmotherPicture} name={props.grandmotherName} />
            </div>

        </div>
    );

}

export default DogProfile;