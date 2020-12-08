import React from 'react';
import Card from '../Card/Card';

const CardList = ({dobermanData, clickHandler}) => {

  const clicked = (props) => {
    clickHandler(props);
  }


  return (
   // isPending ? <h1>Loading</h1> : (
      <div>
        {
          dobermanData.map((user, i) => {
            return (
              <Card
                clickHandler={clicked}
                key={i}
                dogId={i}
                name={dobermanData[i].Name}
                link={dobermanData[i].Link}
                color={dobermanData[i].Color}
                pedigree={dobermanData[i].Pedigree}
                dob={dobermanData[i].DOB}
                picture={dobermanData[i].Picture}
                fatherName={dobermanData[i].FatherName}
                fatherPicture={dobermanData[i].FatherPicture}
                motherName={dobermanData[i].MotherName}
                motherPicture={dobermanData[i].MotherPicture}
                grandfatherName={dobermanData[i].GrandfatherName}
                grandfatherPicture={dobermanData[i].GrandfatherPicture}
                grandmotherName={dobermanData[i].GrandmotherName}
                grandmotherPicture={dobermanData[i].GrandmotherPicture}
                />
            );
          })
        }
      </div>
//  )
  );
}


export default CardList;