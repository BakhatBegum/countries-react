import React, { useState, userEffect} from 'react'
import countryData from './countriesAll.json'
import './App.css'

function App() {
 

  return (
    <>
    <ToggleSwitch/>
    </>
  )
}

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);

    // Change the background color of the entire webpage
    document.body.style.backgroundColor = isToggled ? 'white' : 'black';
    document.body.style.color = isToggled ? 'black' : 'white';
  };

  return (
    <div className='header'>
    <h1>Where in the world?</h1>
    <div className= {isToggled ? 'dark-mode' : 'light-mode'}>
      <label>
        <input
          type="checkbox"
          checked={isToggled}
          onChange={handleToggle}
        />
        {/* <FontAwesomeIcon icon="fa-regular fa-moon" />    I need this icon*/}
        Dark Mood
      </label>
       </div>

      {/* <p>{isToggled ? 'Switch is ON' : 'Switch is OFF'}</p> */}
    </div>
  );
};

export default App
