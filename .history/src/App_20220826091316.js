import React from 'react';
import axios, {useState, useEffect } from 'axios'



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [warsData, SetWarsData] = useState(0)
  
  useEffect(()=>{
    axios.get("https://swapi.dev/api/people/1/")
    .then(res =>{
      SetWarsData(res.data);
      console.log(warsData);
    })
    .catch(err =>{
      console.error(err);
    })
  },[])
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
