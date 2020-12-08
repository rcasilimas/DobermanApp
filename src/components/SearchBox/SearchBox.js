import React from 'react';
import './SearchBox.scss'

const SearchBox = (props) => {

  if (props.hidden === true) {
    return (
      <div className='search-box-container'>
      <input
        style={{width: '25%'}}
        className='search-input'
        type='search'
        placeholder='Search Dobermans'
        disabled
        //onChange={searchChange}
      />
    </div>
    )
  }
  
  return (
    <div className='search-box-container'>
      <input
        style={{width: '25%'}}
        className='search-input'
        type='search'
        placeholder='Search Dobermans'
        //onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;