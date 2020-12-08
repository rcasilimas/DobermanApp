import React, {useState, useEffect, useCallback} from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox.js';
import Scroll from './components/Scroll/Scroll.js'
import CardList from './components/CardList/CardList';
import DogProfile from './components/DogProfile/DogProfile';



function App() {
  const [profile, setProfile] = useState(null);
  const [startIndex, setStartIndex] = useState(400);
  const [endIndex, setEndIndex] = useState(500);
  const [dobermans, setDobermans] = useState([]);

  const loadMore = useCallback(() => {
    let dobermanArray = require('./dobermanjson.json');
    for (let i = startIndex; i < endIndex; i++) {
      setDobermans(c => c.concat(dobermanArray[i]));
    }
  }, [startIndex, endIndex])
  
  useEffect(() => {
    console.log(endIndex);
    loadMore();
  }, [startIndex, endIndex, loadMore]);

  const waypointTrigger = () => {
    setStartIndex(startIndex + 100);
    setEndIndex(endIndex + 100);
  } 

  const dogClicked = (props) => {
    setProfile(props);
  }

  const backClicked = () => {
    setProfile(null);
  }

  if (profile) {
    return (
      <div className="App">
      <h1>Doberman Heritage Registry</h1>
      <SearchBox hidden={true} />
      <Scroll profile={true} >
        <DogProfile props={profile} clickHandler={backClicked} />
      </Scroll>
    </div>
    )
  }
  


  return (
    <div className="App">
      <h1>Doberman Heritage Registry</h1>
      <SearchBox hidden={false} />
      <Scroll waypointTrigger={waypointTrigger} >
        <CardList dobermanData={dobermans} clickHandler={dogClicked}/>
      </Scroll>
    </div>
  );
}

export default App;
