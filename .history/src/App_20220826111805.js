import React, {useState, useEffect } from 'react';
import axios from 'axios'
import CharacterList from './CharacterList';
import data from './mocks/handlers'



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [warsData, SetWarsData] = useState([]);
  
  useEffect(()=>{
   SetWarsData(data);
   console.log(warsData)
    
     
  },[])
  console.log(CharacterList);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterList warsData ={warsData} />
    </div>

  );
}

export default App;
